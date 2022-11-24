const fs = require('fs');

// 第一种
function getPeach() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resource/桃花源记.md', (err, data) => {
            // if(err) reject(err)
            // resolve(data)
            reject('我是桃花源的错误信息')
        })
    })
}


function getTroops() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resource/出师表.md', (err, data) => {
            // if(err) reject(err)
            // resolve(data)
            reject('我是出师表的错误信息')

        })
    })
}


function getAgent() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resource/出居庸关.md', (err, data) => {
            // if(err) reject(err)
            // resolve(data)
            reject('我是出居庸的错误信息')
        })
    })
}
// 链式编程

// 在连式编程中catch只能捕捉第一个。then返回的错误信息
getPeach().then(res => {
    console.log(res, '38');
}).then((data) => {
    let result = getTroops().then(res => res.toString())
    console.log(result, '41');
}).then((data1) => {
    getAgent().then(res => res.toString())
    console.log(data1, '44');
})
    .catch((err) => {
        console.log(err);
    })

// 在链式变编程中调用，想要单独一个捕捉一个then的错误信息，
// 需要在每一个。then后面添加一个catch来捕捉错误信息。
getPeach().then(res => {
    console.log(res, '38');
}).catch((err) => {
    console.log(err);
})
    .then((data) => {
        let result = getTroops().then(res => res.toString())
        console.log(result, '41');
    }).catch((err) => {
        console.log(err);
    })
    .then((data1) => {
        getAgent().then(res => res.toString())
        console.log(data1, '44');
    })
    .catch((err) => {
        console.log(err);
    })