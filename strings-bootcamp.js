//STRINGS BOOTCAMP SOLUTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//EXERCISE REPEAT---------------------------------------------------------------------->

function Repeat(strings, number) {
  let repeatStrings = "";

  while (number > 0) {
    repeatStrings += strings;
    number--;
  }
  return repeatStrings;
}

function main() {
  console.log("Output for exercise-repeat: ");

  let strings = "Cool";
  let number = 2;
  let outputRepeat = Repeat(strings, number);
  console.log(outputRepeat);
}

main();

// EXERCISE containChar---------------------------------------------------------------------->

function containsChar(strings, character) {
  //Method-1

  for (let i = 0; i < strings.length; i++) {
    if (strings[i] == character) {
      return true;
    }
  }

  return false;
}

function main2() {
  console.log("output for containsChar: ");
  let strings = "Wonderful";
  let character = "l";
  let OutputConChar = containsChar(strings, character);
  console.log(OutputConChar);
}

main2();

// EXERCISE indexOfChar-------------------------------------------------------------------------->

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

// EXERCISE startWith------------------------------------------------------------------------------->

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

// EXERCISE endsWith-------------------------------------------------------------------------------->

function endsWith(strings, character) {
  return strings[strings.length - 1] == character;
}

function main5() {
  console.log("output for endsWith: ");
  let strings = "awesome";
  let character = "e";
  let output = endsWith(strings, character);
  console.log(output);
}

main5();

// EXERCISE REVERSE---------------------------------------------------------------------------------->

function reverse(strings) {
  /*let reverseStrings = "";
  for (let i = strings.length - 1; i >= 0; i--) {
    reverseStrings += strings[i];
  }
  return reverseStrings;*/

  let n = "";
  for (i in strings) {
    n = strings[i] + n;
  }
  return n;
}

function main6() {
  console.log("output for reverse: ");
  let strings = "Good mornig!";
  let output = reverse(strings);
  console.log(output);
}
main6();

//EXERCISE removeChar ------------------------------------------------------------------------------->

function removeChar(strings, character) {
  let newStrings = "";
  for (let i = 0; i < strings.length; i += 1) {
    if (strings[i] != character) {
      newStrings += strings[i];
    }
  }
  return newStrings;
}

function main7() {
  console.log("output for removeChar: ");
  let strings = "Good day!";
  let character = "o";
  let output = removeChar(strings, character);
  console.log(output);
}

main7();

//Exercise replaceChar ------------------------------------------------------------------------------>

function replceChar(strings, char1, char2) {
  let manipulatedString = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] == char1) {
      manipulatedString += char2;
    } else manipulatedString += strings[i];
  }
  return manipulatedString;
}

function main8() {
  console.log("output for replchar: ");
  let strings = "super cool";
  let char1 = "o";
  let char2 = "w";
  let result = replceChar(strings, char1, char2);
  console.log(result);
}

main8();

// Substring ----------------------------------------------------------------------------------------->

function subsString(strings, start, stop) {
  let subsStrings = "";
  for (i = start; i <= stop; i++) subsStrings += strings[i];
  return subsStrings;
}

function main9() {
  console.log("output for subsString: ");
  let strings = "Hello world";
  let start = 1;
  let stop = 4;
  let result = subsString(strings, start, stop);
  console.log(result);
}

main9();

// Contains ----------------------------------------------------------------------------------------------------->

function contains(strings, subsStrings) {
  for (let i = 0; i < strings.length; i++) {
    // Call previous subsString function from above to specifie indexex to compare.
    let subs = subsString(strings, i, i + subsStrings.length - 1);
    if (subs == subsStrings) {
      return true;
    }
  }
  return false;
}

function main10() {
  console.log("output for contains: ");
  let strings = "super cool";
  let subsStrings = "cool";
  let result = contains(strings, subsStrings);
  console.log(result);
}

main10();

// EXERCISE remove ------------------------------------------------------------------------------------------------------>
function remove(strings, subsStrings) {
  let newStrings = "";
  console.log(newStrings);
  for (let i = 0; i < strings.length; i++) {

    // Call previous subsString function from above to detect indexes which have similar exact similar char and spaces .

    let subs = subsString(strings, i, i + subsStrings.length - 1);
    if (subs == subsStrings) {
      i += subsStrings.length - 1;
    } else {
      newStrings += strings[i];
    }
  }
  return newStrings;
}

function main11() {
  console.log("output for remove: ");
  let strings = "Hello world";
  let subsStrings = "lo wo";
  let result = remove(strings, subsStrings);
  console.log(result);
}

main11();


// EXERCISE encrypt----------------------------------------------------------------------------------->
function encrypt(strings) {
  let charGroup = "bcdfghjklmnopqrstuvwxyz" ;
  let encrypted = "";
  
  for (let i = 0; i < strings.length; i++) {

    // Call previous function from above
    let funccontchar = containsChar(charGroup, strings[i]);
    if (funccontchar) {
      encrypted += strings[i] + 'o' + strings[i];
    } else {
      encrypted += strings[i];
    }
  }
  return encrypted;
}

function main12() {
  console.log("output for encrypt: ");
  let strings = "hej på dig";

  let result = encrypt(strings);
  console.log(result);
}

main12();



//EXERCISE  decrypted--------------------------------------------------------------------------------->

function decrypt(strings) {
  let charGroup = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVXYZ" ;
  let decrypted = "";
  
  for (let i = 0; i < strings.length; i++) {

    // Call previous function from above
    let funccontchar = containsChar(charGroup, strings[i]);
    if (funccontchar) {
      i += 2;
      
    } 
      decrypted += strings[i];
      
    }
  
  return decrypted;
}

function main13() {
  console.log("output for decrypt: ");
  let strings = "hohejoj popå dodigog";

  let result = decrypt(strings);
  console.log(result);
}

main13();



                           // ===============================================//






