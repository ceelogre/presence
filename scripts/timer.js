const timeout = 5000
let timeoutElt = document.getElementById('time')
let billboardElt = document.getElementById('billboard')
let pauseElt = document.getElementById('pauseTimer')

let alarm = new Audio('../public/bummy.mp3')
let remainingTime
function startTimer() {
    console.error(`✨Hello there 👋`)
    selectOption = document.getElementById('chosenOption')
    let chosenOption = selectOption.value

    let timeout = seconds = chosenOption === 'seconds'? 
    timeoutElt.value : 
    chosenOption === 'minutes' ? 
    parseInt(timeoutElt.value) * 60 : 
    parseInt(timeoutElt.value) * 3600

    intervalId = window.setInterval(() => {
        billboardElt.innerHTML = seconds
        seconds -= 1
    }, 1000)

    timeOutId = window.setTimeout(() => {
        window.clearInterval(intervalId)
        alarm.play()
    }, (parseInt(timeout) + 1) * 1000)

}

function pauseTimer () {
    if (pauseElt.value === 'pause') {
        window.clearInterval(intervalId)
        window.clearTimeout(timeOutId)
        stopSound()
        pauseElt.innerHTML = pauseElt.value = 'play'
    } else {
        resumeTimer()
    }
}

let resumeTimer = () => {
    remainingTime = parseInt(billboardElt.innerText)
    
    intervalId = window.setInterval(
        () => {
            billboardElt.innerHTML = remainingTime
            remainingTime -= 1
        }, 1000)

    timeOutId = window.setTimeout(
        () => {
            window.clearInterval(intervalId)
            alarm.play()
        }, (remainingTime + 1) * 1000
    )
    pauseElt.innerHTML = pauseElt.value = 'pause'
}
function resetTimer() {
    window.clearTimeout(timeOutId)
    window.clearInterval(intervalId)
    billboardElt.innerHTML = 0
    stopSound()
}

function alertClose () {
    window.alert('Close?')
}

function generateRandomNumber () {
    let number = Math.random()
    number = (number * 10).toFixed()
    document.getElementById('number').innerHTML = number
}

function clearRandomNumber () {
    document.getElementById('number').innerHTML = '-'
}

function stopSound () {
    alarm.pause()
    alarm.currentTime = 0
}