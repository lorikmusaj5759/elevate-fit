/* complexCode.js */

// This code demonstrates a complex algorithm to find all prime numbers up to a given limit

function findPrimes(limit) {
  let primes = [];
  let sieve = new Array(limit + 1).fill(true);
  
  // Sieve of Eratosthenes algorithm
  for (let p = 2; p * p <= limit; p++) {
    if (sieve[p] === true) {
      for (let i = p * p; i <= limit; i += p) {
        sieve[i] = false;
      }
    }
  }
  
  for (let p = 2; p <= limit; p++) {
    if (sieve[p] === true) {
      primes.push(p);
    }
  }
  
  return primes;
}

function printPrimes(primes) {
  console.log("Prime numbers found:");
  primes.forEach(prime => console.log(prime));
}

// Calculate all primes up to 100
let primes = findPrimes(100);

// Display the prime numbers
printPrimes(primes);

// Additional complex functionality can be added below...

// Calculate the sum of all prime numbers
let sum = primes.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of prime numbers:", sum);

// Find the largest prime number
let largestPrime = Math.max(...primes);
console.log("Largest prime number:", largestPrime);

// Calculate the average of prime numbers
let average = sum / primes.length;
console.log("Average of prime numbers:", average);

// Generate a random prime number
function generateRandomPrime(min, max) {
  let randomNum;
  while (true) {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (findPrimes(randomNum).length === 1) {
      return randomNum;
    }
  }
}

let randomPrime = generateRandomPrime(1000, 2000);
console.log("Random prime number:", randomPrime);

// ... more complex functionality ...

// End of code