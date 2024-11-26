// Định nghĩa 1 hàm mũi tên gồm 2 tham số
let print = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
};

// Gọi hàm
print("HoangNN", 20);

// Hàm có 1 tham số
let area = side => side*side; // {return side * side}
console.log(`Area of square: ${area(10)}`);

// Hàm nằm trong 1 đối tượng
let student = {
    name: "ThoPN",
    age: 19,
    display: function(){
        console.log(`Student info: ${this.name} - ${this.age}`)
    }
};

student.display();

// Sử dụng hàm mũi tên trong bài toán xử lý bất đồng bộ
function FetchDataFromDB(){
    return new Promise((resol, rej) => {
        setTimeout(()=>{
            let data = "This is data from DB";
            resol(data);
        }, 3000);
    });
}

FetchDataFromDB()
    .then(result => console.log(`Data: ${result}`))
    .catch(err => console.log(err.message))
    .finally(() => console.log("Close connection!"));