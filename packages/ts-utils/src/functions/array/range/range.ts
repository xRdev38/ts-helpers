/**
 * Generates an array of numbers within a specified range.
 * @param {...number} arguments_ - The start, stop, and step values (or just stop).
 * @returns {number[]} The generated array.
 */
export function range(...arguments_: number[]): number[] {
  let start: number;
  let stop: number;
  let step: number;

  if (arguments_.length === 1) {
    start = 0;
    step = 1;
    [stop] = arguments_;
  } else {
    [start, stop, step = 1] = arguments_;
  }

  const array: number[] = [];
  let current = start;
  while (current < stop) {
    array.push(current);
    current += step || 1;
  }

  return array;
}
