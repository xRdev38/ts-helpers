/**
 * Downloads a URL as a file.
 * @param url - The URL to be downloaded.
 * @param fileName - The name of the file.
 */
export function downloadUrl(url: string, fileName: string) {
  const a = document.createElement('a');
  document.body.append(a);
  a.style.display = 'none';
  a.href = url;
  a.download = fileName;
  a.click();

  window.URL.revokeObjectURL(url);
  a.remove();
}

/**
 * Downloads a Blob as a file.
 * @param blob - The Blob to be downloaded.
 * @param fileName - The name of the file.
 */
export function downloadBlob(blob: Blob, fileName: string) {
  const url = window.URL.createObjectURL(blob);
  downloadUrl(url, fileName);
}

/**
 * Downloads a JSON object as a file.
 * @param data - The JSON object to be downloaded.
 * @param fileName - The name of the file.
 */
export function downloadJson(data: object, fileName: string) {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'text/json;charset=utf-8;' });
  return downloadBlob(blob, fileName);
}
