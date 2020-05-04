Ex.1.
function isUnique(arr) {
  let item = arr[0];
  let result = true;
  for (let elem of arr) {
    if (elem !== item) {
      result = false;
      break;
    }
  }
  return result;
}


Ex.2.
function getSumOfQdr(arr) {
  let result = 0;
  for (let elem of arr) {
    if (elem % 2 === 0) {
      result += Math.pow(elem, 2);
    }
  }
  return result;
}



Ex.3.

function isPalindrome(str) {
  let result = true;
  for (let [i, j] = [0, str.length - 1]; i <= Math.ceil(str.length / 2); i++, j--) {
    if (str[i] !== str[j]) {
      result = false;
      break;
    }
  }
  return result;
}


Ex.4.
function findTheAnagram(str, arr) {
  let result = [];
  str = str.split("").sort().join("");
   for (let elem of arr) {
     if (elem.length !== str.length) {
       continue;
     }
     if ( elem.split("").sort().join("") === str) result.push(elem);
   }
  return result;
}