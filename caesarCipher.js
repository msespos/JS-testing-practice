const caesarCipher = (string, shift) => {
  return string.split('').map((char) => {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return String.fromCharCode((char.charCodeAt() - 97 + (26 + shift % 26)) % 26 + 97);
    } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return String.fromCharCode((char.charCodeAt() - 65 + (26 + shift % 26)) % 26 + 65);
    } else {
      return char
    }
  }).join('');
}

module.exports = caesarCipher;