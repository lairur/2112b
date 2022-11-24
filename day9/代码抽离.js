const fs = require('fs');

// 代码抽离

// function p(url) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }

// p('./resource/桃花源记.md').then(res => {
//     return res.toString()
// }).then((data) => {
//     let result = p('./resource/出师表.md').then(res => res.toString())
//     return data+result
// }).then((data1) => {
//     p('./resource/出居庸关.md').then(res => {
//         console.log(res.toString());
//     })
   
// })


// ————————————————————————————————————————


// 代码抽离

// function p(url) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }

// p('./resource/桃花源记.md').then(res => {
//     return res.toString()
// }).then((data) => {
//     let result = p('./resource/出师表.md').then(res => res.toString())
//     return data+result
// }).then((data1) => {
//     p('./resource/出居庸关.md').then(res => {
//         console.log(res.toString());
//     })
   
// })


// ————————————————————————————————————————————



// 代码抽离

function p(url) {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

p('./resource/桃花源记.md').then(res => {
    return res.toString()
}).then((data) => {
    let result = p('./resource/出师表.md').then(res => res.toString())
    return data+result
}).then((data1) => {
    p('./resource/出居庸关.md').then(res => {
        console.log(res.toString());
    })
   
})

