class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateNumberInput(a, b, c) {
  if (typeof a !== "number") {
    throw new ValidationError("'the first input' is not a number.");
  } else if (typeof b !== "number") {
    throw new ValidationError("'the second input' is not a number.");
  } else if (typeof c !== "number") {
    throw new ValidationError("'the third input' is not a number");
  }
}

const detectTriangle = (a, b, c) => {
  console.log("the first input: " + a);
  console.log("the second input: " + b);
  console.log("the third input: " + c);

  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    return error.message;
  }

  if (a === b && b === c) {
    return "Equilateral triangle";
  }

  if (a === b || a === c || b === c) {
    return "Isoceles triangle";
  }

  return "Scalene triangle";
};

console.log(detectTriangle(4, 5, 6));
