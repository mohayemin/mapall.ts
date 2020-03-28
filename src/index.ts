export function mapAll<T extends object>(toType: { new(...args: any[]): T; }, source: any): T {
  let dest = new toType();
  for (const prop in dest) {
    if (dest.hasOwnProperty(prop)) {
      dest[prop] = source[prop];
    }
  }
  return dest;
}
