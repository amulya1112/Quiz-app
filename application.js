const quizData = [
  {
    question: "Which among the following element is an essential constituent of acids?",
    a: "Nitrogen",
    b: "Hydrogen",
    c: "Oxygen",
    d: "Helium",
    correct: "b",
  },
  {
    question:  "Which of the following compound is mainly used in hand sanitizer?",
    a: "Aldehyde",
    b: "Acetic Acid",
    c: "Alcohol",
    d: "Ketone",
    correct: "c",
  },
  {
    question: "What is the S.I. unit of potential difference?",
    a: "Volt",
    b: "Ampere",
    c: "Coulumb",
    d: "Ohms",
    correct: "a",
  },
  {
    question: "Which of the following enzymes is not present in the human stomach?",
    a: "Pepsin",
    b: "Hydrochloric Acid",
    c: "Mucus",
    d: "Trypsin",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        ` // location.reload() won't work in CodePen for security reasons;
    }
  }
});