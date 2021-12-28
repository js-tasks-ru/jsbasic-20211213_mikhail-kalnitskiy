function getMinMax(str) {
  let result = {};

  let arr = str.split(' ');
  let arrNumbers = [];

  console.log(arr); // Посмотрите на массив после сплит

  for (let i = 0; i < arr.length; i++) {
    // Ваша проверка была неправильно, т.к. все элементы в массиве - строки
    if (isFinite(+arr[i])) { // https://learn.javascript.ru/number#proverka-isfinite-i-isnan
      arrNumbers.push(+arr[i])
    }
  }

  // Чтобы сортировать числа, нужно передать функцию в метод
  // Иначе числа будут сортироваться как строки
  // Вот тут подробнее про это - https://learn.javascript.ru/array-methods#sort-fn
  arrNumbers.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });

  result.min = arrNumbers[0];
  // Крайний элемент имеет индекс arrNumbers.length - 1, а не arrNumbers.length
  result.max = arrNumbers[arrNumbers.length - 1];

  return result;


}
