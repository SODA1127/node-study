 module.exports = function cal(num1, num2, pathname) {
     let result = '';
    if(pathname == '/add'){
        let add = parseInt(num1) + parseInt(num2);
        console.log('더하기 : ' + add);
        result = `${num1} + ${num2} = ${add}`;
    }else if(pathname == '/minus'){
        let minus = parseInt(num1) - parseInt(num2);
        console.log('빼기 : ' + minus);
        result = `${num1} - ${num2} = ${minus}`;
    }else if(pathname == '/devide'){
        let devide = parseInt(num1) / parseInt(num2);
        console.log('나누기 : ' + devide);
        result = `${num1} / ${num2} = ${devide}`;
    }else if(pathname == '/times'){
        let times = parseInt(num1) * parseInt(num2);
        console.log('곱하기 : ' + times);
        result = `${num1} * ${num2} = ${times}`;
    }else{
        console.log('잘못 요청했습니다.');
        result = '잘못 요청했습니다.';
    }
    return result;
}
