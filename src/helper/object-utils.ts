export function clone(value: any) {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return value;
  }
}

export function isEqual<T>(a: T, b: T): boolean {
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
}



// export function clone(value: any) {
//   try {
//     return JSON.parse(JSON.stringify(value));
//   } catch (error) {
//     return value;
//   }
// }