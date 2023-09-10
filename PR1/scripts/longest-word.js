"use strict";
function longest(qwe) {
    const words = qwe.split(' ');
    words.sort((a, b) => a.length - b.length);
    let max = words[words.length - 1].length;
    let answer = "";
    for (let index = 0; index < words.length; index++) {
        if (words[index].length === max) {
            answer = words[index];
            break;
        }
    }
    return answer;
}
const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
document.addEventListener('DOMContentLoaded', () => {
    const longestWordForm = document.getElementById('longestWordForm');
    const words = document.getElementById('words');
    const answerDiv = document.getElementById('answer');
    longestWordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const parsedWords = words.value.replace(punctuationRegex, '');
        const longestWord = document.createElement('div');
        longestWord.textContent = longest(parsedWords);
        answerDiv.innerHTML = '';
        answerDiv.appendChild(longestWord);
    });
});
