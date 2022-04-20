/**
 *
 * In this project you can find an introduction to unit test
 * using your browser as a code editor.
 * Our goal is to help students to learn javascript
 * and have a good introduction to unit tests without using
 * a javascript framework.
 * 
 * With this project you can run vanilla javascript unit
 * tests using your browser.
 * 

/**
 *  
 * How to use this project:
 *
 * Paste to source code to your console or source snippet,
 * Run the code;
 *
 * Create a Assertions const to access the assertions:
 * ->   const Assertions = window["Assertions"]
 *
 * use the Assertions
 * Ex.:
 *      Assertions.expect("assertion description", 1 + 2).toBe(3)
 */

/**
 *
 * Examples
 *
 * Assertions.it("should throw error", () => Assertions.assertEquals(1, 2));
 *
 * Assertions.it("should pass", () => Assertions.assertEquals(1, 1));
 *
 * Assertions.it("shoul not pass", () => Assertions.notNull(null));
 *
 * Assertions.expect("should pass", 1 + 2).toBe(3)
 *
 * Assertions.expect("should not pass", 1 + 2).toBe(7)
 *
 */

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

  /**
   *
   * @param {string} description
   * @param {*} expression
   * @returns string or else throw error
   */
  expect: (description, expression) => {
    return {
      /**
       *
       * @param {*} val is the expected value of the expression
       */
      toBe: (val) => {
        if (expression !== val) {
          console.log("\x1b[31m%s\x1b[0m", "\u2718 " + description);
          throw new Error(`${expression} is different from ${val}`);
        } else {
          console.log(
            "\x1b[32m%s\x1b[0m",
            "\u2714 " + `Test passed: ${expression} is equal to expected ${val}`
          );
        }
      },
    };
  },
};

/**
 * set Assertions to global window object */
window.Assertions = Assertions;
