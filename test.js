const fs = require("fs")
const Login = require('./model/login')

// const foo = async() => {
//     let file = await new Promise((resolve, reject) => {
//         fs.readFile('./public/text/name.txt', (err, data) => {
//             if (err) throw err;
//             // console.log('数据：\n', data.toString());
        
//             resolve(data.toString());
//         }) 
//     });
//     let mongo = await Login.find();
//     console.log(file, mongo);

// }
// foo();

// fs.readFile('./public/text/name.txt', (err, data) => {
//     if (err) throw err;
//     console.log('数据：\n', data.toString());
// });

// Login.find().then(res => {
//     console.log(res);
// })


const foo = async() => {
    let file = await fs.readFile('./public/text/name.txt', (err, data) => {
        if (err) throw err;
        // console.log('数据：\n', data.toString());
        return new Promise((resolve, reject) => {
            resolve(data.toString());
        })
    });
    let mongo = await Login.find();
    console.log(file, mongo);
}
foo();