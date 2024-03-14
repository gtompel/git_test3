function* primeGenerator() {
    let num = 2;
    
    while (true) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        isPrime = false;
        break;
        }
    }
    if (isPrime) {
        yield num;
    }
    num++;
    }
    }

    const generator = primeGenerator();

console.log(generator.next().value); // output: 2
console.log(generator.next().value); // output: 3
console.log(generator.next().value); // output: 5
console.log(generator.next().value); // output: 7