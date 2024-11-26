function sum(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(`Sum numbers = ${total}`);
}

const arrNumbers = [1, 2, 5, 3];
sum(arrNumbers);

// Định nghĩa hàm với tham số rest
function sumWithRestParam(...numbers){
    let total = 0;
    for (const e of numbers) {
        total += e;
    }
    console.log(`Sum numbers with Rest parameter= ${total}`);
}

sumWithRestParam(1, 2, 10);
sumWithRestParam(3, 6);
sumWithRestParam(1, 2, 5, 3);