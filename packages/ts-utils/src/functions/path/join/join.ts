function getUrlPrefix(cleanPath1: string, scheme: string) {
  let urlPrefix;
  if (cleanPath1.indexOf('///') === 0 && scheme === 'file:') {
    urlPrefix = '///';
  } else if (cleanPath1.indexOf('//') === 0) {
    urlPrefix = '//';
  } else if (cleanPath1.indexOf('/') === 0) {
    urlPrefix = '/';
  } else {
    urlPrefix = '';
  }
  return urlPrefix;
}

function processUrlToUrlResult(urlParts: string[], resultUrlParts: string[]) {
  for (const urlPart of urlParts) {
    if (urlPart === '..') {
      // retain leading ..
      // don't pop out previous ..
      // retain consecutive ../../..
      if (
        resultUrlParts.length > 0 &&
        resultUrlParts[resultUrlParts.length - 1] !== '..'
      ) {
        resultUrlParts.pop();
      } else {
        resultUrlParts.push(urlPart);
      }
    } else if (!(urlPart === '.' || urlPart === '')) {
      resultUrlParts.push(urlPart);
    }
  }
}

/**
 * Joins two paths.
 * from aurelia-path
 *
 * @param path1 The first path.
 * @param path2 The second path.
 * @returns The joined path.
 */
export function join(path1: string | null, path2: string | null): string {
  if (!path1) {
    return path2!;
  }

  if (!path2) {
    return path1;
  }

  const schemeMatch = path1.match(/^([^/]*?:)\//);
  const scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
  const cleanPath1 = path1.slice(scheme.length);

  const resultUrlParts: string[] = [];
  const url1Parts = cleanPath1.split('/');
  processUrlToUrlResult(url1Parts, resultUrlParts);
  const url2Parts = path2.split('/');
  processUrlToUrlResult(url2Parts, resultUrlParts);

  const urlPrefix = getUrlPrefix(cleanPath1, scheme);
  const trailingSlash = path2.slice(-1) === '/' ? '/' : '';

  return `${scheme}${urlPrefix}${resultUrlParts.join('/')}${trailingSlash}`;
}
