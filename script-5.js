
const numbers1 = [1, 2, 3, 4];

const doubled = numbers1.map((number, index) => { // 1, 2, 3, 4  its values  /// 0, 1 , 2, 3
  return number * 2 const value = 'apple';

  switch (12313123) {
    case 'apple':
      console.log('i choose apple')
      break;
    case 'orange':
      console.log('i prefer orange')
      break;
    default:
      alert( "I don't fiend fruits  (((" );
  }

  const array = ['longWord', 'small'];

  array.filter(((element, index)=> { //  longWord // small
    return element.length > 5
  }))
  array.le+ index;
});

console.log(doubled); // [2, 4, 6, 8] // [3, 6, 9, 12] // [2, 5, 8, 11]
// The callback function now has three arguments:
//
//   number — the current item in the array.
//   index — the position of this item in the array.
//   array — the original array itself.
//   How it works:
//
//   On the first call, number is 1, index is 0, and array is [1, 2, 3, 4].
//   On the second call, number is 2, index is 1, and so on.
//   You can use these arguments to do more complex operations inside the .map() function.
// In this example, we’re just multiplying the numbers by 2, but the index and array arguments can be helpful for other use cases!


const numbers2 = [1, 2, 3, 4];
let sum = 0;

numbers2.forEach((number, index, array) => {
  sum += number; // Adding each number to the sum //  6 + 4,
});

console.log(`Total sum: ${sum}`); //
//
//   We create a variable sum and initialize it to 0.
// Inside .forEach(), we add each number from the array to sum (sum += number).
//   At the end, we print the total sum of all the numbers in the array.
//   So, for each item in the array, it adds the value of number to sum, and the final result is 10 (1 + 2 + 3 + 4).


const numbers3 = [1, 2, 3, 4];
let sum = 0;

const repeatTimesByStringLength = 'asdasdadasdasd'

for (let i = 0; i < repeatTimesByStringLength.length; i++) {
  sum += numbers3[i];
}

console.log(`Total sum: ${sum}`); // Output: Total sum: 10


// Explanation:
//   for (let i = 0; i < numbers.length; i++):
//
// We start with i = 0, which is the first index of the array.
//   The loop runs as long as i is less than numbers.length (which is 4 in this case).
// After each iteration, i++ increases i by 1 (moving to the next index).
// Inside the loop:
//
//   We access each item of the array using numbers[i] (since i is the index).
// We also add each number to the sum just like in the previous .forEach() example.
//   Result:
//
// The loop goes through all the numbers: 1, 2, 3, 4.
// It calculates the sum (1 + 2 + 3 + 4 = 10), and the total sum is printed at the end.
//   This approach is a bit more manual compared to .forEach(), but it gives you full control over the loop, allowing you to break or continue based on conditions, and access the index directly.
//


// const value = 'apple';
//
// switch (12313123) {
//   case 'apple':
//     console.log('i choose apple')
//     break;
//   case 'orange':
//     console.log('i prefer orange')
//     break;
//   default:
//     alert( "I don't fiend fruits  (((" );
// }
//
// const array = ['longWord', 'small'];
//
// array.filter(((element, index)=> { //  longWord // small
//   return element.length > 5
// }))
// array.length