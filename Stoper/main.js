const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

const handleSatrt = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else if (seconds >= 59) {
			seconds = 0
			minutes++
			stopwatch.textContent = `${minutes}:${seconds}`
		}
	}, 100)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${minutes}:${seconds}`

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
	}

	clearStuff()
}

const handleReset = () => {
	time.style.visibility = 'hidden'
	timesArr = []
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
	timeNum = 0
}

const showHistory = () => {
	timeList.textContent = ''
	let timeNum = 1
	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${timeNum}: <span>${time}</span>`
		timeList.appendChild(newTime)
		timeNum++
	})
}

const handleModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}

	modalShadow.classList.toggle('modal-animation')
}

startBtn.addEventListener('click', handleSatrt)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', handleModal)
closeBtn.addEventListener('click', handleModal)
window.addEventListener('click', e => (e.target === modalShadow ? handleModal() : false))
