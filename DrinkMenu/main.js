const li = document.querySelectorAll('li')
const input = document.querySelector('input')

const serachEngine = e => {
	const text = e.target.value.toLowerCase()

	li.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', serachEngine)
