const isPalindrome = (str: string) => {
  const reversed = str.split("").reverse().join("");
  if (str === reversed) return true;

  return false;
};

// more space efficient doesnt allocate additional memory
function isPalindromeTwo(str: string) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindromeTwo("racecar"));
