import { isObject } from '../../../guards/structural';
import { isDeepEqual } from '../../equal/equal';
import { getKeysTwoObjects } from '../../core/helpers';

export const diffObject = (object: any, original: any = {}) => {
  if (
    Array.isArray(object) ||
    Array.isArray(original) ||
    !isObject(object) ||
    !isObject(original)
  ) {
    return {};
  }

  return getKeysTwoObjects(object, original).reduce((diff: any, key: any) => {
    if (!isDeepEqual(original[key], object[key])) {
      diff[key] = object[key];
    }

    return diff;
  }, {});
};
