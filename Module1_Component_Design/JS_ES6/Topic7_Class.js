// Khai báo 1 class
class Rectangle{
    // Định nghĩa hàm khởi tạo (constructor)
    constructor(w, h){
        this.width = w;
        this.height = h;
    }
    // Định nghĩa phương thức (method) tính diện tích của HCN
    area(){
        return this.width * this.height;
    }
}

// Kế thừa
class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}

// Khai báo đối tượng kiểu Rectangle
const rect = new Rectangle(20, 10);
console.log(`Area rectangle = ${rect.area()}`);

// Khai báo đối tượng kiểu Rectangle
const square = new Square(15);
console.log(`Area square = ${square.area()}`);
