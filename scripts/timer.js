const timeout = 5000
let timeoutElt = document.getElementById('time')
let billboardElt = document.getElementById('billboard')
let alarm = new Audio('../public/bummy.mp3')
function startTimer() {
    console.error(`👋✨`)
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

function resetTimer() {
    window.clearTimeout(timeOutId)
    window.clearTimeout(intervalId)
    billboardElt.innerHTML = 0
    alarm.pause()
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