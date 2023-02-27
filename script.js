// alert('Hello') без выбора ответа. команды, которые выполняются при открытии страницы 
// confirm('вы учите JS?') выбор ответа
// prompt('как языка вы учите?', 'пока не в курсе') с возможностью записать


// const skill = document.getElementById('skill')
// const islove = document.getElementById('islove')

// console.log(span)
// console.log(span.innerText)

// const skill_text = prompt('как языка вы учите?', 'пока не в курсе')
// const islove_value = confirm('Вам нравится изучаемый язык?')

// const string = document.getElementById('string')

// skill.innerText = skill_text
// islove.innerText = islove_value

// string.innerHTML = "str"

// const example = document.getElementById('example')
// console.log(example.innerHTML)
// console.log(example.innerText)

// занятие 2 Типы данных JS
// STRING
// const str1 = 'Greering'
// const str2 = "Text"
// const str3 = `Reverse` при переносе строки не ругается, шаблонные строки можно добавлять
//  ${переменная} в остальных случаях использую \n
// const str4 = 'I\'m OK'

// console.log(str1, typeof str1)
// console.log(str2)
// console.log(str3)
// console.log(str4)

// // NUMBER
// const num1 = 75 * 7
//  const rem = 8 * 'a' - получам NaN т.к. "а" нельзя перевести в число
// если цифры в кавычках, то пробелы и кавычки отметаются кроме сложения,
// тогда происходит склеивание
// 1000 / 0 будет инфинити, бесконечность

// BIGINT
// от -(2**53 -1) до (2**53 -1)
// const bigint = 102344556712121233
// console.log(bigint)

// // BOOLEAN (true or false)
// const bool = 10 > 5
// console.log(bool)

// NULL

// UNDEFINED что-то несуществующее

// SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2) не равны

// OBJECT
// // набор пар: ключ и значение
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true
// }
// // console.log(obj.name)
// // console.log(obj['name'])
 
// obj.job = "Google"
// // console.log(obj)

// const array = ["Аня", 18, false]
// array[3]= "Facebook"
// console.log(array)
// console.log(array[0])

// const variant = 'option'
// console.log(5 == '5')
// console.log(5 === '5')
// // console.log ('abc' > 15)

// // console.log(null == 0)

// const user_name = prompt('Who you are?', 'anonim')
// if (user_name === 'admin') {
//     alert('Hello, boss')
// } else if (user_name === 'anonim' || !user_name) {
//     alert ("I don't know you..")
// } else {
//     alert(`Hi ${user_name}`)
// }
// const counts = prompt ('До скольки вы хотите досчитать?', 10)
// let i = 10
// while (i <= counts) {
//     console.log (i++)

// }

// do {
//     console.log (i++)
// } while (i <= counts)

// console.log (i)
// const arr = []

// for (let i = 0; i <= 50; ++i){
//     arr.push(i)
// }
// // console.log(arr)
// const new_arr = []

// for ( elem of arr ) {
//     const marker = elem % 3
//     if (!marker) {
//         new_arr.push(elem)
//     }
// }
// console.log(new_arr)

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronezh"
// }
// for ( key in obj ) {
//     console.log(key, obj[key])
// }

// const randomValue1 = (Math.random() * 100).toFixed(0)
// const randomValue2 = (Math.random() * 100).toFixed(0)
// const isPlus = Math.random() > 0.5
// // console.log(randomValue)

// const gameElements = document.getElementById('my_game').children

// if (isPlus) {
// gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }
// console.log(gameElements)


// let num = 17

// let str = "17"

// let empty = null

// if ( str - num ) {

//     console.log('first')

// } else if (empty - num) {

//     console.log("second")

// } else if (str - empty) {

//     console.log("third")

// } else {

//     console.log("no one")

// }

// FUNCTION
// declarartion
// console.log(scream(15, 10))
// function scream(a, b){
//     // const result = a * b
//     return a * b
    
// }
// console.log(scream(15, 10))
// // expresrsion
// wowScream()
// const wowScream = function(){
//     alert("Wooow")
// }
// // wowScream()
// // // arrow
// const arrow = () => {
//     alert ('arrow is in the sky')
// // }
// // arrow()


//  ИГРА
//  нажав на кнопку "начать" игра запускается, генерируется задача
// пользователь может ввести ответ, должна появться кнопка проверить
// 
// Нажав кнопку проверить мы сраниванием с ответом
// Вывести результат и правильное значение
// сменить кнопку начать заново и начнется первый этап

const get_random_num_in_range = (min, max) => {
   const random_num = (Math.random() * (max - min) + min).toFixed(0) 
   return random_num
}

const getTask = () => {
    // const random_num1 = get_random_num_in_range(0, 100)
    // const random_num2 = get_random_num_in_range(0, 100)  
        // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${get_random_num_in_range(0, 100)} ${symbol} ${get_random_num_in_range(0, 100)}`
    game_state.right_answer = eval(task)
    return task
}
// console.log(getTask())

// console.log(randomValue)
const toggleGameState = () => {
    game_state.task_in_prosess = !game_state.task_in_prosess
}




const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const user_task = gameElements[1]
const user_answer = gameElements[2]
const btn_game = gameElements[3]

const game_state = {
    task_in_prosess: false,
    right_answer: null,

}

const startGameFunc = () => {
        if (!game_state.task_in_prosess) {
            title.innerText = "Игра началась!"
            user_answer.value = null
// генерируем задачу и ответ
        // const task = getTask()
// показываю задачу пользователю
    user_task.innerText = getTask()
    user_answer.hidden = false
    btn_game.innerHTML = "Проверить!"
    toggleGameState()
// меняю кнопку и меняю состояние
    } else {
        // сравнить ответ пользователя с правильным
        const is_right = game_state.right_answer == user_answer.value
        // вывести результат
        user_task.innerText = user_task.innerText + " = " + game_state.right_answer
        // вывести поздравление
        title.innerText = (is_right) ? "Вы победили!" : "Вы проиграли!"
        // поменять кнопку и состояние
        btn_game.innerHTML = "Начать заново!"
        toggleGameState()


    }
}

btn_game.addEventListener("click", startGameFunc)
user_answer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === 'Escape') {
        user_answer.blur()
    }
})


const chosedE1 = document.querySelectorAll(".choosed_block_container > div")
const counterE1 = document.querySelector(".choosed_block span")

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterE1.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}
for (let i = 0; i < chosedE1.length; i++) {
    chosedE1[i].addEventListener("click", eventFunc)
}
// chosedE1[2].removeEventListener("click", eventFunc)