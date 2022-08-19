const isBiggerThanMaxNumberValue = (number) => {
  if (number > Number.MAX_VALUE || number < Number.MIN_VALUE) {
    return BigInt(number);
  } else {
    return number;
  }
};

// const summarize = (...numbers) => {
//   let sum = 0;
//   if (
//     numbers.some(
//       (element) =>
//         element > Number.MAX_SAFE_INTEGER || element < Number.MIN_SAFE_INTEGER
//     )
//   ) {
//     sum = BigInt(sum);
//     let bigIntNumbers = numbers.map((element) => BigInt(element));
//     //console.log("nagyobb");
//     sum = bigIntNumbers.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       sum
//     );
//   } else {
//     //console.log("kisebb", Number.MAX_SAFE_INTEGER);
//     sum = numbers.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       sum
//     );
//   }
//   return sum;
// };

const summarize = (...numbers) => {
  const integers = numbers.filter((element) => Number.isInteger(element));
  let sum = 0;
  integers.map((element) => {
    if (
      sum > Number.MAX_SAFE_INTEGER ||
      sum < Number.MIN_SAFE_INTEGER ||
      element > Number.MAX_SAFE_INTEGER ||
      element < Number.MIN_SAFE_INTEGER
    ) {
      sum = BigInt(sum) + BigInt(element);
    } else {
      sum += element;
    }
  });
  return sum;
};

console.log(isBiggerThanMaxNumberValue(10000));

export default summarize;
