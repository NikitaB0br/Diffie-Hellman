export function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 2) return false;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

export function getRandomPrime(min: number, max: number): number {
    let prime = Math.floor(Math.random() * (max - min)) + min;
    while (!isPrime(prime)) {
        prime = Math.floor(Math.random() * (max - min)) + min;
    }
    return prime;
}