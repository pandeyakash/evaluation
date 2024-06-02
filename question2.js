const numbers = [1, 2, 3, 4, 5];

function calculateSum(arr) {
  let sum = 0;
  arr.forEach((ele) => {
    sum += ele;
  });
  return sum;
}

console.log(calculateSum(numbers));
