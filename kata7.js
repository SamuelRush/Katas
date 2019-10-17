let camelCase = function(input) {
  let message = "";
  let capital = false;
  for (let x = 0; x < input.length; x++) {
    if (input[x] === " ") {
      capital = true;
    } else {
      if (capital === true) {
        message = message + input[x].toUpperCase();
        capital = false;
      } else {
        message = message + input[x];
      }
    }
  }
  return message;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
