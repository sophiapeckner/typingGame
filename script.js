// var lyrics = "I thought that I've been hurt before But no one's ever left me quite this sore Your words cut deeper than a knife Now I need someone to breathe me back to life Got a feeling that I'm going under But I know that I'll make it out alive If I quit calling you my lover"
var vals = {}
const PROMPT = document.getElementById("prompt")
const INPUT_BOX = document.getElementById("input")
const TIMER = document.getElementById("timer")
const IFRAME = document.getElementById("songPlayer")

INPUT_BOX.addEventListener("input", checkInput)

function getSongDetails(){
    let dict = getRandomSong()
    myLyric = dict.first
    myLink = dict.second
    vals = {
        first: myLyric,
        second: myLink,
    }
}

// https://stackoverflow.com/questions/56177402/split-each-letter-in-a-div-into-its-own-span
function newPrompt(){
    getSongDetails()
    lyrics = vals.first
    let text = lyrics.split("")  // Returns an array of characters in lyrics
    let result = ""
    PROMPT.innerHTML = ""

    text.forEach(char => {
        result += "<span>" + char + "</span>"
    })
    PROMPT.innerHTML = result
    INPUT_BOX.value = null      // Words not typed yet
}

function checkInput() {
    let myCharacters = INPUT_BOX.value.split("")    // Inputted characters
    let correctCharacters = PROMPT.querySelectorAll("span") // Characters in lyrics
    myCharacters.forEach((char, i) => {
        let correctChar = correctCharacters[i]
        correctChar.classList.remove("correct")
        correctChar.classList.remove("incorrect")
        if (char == correctChar.innerText){
            correctChar.classList.add("correct")
        } else {
            correctChar.classList.add("incorrect")
        }
    })
}

// https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
function startTimer(){
    let sec = 30
    var timer = setInterval(function(){
        TIMER.innerHTML = sec
        sec--
        if (sec < 0){
            clearInterval(timer)
            end()
        }
    }, 1000)
}

function calculateWPM(){
    let correctCharArray = PROMPT.getElementsByClassName("correct")
    let numCorrect = correctCharArray.length
    let WPM = Math.round((numCorrect / 5) / 0.5)
    document.getElementById("myWPM").innerHTML = "WPM: " + WPM
}

function end(){
    IFRAME.style.display = "block"
    calculateWPM()
    document.getElementById("input").disabled = true
    IFRAME.src = vals.second
}

function reset(){
    PROMPT.innerHTML = ""
    INPUT_BOX.innerHTML = ""
    IFRAME.style.display = "none"
    document.getElementById("input").disabled = false
    getSongDetails()
    newPrompt()
}

reset()
// newPrompt()
