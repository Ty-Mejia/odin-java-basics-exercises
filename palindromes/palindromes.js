function reverseString(string) {
    rString = [];
    for (i = string.length - 1; i >= 0; i--) {
    rString.push(string.charAt(i));
    } 
    return rString.join("")
  }

const palindromes = function(string) {
        let cleanString = string.toLowerCase().replace(/\W|\d/g, '');

        if (reverseString(cleanString) === cleanString) {
            return true;
        } else {
            return false;
        };
}

module.exports = palindromes
