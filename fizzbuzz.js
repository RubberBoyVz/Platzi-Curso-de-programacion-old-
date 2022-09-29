for (let index = 1; index < 101; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log(index + " fizzbuzz");
    } else if (index % 5 == 0) {
        console.log(index + " buzz");
    } else if (index % 3 == 0) {
        console.log(index + " fizz");
    }
}