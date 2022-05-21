const isPrimeNumber = (n) => {
  if (n < 2) { return false; }
  if (n % 2 === 0) { return n === 2; }
  for (let i = 3; i * i <= n; i += 2) {
    if (n % 2 === 0) { return false; }
  }
  return true;
};

const countPrimeNumbers = () => {
  let totalPrimeNumbers = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrimeNumber(i)) { totalPrimeNumbers += 1; }
  }
  return totalPrimeNumbers;
};

const time1 = performance.now();
countPrimeNumbers();
const time2 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${time2 - time1} milliseconds.`);
