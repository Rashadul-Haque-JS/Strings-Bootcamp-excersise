//STRINGS BOOTCAMP

//EXERCISE REPEAT-------------------------------------------------------------->
function Repeat(strings, number) {
  //Method -1

  let repeatStrings = "";

  while (number > 0) {
    repeatStrings += strings;
    number--;
  }
  return repeatStrings;

  // Method-2

  /*output = strings.repeat(number);
  return output;*/
}

function main() {
  console.log("Output for exercise-repeat: ");

  let strings = "Hi";
  let number = 8;
  let outputRepeat = Repeat(strings, number);
  console.log(outputRepeat);
}

main();

// EXERCISE containChar---------------------------------------------------------->

function containsChar(strings, character) {
  //Method-1

  for (let i = 0; i < strings.length; i++) {
    if (strings[i] == character) {
      return true;
    }
  }

  return false;

  // Method-2

  /* if (strings.includes(character)) {
    return true;
  } else {
    return false;
  } */

  // Method -3

  /* let result = strings.includes(charaacter);
  console.log(result); */
}

function main2() {
  console.log("output for containsChar: ");
  let strings = "Wonderful";
  let character = "l";
  let OutputConChar = containsChar(strings, character);
  console.log(OutputConChar);
}

main2();

// EXERCISE indexOfChar--------------------------------------------------------------->

function indexOfChar(strings, char) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] == char) {
      return i;
    }
  }

  return -1;
}

function main3() {
  console.log("output for indexOfChar: ");
  let str = "super cool";
  let chr = "o";
  let result = indexOfChar(str, chr);
  console.log(result);
}

main3();

// EXERCISE startWith------------------------------------------------------------------>

function startsWith(strings, character) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[0][i] == character) {
      return true;
    }
  }

  return false;
}

function main4() {
  console.log("output for startsWith: ");
  let strings = "cool";
  let character = "c";
  let resultt = startsWith(strings, character);
  console.log(resultt);
}

main4();

// EXERCISE endsWith------------------------------------------------------------------>


function endsWith(strings, character) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[6][i] == character) {
      return true;
    }
  }

  return false;
}

function main5() {
  console.log("output for endsWith: ");
  let strings = "awesome";
  let character = "e";
  let output = endsWith(strings, character);
  console.log(output);
}

main5();  

// EXERCISE REVERSE----------------------------------------------------------------->

function reverse(strings) {
  let reverseStrings = "";
  for (let i = strings.length - 1; i >= 0; i--) {
    reverseStrings += strings[i];
  }
  return reverseStrings;

  /*let splitStrings = strings.split("");
    let output = splitStrings.reverse();
    return output.join(''); */
}

function main6() {
  console.log("output for reverse: ");
  let strings = "Good mornig!";
  let output = reverse(strings);
  console.log(output);
}
main6();


//EXERCISE removeChar ---------------------------------------------------------->

function removeChar(strings, character) {
    let newStrings;
    for (let i = 0; i < strings.length; i += 1){
        if (strings[i] == character) {
            newStrings = strings.substring(i);
        }
    }
    return newStrings;
}

function main7 () {
    console.log("output for removeChar: ");
    let strings = "Good day!";
    let character = 'd'
    let output = removeChar(strings, character);
    console.log(output);
}

main7();




