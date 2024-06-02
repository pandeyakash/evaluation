const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function rearrangeArray(arr) {
  let subArr = arr.splice(0, 3);
  arr = [...arr, ...subArr];
  return arr;
}

console.log(rearrangeArray(numbers));
