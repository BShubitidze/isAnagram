console.log("Enter two string");
function isAnagram(str1, str2) {
  str1 = str1.replace(/[^a-z0-9]/gi, "").toLowerCase();
  str2 = str2.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

let sort1 = prompt("Enter the first string: ");
let sort2 = prompt("Enter the second string: ");

if (isAnagram(sort1, sort2)) {
  console.log("It is an anagram");
} else {
  console.log("It is not an anagram");
}
