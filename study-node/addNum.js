const fs = require('fs');

/*fs.readFile('./num1.txt', 'utf-8', (err, data) => {
    let num1 = parseInt(data);
    fs.readFile('./num2.txt', 'utf-8', (err, data) => {
        let num2 = parseInt(data);
        console.log(num1 + num2);
    });
});*/

const async = require('async');

function task1(callback) {
    fs.readFile('./num1.txt', 'utf-8', (err, data) => {
        let num = parseInt(data);
        callback(null, num);
    });
}

function task2(callback) {
    fs.readFile('./num2.txt', 'utf-8', (err, data) => {
        let num = parseInt(data);
        callback(null, num);
    });
}

// async.series([task1, task2], (err, results) => {
//     console.log('results : ', results);
// });

// async.each(['./num1.txt', './num2.txt'], fileReadTask, (err, data) => {
// })



/*function taskP1() {
    return new Promise( (resolve, reject) => {
        fs.readFile('./num1.txt', 'utf-8', (err, data) => {
            let num1 = parseInt(data);
            resolve(num1);
        });
    });
}

function taskP2(num1) {
    return new Promise( (resolve, reject) => {
        fs.readFile('./num2.txt', 'utf-8', (err, data) => {
            let num2 = parseInt(data);
            resolve(num1 + num2);
        });
    });
}*/

/*taskP1().then( (result) => {
    return taskP2(result)
}).then( (result) => {
    console.log('result : ', result);
}).catch( (error) => {
    console.log('error');
});

taskP1().then( taskP2 ).then( (result) => {
    console.log('result : ', result);
}).catch( (error) => {
    console.log('error');
});

async function doIt() {
    let num1 = await taskP1();
    let result = await taskP2(num1);
    console.log('await result :', result);
}
doIt();


const util = require('util');

const readFileP = util.promisify(fs.readFile);

const doit2 = async function doit2() {
    let num1 = await readFileP('./num1.txt', 'utf-8');
    let num2 = await readFileP('./num2.txt', 'utf-8');
    let result = parseInt(num1) + parseInt(num2);
    console.log('promisify :', result);
};

doit2();*/

/*async.series([task1, task2], (err, result) => {
   let num1 = result[0];
   let num2 = result[1];
   console.log(num1 + num2);
});*/

/******************************************/
function numP1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./num1.txt', 'utf-8', (err, data) => {
            let num1 = parseInt(data);
            resolve(num1);
        });
    });
}


function numP2(num1) {
    return new Promise((resolve, reject) => {
        fs.readFile('./num2.txt', 'utf-8', (err, data) => {
            let num2 = parseInt(data);
            resolve(num1 + num2);
        });
    });
}

numP1().then((result) => {
    return numP2(result);
}).then((result) => {
    console.log('result : ' + result);
}).catch((e) => console.log(e));
/******************************************/



