for (let i = 1; i <= 100; i++) {
    console.log(i);

    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("i % 3 && i % 5: FizzBuzz.");

    } else if (i % 3 === 0) {
        console.log("i % 3: Fizz.");

    } else if (i % 5 === 0) {
        console.log("i % 5: Buzz.");

    }
}