// Tạo 1 đối tượng kiểu Promise để quản lý 1 hành động cụ thể.
// Mà hành động đó có thể diễn thành công hoặc thất bại
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const number = Math.random();
        if(number>=0.5)
            resolve(number)
        else
            reject(`Lỗi: Số ngẫu nhiên ${number} không như kỳ vọng`);
    }, 2000);
});

// myPromise
//     .then(result => console.log(`Success: ${result}`))
//     .catch(err => console.error(err));

// Sử dụng hàm với từ khóa: async và await để thực hiện 1 đối tượng Promise
async function asynMyPromise(){
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asynMyPromise();