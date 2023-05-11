let x, w = 50, min = 0, max = 100, flag=true;
alert("Игра угадай число от 0 до 99");

while(flag){
    x = parseInt(prompt(`Если ваше число > ${w} введите 1\nЕсли ваше число < ${w} введите 2\nЕсли ваше число = ${w} введите 3`));
    switch (x) {
        case 1:
            min = Math.floor(w);
            w = Math.floor((max+min)/2);
            // alert(`min ${min} max ${max}`);
            break;
        case 2:
            max = Math.floor(w);
            w = Math.floor((max+min)/2);
            // alert(`min ${min} max ${max}`);
            break;
        case 3:
            alert(`Ваше число ${w}`);
            flag=false;
            break;
        default:
            alert("Вы ввели неверные данные");
            break;
    }
}