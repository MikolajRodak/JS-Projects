const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['Tak!', 'Nie', 'Może...', 'Ciężko powiedzieć', 'Nie chcesz znać odpowiedzi na to pytanie...']

const handleAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
}

const handleAnimation = () => {
	img.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		handleAnswer()
		error.textContent = ''
		img.classList.remove('shake-animation')
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi byc zakonczone znakiem "?'
		answer.textContent = ''
		img.classList.remove('shake-animation')
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
		img.classList.remove('shake-animation')
	}
}

img.addEventListener('click', handleAnimation)
