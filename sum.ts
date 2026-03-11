/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

// 1. Agregar la resta
(window as any).subtract = (a: number, b: number): number => {
  return a - b;
};

// 2. Agregar la multiplicación
(window as any).multiply = (a: number, b: number): number => {
  return a * b;
};

// 3. Agregar la división (manejando la división por cero con un error)
(window as any).divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("División por cero no permitida");
  }
  return a / b;
};