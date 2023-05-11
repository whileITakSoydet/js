// 1. Написать функцию, которая проверяет, является ли переданное ей число
// совершенным. Совершенное число – это число, равное сумме всех своих
// собственных делителей

function setNum(){
    let x = Math.floor(prompt("Введите число:"));
    return x;
}

function searchDivider(x){
    let sum = 0;
    for(let i = 1;i < x; ++i){
        if(x%i==0){
            sum+=i;
            document.writeln(i);
        }
    }
    if(x == sum){
        alert(`Число ${x} совершенное`);
    }
    else{
        alert(`Число ${x} несовершенное`);
    }
}

// 2. Написать функцию возведения числа в степень.

function degreeOfNum(n,x){
    alert(`${n} в степени ${x} равно ${n**x}`);
}

// 3. Написать функцию поиска наибольшего общего делителя.

function searchCommonDivisor(a,b){
    if(a==0||b==0){
        alert(`Error`);
    }
    if(a==b){
        alert(`${a} Наибольший общий делитель`);
        return a;
    }
    if(a > b){
        searchCommonDivisor(b, a - b);
    }
    else{
        searchCommonDivisor(a, b - a);
    }
}

function main(){
    let key = Math.floor(prompt("Выберите номер задания:1, 2, 3"));
    switch (key) {
        case 1:
            searchDivider(setNum());
            break;
        case 2:
            degreeOfNum(setNum(),setNum());
            break;
        case 3:
            searchCommonDivisor(setNum(),setNum());
            break;
        default:
            alert("Я цього не казав");
            break;
    }
}

main();