/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable no-invalid-this */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extend-native */

/** WARNING: This doesn't currently work as expected. */
export default () => {
  // List of array methods to intercept
  const methods: string[] = [
    "map",
    "filter",
    "flatMap",
    "reduce",
    "forEach",
    "some",
    "every",
    "find",
    "findIndex",
  ] as const;

  // Store original methods
  const originals: {
    [key in (typeof methods)[number]]: (...args: any[]) => any;
  } = {};

  let wasCalled = false;

  // Intercept each method
  methods.forEach((method: any) => {
    originals[method] = Array.prototype[method];

    Array.prototype[method] = function (
      this: any,
      fn: (...args: any[]) => any,
      thisArg?: any
    ) {
      // Restore original methods immediately after interception
      methods.forEach((m: any) => {
        Array.prototype[m] = originals[m];
      });

      // Wrap the callback to log when index === 0
      const wrapper = function (value: any, index: number, array: any[]) {
        if (!wasCalled) {
          console.log(`---- bookmarklets ---- [${method}] array:`, array);
          wasCalled = true;
        }
        return fn.call(thisArg, value, index, array);
      };

      // Call the original method with the wrapped callback
      return originals[method].call(this, wrapper, thisArg);
    };
  });
};
