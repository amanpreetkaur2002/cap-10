function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Test the function
console.log(isPrime(10));  // Should return false, code may produce incorrect results.
console.log(isPrime(7));   // Should return true