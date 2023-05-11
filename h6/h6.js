// Создать массив из 10 случайных чисел

function createArr(){
    let arr = [];
    for(let i = 0; i < 10; ++i){
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

// 1. функция принимает массив возвращает новый массив,
// состоящий из разницы максимального и текущего
// элемента

function ArrayMax(arr){
    let max = arr.reduce(function(max,elem){if(max<elem)return elem;return max;})
    let arrMax = arr.map(function(elem){return max - elem;});
    return arrMax;
}

// 2. функция принимает массив и возвращает новый массив
// при условии, что в исходном массиве есть элемент равный
// 0 и новый массив будет состоять из всех элементов до
// первого 0. Например из массива [1,3,0,4,2,0,5,6] будет
// сформирован новый массив, состоящий из чисел до
// первого нуля [1,3]

function cutArray(arr){
    let id = arr.indexOf(0);
    if(id == -1)
    {
        alert(`В массиве нет 0`);
        return;
    }
    let cutarr = arr.slice(0, id);
    return cutarr;
}

// 3. Функция принимает массив и возвращает его без
// повторяющихся элементов

function exclude(arr){
    let x;
    for(let i = 0; i < arr.length; ++i){
        x = arr[i];
        for(j = i + 1; j < arr.length; ++j){
            if(arr[i]==arr[j]){
                arr.splice(j, 1);
                --j;
            }
        }
    }
    return arr;
}

function main(){
    let x = parseInt(+prompt(`Выберайте номер задания:`));
    let arr, arr2;
    switch (x) {
        case 1:
            arr = createArr();
            arr2 = ArrayMax(arr);
            alert(`Исходный массив ${arr}`);
            alert(`Измененный массив ${arr2}`);
            break;
        case 2:
            arr = createArr();
            arr2 = cutArray(arr); 
            alert(`Исходный массив ${arr}`);
            alert(`Измененный массив ${arr2}`);
            break;
            case 3:
                arr = createArr();
                alert(`Исходный массив ${arr}`);
                exclude(arr);
                alert(`Измененный массив ${arr}`);
            break;
        default:
            alert("Вы ввели неверные данные");
            break;
    }
}
main();