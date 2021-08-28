function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reverseString = polishedString.split("").reverse().join("");
    if (polishedString != reverseString)  return false; return true;
}




palindrome("eye");