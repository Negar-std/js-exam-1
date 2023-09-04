export const getPrimesUpToN = (n: number): number[] => {
    const primes: number[] = [];
  
    for (let num = 2; num <= n; num++) {
      if (primes.every(prime => num % prime !== 0)) {
        primes.push(num);
      }
    }
  
    return primes;
}