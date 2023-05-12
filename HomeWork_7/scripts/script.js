//Напишите функцию, которая принимает два числовых аргумента 
//и возвращает наименьшее из них.

function maxValue(a, b) {

    if (a > b) {
        return a
    } else {
        return b
    }
}

let a = +prompt("Enter number")
let b = +prompt("Enter number")
console.log(maxValue(a, b))


//Напишите функцию, которая принимает два числовых аргумента и
// выводит в консоль все четные числа от большего к меньшему.

function evenArrMaker(min, max) {

    if (max > min) {
        min = min
        max = max
    } else {
        let temp = min
        min = max
        max = temp
    }

    let arr = []

    for (let i = max; i >= min; i--)
        if (i % 2 == 0)
            arr.push(i);

    return arr
}

console.log(evenArrMaker(15, 1))


// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
// и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(a, b = 2) {

    return a ** b

}
power()


//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumNum(a) {

    let sum = 0

    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum
}
sumNum()



//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел
// и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumEvenOdd(n, m) {
    let sumOdd = 0
    let sumEven = 0


    for (let i = n; i <= m; i++) {
        if (i % 2 === 0)
            sumEven += i
        else
            sumOdd += i;
    }
    return {
        sumEven,
        sumOdd
    }
}
console.log(`сумма четных чисел ${sumEvenOdd(n, m).sumEven}`)
console.log(`сумма нечетных чисел ${sumEvenOdd(n, m).sumOdd}`)



// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. 
//Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по 
//длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

arr = [prompt("Enter the first word"), prompt("Enter the second word"), prompt("Enter the third word")]

function longestString(arr) {

    if (arr.length == 0) {

        return null

    } else {

        let maxlength = 0;
        let longestWord = ''

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].length > maxlength) 
            {
                maxlength = arr[i].length
                longestWord = arr[i];
            }

        }
        return longestWord;
    }

}
console.log(longestString(arr))
