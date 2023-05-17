// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке
// от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const divElement = document.createElement("div")
divElement.className = "numbers"
document.body.append(divElement)

const divElems = document.querySelector(".numbers")
for (let i = 100; i >= 50; i -= 10) {
    const pElem = document.createElement("p")
    pElem.innerText = i
    divElems.append(pElem)
}


// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div
// с классом strings_container. Строки взять произвольные.

const arr = ['qwert', 'asdf', 'zxcv', 'mnbv', 'poiuy', 'zaeblo']
const divElement1 = document.createElement("div")
divElement1.className = "strings_container"
document.body.append(divElement1)

arr.forEach(element => {
    const arrElem = document.createElement("p")
    arrElem.innerText = element
    divElement1.append(arrElem)
});



// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age
// (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const divElement2 = document.createElement("div")
divElement2.className = "users_container"
document.body.append(divElement2)

const clients_base = [
    {
        first_name: "Ivan",
        last_name: "Ivanov",
        age: 24,
    },
    {
        first_name: "Vasiliy",
        last_name: "Vasiliev",
        age: 8,
    },
    {
        first_name: "Natalia",
        last_name: "Polak",
        age: 46,
    },
    {
        first_name: "Katerina",
        last_name: "Neumann",
        age: 18,
    },
    {
        first_name: "Alexander",
        last_name: "Kreuz",
        age: 17,
    }
]

clients_base.forEach(element => {
    if (element.age >= 18) {
        const user = document.createElement("p")
        console.log(element.age)
        user.innerText = `${element.first_name} ${element.last_name} age: ${element.age}`
        divElement2.append(user)
    }
});