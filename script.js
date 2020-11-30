// 1 Функция принимает массив, возвращает сумму всех нечётных чисел больше нуля
let numbers = [1, 2, -10, 0, 11, 120, -20, 10]

function calc(array) {
    let product = 0;
    array.forEach(element => {
        if(element > 0 && element % 2) {
            product += element
        }
    });
    return product
}
console.log(`1 функция: ${calc(numbers)}`) //12

// 2 Функция принимает массив целых чисел и число k. 
// Возвращает true, если сумма 2 чисел равна k, иначе false
let numbers2 = [99, 2, 5, 39]
let numbers3 = [1, 2, 3, 39, 20, 5, 6]
let k = 5;

function calc2(array, k) {
    let product = false
    for (let i = 0; i < array.length; i++) {
        let j = array[i] + array[i + 1]
        if(j == k){
            product = true
        }
    }
    return product
}
console.log(`2 функция: ${calc2(numbers3, k)}`) //true

// 3 Функция принимает целове положительное число
// Возвращает сумму всех чисел в переданном числе
let num = 102 // 3
let num1 = 133 // 7
let num2 = 15591 // 21

function calc3(num) {
    let str_num = num + ''
    let sum = 0
    for(let i = 0; i < str_num.length; i++) {
        int_num = Number(str_num[i])
        sum += int_num
    }
    return sum
}
console.log(`3.0 функция: ${calc3(num1)}`) // 7
console.log(`3.1 функция: ${calc3(num2)}`) // 21

// 4 Функция принимает положительное число
// Строится горка из хэшей, высота которой равна принимаемому числу
function hashes(num) {
    console.log(`4 функция: начата hashes(${num})`)
    let hash = ""
    for (let i = 0; i < num; i++) {
        hash += "#"
        console.log(hash)
    }
    console.log("4 функция: закончена")
}
hashes(3)

// 5 Функция принимает массив
// Функция должна вернуть массив с чётными числами
let array5 = [-10, 0, 3, 12, 5, 8, 7, 13, 122]

function positivArray(array) {
    let product = []
    array.forEach(element => {
        if(element % 2 === 0) {
            product.push(element)
        }
    });
    return product
}
console.log(`5 функция: ${positivArray(array5)}`) // -10, 12, 8, 122

// 6 Функция принимает массив чисел
// Возвращает самое большое число из массива
let array6 = [0, 10, -12, 199, 91, 89, 120]

function func6(array) {
    return max = Math.max(...array)
}
console.log(`6 функция: ${func6(array6)}`) // 199

// 7 Функция принимает массив чисел
// Возвращает числа из массива, которые не меньше самого большого числа более чем на 10%
// (Возвращает массив из этих чисел)
let array7 = [0, 10, -12, 200, 91, 198, 190, 179]

function func7(array) {
    max = Math.max(...array)
    let product = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element > max * 0.9 ) {
            product.push(element)
        }
    }
    return product
}
console.log(`7 функция: ${func7(array7)}`) // 200 198 190

// 8 Функция принимает массив чисел и положительное целое число (length)
// Возвращает массив, пока количество чисел в массиве < положительного x, то добавить 0 в массив
let array8 = [10, 2, 5]

function func8(array, x) {
    if(array.length < x) {
        for (let i = array.length; i < x; i++) {
            array.push(0)
        }
    }
    return array
}
console.log(`8 функция: ${func8(array8, 6)}`) // 10, 2, 5, 0, 0, 0

// 9 Функция принимает массив чисел
// Возврашает массив уникальных чисел. Удаляет дубликаты
let array9 = [1, 1, 5, 6, 2, 1, 6, 5]

function func9(array) {
    return Array.from(new Set(array))
}
console.log(`9 функция: ${func9(array9)}`) // 10, 2, 5, 0, 0, 0

// 10 Функция принимает положительное число
// Возвращает число, которое ближе всех к изначальному числу(округление)
function func10(num) {
}
console.log(`10.0 функция: ${func10(10)}`) // 10
console.log(`10.1 функция: ${func10(69)}`) // 70
console.log(`10.2 функция: ${func10(12)}`) // 10
console.log(`10.3 функция: ${func10(129)}`) // 130