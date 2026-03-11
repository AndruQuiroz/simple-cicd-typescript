/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
 */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches sum to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

export {};

declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

describe("subtract", () => {
  it("resta casos básicos con enteros positivos", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });
  it("resta casos con números negativos", () => {
    expect(window.subtract(-5, -2)).toBe(-3);
  });
});

describe("multiply", () => {
  it("multiplica casos básicos", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });
  it("multiplica casos con cero", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });
});

describe("divide", () => {
  it("divide casos básicos con enteros positivos", () => {
    expect(window.divide(10, 2)).toBe(5);
  });
  it("maneja caso límite de división por cero", () => {
    expect(() => window.divide(10, 0)).toThrow("División por cero no permitida");
  });
});
//