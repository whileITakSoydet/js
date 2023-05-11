// 1. Написать функцию, которая считает количество слов в предложении
function countWord(str){
    str = str.trim();
    let arr = str.split(" ");
    let count = arr.length;
    return count;
}

// 2. Написать функцию, которая принимает
// словосочетание и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно
// ориентированное программирование в ООП.

function abbreviation(str){
    str = str.trim();
    let abb = str[0];
    let i = 0;
    while(true){
        i = str.indexOf(" ", i);
        if(i==-1){
            break;
        } 
        else{
            ++i;
        }
        abb += str.substr(i, 1);
    }
    abb = abb.toUpperCase();
    return abb;
}

// 3. Написать функцию, которая проверяет, что введенный
// телефон соответствует шаблону, пример телефона:
// 555-55-55

function checkNumber(str){
    return /^\d\d\d-\d\d-\d\d$/.test(str);
}

function enter(pam){
    let str = prompt(`Введите ${pam}`);
    return str;
}

function main(){
    let x = parseInt(+prompt(`Выберайте номер задания:`));
    switch (x) {
        case 1:
            alert(`Слов в этом предложении ${countWord(enter("предложение"))}`)
            break;
        case 2:
            alert(`Abbreviation: ${abbreviation(enter("абрревиатуру"))}`);
            break;
        case 3:
            if(checkNumber(enter("номер телефона"))){
                alert(`Номер прошел проверку`);
            }
            else{
                alert(`Номер не прошел проверку`);
            }
            break;
        default:
            alert("Вы ввели неверные данные");
            break;
    }
}

main();