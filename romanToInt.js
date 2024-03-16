/*
  Соотношение Римских и Арабских чисел:

  I - 1
  V - 5
  X - 10
  L - 50
  C - 100
  D - 500
  M - 1000

  Исключения, когда меняется последовательность
  (слева больше справа меньше --> слева меньше справа больше):

  IV - 4
  XL - 40
  CD - 400
  IX - 9
  XC - 90
  CM - 900
*/


/**
 * @param {String} str - валидное римское число,
 *   может содержать символы 'I', 'V', 'X', 'L', 'C', 'D', 'M'
 * @returns {Number}
 */


const romanValues = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const romanToInteger = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && romanValues[str[i]] < romanValues[str[i + 1]]) {
      result -= romanValues[str[i]];
    } else {
      result += romanValues[str[i]];
    }
  }
  return result;
};
  
console.log(romanToInteger("III")); // 3
console.log(romanToInteger("LVIII")); // 58
console.log(romanToInteger("MCMLXXXIV")); // 1984
console.log(romanToInteger("MMMCMXCIX")); // 3999