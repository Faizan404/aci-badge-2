const quizData = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "The <body> section",
    c: "Both the <head> and the <body> section are correct",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghini",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const quizSubContainer = document.querySelector(".quiz-sub-container");
const quizFooter = document.querySelector(".quiz-footer");
const quizScore = document.querySelector(".quiz-score");
let index = 0;
let score = 0;

function loadApp(i = 0) {
  index = i;
  if (index > quizData.length - 1) return showResults();
  //   console.log(index);
  const question = document.getElementById("question");
  const optA = document.getElementById("a_text");
  const optB = document.getElementById("b_text");
  const optC = document.getElementById("c_text");
  const optD = document.getElementById("d_text");
  const quizDetail = document.querySelector(".quiz-details");

  const firstQuizObj = quizData[index];
  question.textContent = firstQuizObj.question;
  optA.textContent = firstQuizObj.a;
  optB.textContent = firstQuizObj.b;
  optC.textContent = firstQuizObj.c;
  optD.textContent = firstQuizObj.d;
  quizDetail.textContent = `${index + 1}/${quizData.length}`;
}

function nextQuestion() {
  let isSelected = false;
  let userAnswer = "";
  const quizBtn = document.getElementById("btn");
  quizSubContainer.addEventListener("change", function (e) {
    userAnswer = e.target.id;
    isSelected = true;
  });
  quizBtn.addEventListener("click", function () {
    if (!isSelected) return alert("Please select any option");
    if (userAnswer === quizData[index].correct) {
      score++;
    }
    loadApp(index + 1);
    clearRadioButtonSelection();
    isSelected = false;
    console.log(`score: ${score}`);
  });
}

function showResults() {
  const displayScores = document.querySelector(".score");
  quizSubContainer.classList.add("hidden");
  quizFooter.classList.add("hidden");
  quizScore.classList.remove("hidden");
  displayScores.textContent = `You answered ${score}/5 question correctly`;
}

function reload() {
  const quizResetBtn = document.querySelector(".reset");
  quizResetBtn.addEventListener("click", function () {
    quizSubContainer.classList.remove("hidden");
    quizFooter.classList.remove("hidden");
    quizScore.classList.add("hidden");
    index = 0;
    score = 0;
    loadApp();
  });
}

function clearRadioButtonSelection() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
}

(function init() {
  loadApp();
  nextQuestion();
  reload();
})();