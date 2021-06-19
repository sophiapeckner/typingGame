const wordBox = document.getElementById("prompt");
const inputBox = document.getElementById("typeHere");

function isTextAreaOverflow(){
    // Returns True if text area is overflowing
    console.log(wordBox.scrollHeight + ">" + wordBox.clientHeight);
    return wordBox.scrollHeight > wordBox.clientHeight;
}

function splitToCharacters(word){
    let l = [];
    for (var i = 0; i < word.length - 1; i++){
        l.push(word[i]);    // Pushes letters to l
    }
    return l;
}

function appendToTextArea(){
    let lastWord;
    let totalCharacters = [];
    while (!isTextAreaOverflow()){
        let word = randomWord() + " ";
        wordBox.value += word;
        console.log(wordBox.value);
        if (isTextAreaOverflow()){
            lastWord = word;
            // console.log("here, lastWord: ", lastWord);
        } else {    // Only push the words BEFORE overflow
            let myCharacters = splitToCharacters(word);
            totalCharacters.push(myCharacters);
        }
    }
    console.log("Last word: ", lastWord)
    wordBox.value = wordBox.value.replace(lastWord, "");
    // return totalCharacters;
}

function checkInputFocus(){
    console.log(inputBox.value)
}

function main(){
    appendToTextArea();
    checkInputFocus();
}

main();
