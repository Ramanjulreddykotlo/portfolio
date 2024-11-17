// Write a function that tells me if a number is prime   

// The function should take an integer and return true if the integer is prime

// The function should error if the input is not a positive integer 
    function isPrime(number) {
        if (typeof number !== 'number' || !Number.isInteger(number) || number < 1) {
            throw new Error('Input must be a positive integer');
        }

        if (number === 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }

    console.log(isPrime(5)); // This will test if 5 is prime