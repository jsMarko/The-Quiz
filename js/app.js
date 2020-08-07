//  create mulitdimensional array to hold questions

const questions = [
   ["How many planets are in the solar system?", "8"],
   ["How many continents are there?", "7"],
   ["How many legs does an insect have?", "6"],
   ["What year was Javascript created?", "1995"]
];

//  store number of questions answered correctly
let correct = [];
let incorrect = [];
let correctAnswers = 0;

/* loop through questions 
     present question to user via prompt
     compare user response to answer in the array
     if response matches answer then number of correct answers increments by 1
*/

for (let i = 0; i < questions.length; i++) {
   let question = questions[i][0];
   let answer = questions[i][1];
   let response = prompt(question);

   if (response === answer) {
      correctAnswers++;
      correct.push(
         `${question} <span class="corAns">Your answer was ${answer}, Well done!</span>`
      );
   } else {
      incorrect.push(
         `${question} <span class="incorAns">Your answer: ${response} -   Correct Answer: ${answer}</span> `
      );
   }
}

function listItems(arr) {
   let items = "";
   for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
   }
   return items;
}

let html = `
  <h1> You got ${correctAnswers} question(s) right!!! </h1>
  <h2><span class="right">RIGHT</span> Answers:</h2>
  <ol>${listItems(correct)}</ol>

  <h2><span class="wrong">WRONG</span> Answers:</h2>
  <ol>${listItems(incorrect)}</ol>
`;
document.querySelector("main").innerHTML = html;
