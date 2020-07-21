const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		console.log(event.target.value)//buat nampilin button yg diklik
	})
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const number = document.querySelectorAll(".number")

number.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
	if (currentNumber === '0'){
		currentNumber = number
	} else{
		currentNumber += number
	}
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) =>{
		console.log(event.target.value)
	})
})

const inputOperator = (operator) => {
	prevNumber = currentNumber
	calculationOperator = operator
	currentNumber = ''
}


const calculate = () => {
	let result = ''
	switch(calculationOperator){
		case "+":
			result = parseInt(prevNumber) + parseInt(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default: 
			return
	}
	currentNumber = result
	calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () =>{
	calculate()
	updateScreen(currentNumber)
})
