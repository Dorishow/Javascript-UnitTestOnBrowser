/**
 * Assertions object contains all test methods */
const Assertions = {
  /**
   * @param {string} description
   * @param {()=>void} callBackFn
   */
  it: (description, callBackFn) => {
    try {
      const assertion = callBackFn();
      console.log("\x1b[32m%s\x1b[0m", "\u2714 " + description, assertion);
    } catch (error) {
      console.log("\x1b[31m%s\x1b[0m", "\u2718 " + description);
      console.error(error);
    }
  },

  /**
   * @param {*} var1
   * @param {*} var2
   * @returns string or else throw error
   */
  assertEquals: (var1, var2) => {
    if (var1 !== var2) {
      throw new Error(`${var1} is not equals to ${var2}`);
    } else {
      return `Test passed: ${var1} equals to ${var2}`;
    }
  },

  /**
   * @param {*} var1
   * @param {*} var2
   * @returns string or else throw error
   */
  assertNotEquals: (var1, var2) => {
    if (var1 === var2) {
      throw new Error(`${var1} and ${var2} are equals, but expected not`);
    } else {
      return `Test passed: ${var1} and ${var2} are not equals`;
    }
  },

  /**
   *
   * @param {*} var1
   * @returns string or else throw error
   */
  notNull: (var1) => {
    if (var1 === null) {
      throw new Error(`${var1} is null`);
    } else {
      return `Test passed: ${var1} is not null`;
    }
  },
};

/**
 * set Assertions to global window object */
window.Assertions = Assertions;

/**
 * Examples
 *
 * Assertions.it("should throw error", () => Assertions.assertEquals(1, 2));
 *
 * Assertions.it("should pass", () => Assertions.assertEquals(1, 1));
 *
 */
