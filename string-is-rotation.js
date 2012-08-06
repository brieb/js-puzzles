#!/usr/local/bin/node

function isRotation(str1, str2) {
  return str2.length === str1.length &&
    (str1 + str1).indexOf(str2) !== -1;
}

console.log(isRotation("waterbottle", "erbottlewat"));
console.log(isRotation("waterbottlewaterbottle", "erbottlewat"));

