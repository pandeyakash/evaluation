const animals = [
  "Dog",
  "Cat",
  "Elephant",
  "Giraffe",
  "Lion",
  "Tiger",
  "Zebra",
  "Kangaroo",
  "Panda",
  "Monkey",
];

function extractSubArray(arr) {
  return arr.slice(3, 7);
}

console.log(extractSubArray(animals));
