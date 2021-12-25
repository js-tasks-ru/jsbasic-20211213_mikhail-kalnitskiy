function getMinMax(str) {
  let result = {};
  let arr = str.split(' ');
  let arrNumbers = [];


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Number') {
      arrNumbers.push(+arr[i])
    }
  }


  arrNumbers.sort();
  result.min = arrNumbers[0];
  result.max = arrNumbers[arrNumbers.length];

  return result;

}
