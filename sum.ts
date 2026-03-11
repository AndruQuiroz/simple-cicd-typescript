/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

// Expose to window so the HTML script can call it
(window as unknown as { sum: typeof sum }).sum = sum;

// 1. Agregar la resta
(window as unknown as { subtract: (a: number, b: number) => number }).subtract = (a: number, b: number): number => {
  return a - b;
};

// 2. Agregar la multiplicación
(window as unknown as { multiply: (a: number, b: number) => number }).multiply = (a: number, b: number): number => {
  return a * b;
};

// 3. Agregar la división (manejando la división por cero con un error)
(window as unknown as { divide: (a: number, b: number) => number }).divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("División por cero no permitida");
  }
  return a / b;
};