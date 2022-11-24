const fs = require('fs');

// // 第一种
// function getPeach() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('./resource/桃花源记.md', (err, data) =>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }


// function getTroops() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('./resource/出师表.md', (err, data) =>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }


// function getAgent() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('./resource/出居庸关.md', (err, data) =>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// // 链式编程
// getPeach().then(res => {
//     return res.toString()
// }).then((data) => {
//     let result = getTroops().then(res => res.toString())
//     return result+data
// }).then((data1) => {
//     getAgent().then(res=>res.toString())
// })


// ————————————————————————————————————————————————————————





// function getPeach() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('./resource/桃花源记.md', (err, data) =>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// function getTroops() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('./resource/出师表.md', (err, data) =>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// function getAgent() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile('./resource/出居庸关.md', (err, data) =>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// // 链式编程
// getPeach().then(res => {
//     return res.toString()
// }).then((data) => {
//     let result = getTroops().then(res => res.toString())
//     return result+data
// }).then((data1) => {
//     getAgent().then(res=>res.toString())
// })


// _________________________________________


function getPeach() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resource/桃花源记.md', (err, data) =>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function getTroops() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resource/出师表.md', (err, data) =>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function getAgent() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resource/出居庸关.md', (err, data) =>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
// 链式编程
getPeach().then(res => {
    return res.toString()
}).then((data) => {
    let result = getTroops().then(res => res.toString())
    return result+data
}).then((data1) => {
    getAgent().then(res=>res.toString())
})