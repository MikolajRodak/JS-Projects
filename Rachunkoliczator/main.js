const price = document.querySelector('#price')
const people = document.querySelector('#people')
const select = document.querySelector('select')
const btn = document.querySelector('button')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const info = document.querySelector('.cost')

const inputFill = () => {
	if (price.value !== '' && people.value !== '') {
		handleCount()
	} else {
		error.textContent = 'Uzupełnij wszystkie pola!'
		error.style.display = 'block'
	}
}

const handleCount = () => {
	const priceBill = parseInt(price.value)
	const peopleAmount = parseInt(people.value)
	const selectVal = parseFloat(select.value)

	let countFormula = (priceBill + priceBill * selectVal) / peopleAmount

	info.textContent = countFormula.toFixed(2)
	info.style.display = 'block'
	costInfo.style.display = 'block'
}

btn.addEventListener('click', inputFill)
