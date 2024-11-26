/*
// Từ khóa let: Khai báo các biến trong phạm vi của khối (block-scope)
function example1(){
    let age = 20;

    if(true){
        console.log(`Age in if block: ${++age}`);
        let name = "Phan Ngoc Hoang";
        console.log(`Name is: ${name}`);
    }
    console.log(`Age in function block: ${age}`);
    // console.log(`Name outside if block: ${name}`);
}

example1();
*/

// Từ khóa const: Khai báo các biến trong phạm vi của khối (block-scope)
// Với các biến kiểu value thì giá trị sẽ không được phép thay đổi
function example2(){
    const age = 20;

    if(true){
        console.log(`Age in if block: ${age}`);
        const name = "Phan Ngoc Hoang";
        console.log(`Name is: ${name}`);
    }
    console.log(`Age in function block: ${age}`);
    // console.log(`Name outside if block: ${name}`);
}

example2();