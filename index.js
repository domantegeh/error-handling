try {
  console.log("Start of block try");
  errorCode;
  console.log("End of block try");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("This will be executed");
}

const json = '{"name": "Yoda", "age" : 20}';
try {
  const user = JSON.parse(json);
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.age);
}

const json1 = "{ bad json }";
try {
  const user1 = JSON.parse(json1);
  console.log(user1.name);
  console.log(user1.name);
} catch (error) {
  console.log(error.name);
  console.log(error.age);
}

// try-catch-throw
console.log("Try-Catch-Throw");
const userData = '{"name": "Yoga", "age":"30"}';
try {
  const newUser = JSON.parse(userData);
  if (!newUser.name) {
    throw new SyntaxError("'name' is required");
  }

  errorCode;

  console.log(newUser.name);
  console.log(newUser.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
