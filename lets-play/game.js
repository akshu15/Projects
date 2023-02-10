const quizList = [
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creating Style Sheets",
      "Content Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "One gigabyte is equal to how many megabytes?",
    options: ["100", "10", "1000", "500"],
    answer: "1000",
  },
  {
    question:
      "What is a correct syntax to return the first character in a string?",
    options: ['sub("Hello",0,1)', 'x="Hello"[0]'],
    answer: 'x="Hello"[0]',
  },
  {
    question: "What is BOM?",
    options: [
      "Browser Object Model",
      "Browser Onload Model",
      "Boolean Operator Model",
      "Break On Make",
    ],
    answer: "Browser Object Model",
  },
  {
    question: "Is JavaScript a case-sensitive language?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What is the correct way to create a function in Python?",
    options: [
      "function myfunction():",
      "create myFunction():",
      "myFunction():",
      "def myFunction():",
    ],
    answer: "def myFunction():",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "styles", "class", "font"],
    answer: "style",
  },
  {
    question:
      "What is the correct syntax to output the type of a variable or object in Python?",
    options: [
      "print(typeof(x))",
      "print(typeof x)",
      "print(type(x))",
      "print(typeOf(x))",
    ],
    answer: "print(type(x))",
  },
];

let index, count;
const quizButtons = document.getElementById("game-options");
const quizQuestion = document.querySelector("[data-question]");
const nextButton = document.getElementById("game-next-btn");

function startGame() {
  document.getElementById("start").classList.add("hide");
  document.getElementById("restart").classList.add("hide");
  document.getElementById("game-body").classList.remove("hide");
  index = 0;
  count = 0;
  createQuiz();
}
nextButton.addEventListener("click", () => {
  document.getElementById("game-body").classList.toggle("do-flip-flip");
  document.getElementById("container").classList.toggle("do-flip");
  index++;
  createQuiz();
});

function quizContent() {
  quizQuestion.innerText = quizList[index].question;
  let clicked = false;
  quizList[index].options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn");
    button.addEventListener("click", (e) => {
      if (clicked === false) {
        console.log("false");
        if (e.target.innerHTML == quizList[index].answer) {
          e.target.style.backgroundColor = "#68bb59";
          count++;
        } else {
          e.target.style.backgroundColor = "#ff6242";
        }
        clicked = true;
      }
      if (index === quizList.length - 1) {
        quizQuestion.innerText = "Your Score: " + count + "/8";
      }
    });
    quizButtons.appendChild(button);
  });
}
function resetQuiz() {
  while (quizButtons.firstChild) {
    quizButtons.removeChild(quizButtons.firstChild);
  }
}

function createQuiz() {
  resetQuiz();
  quizContent();

  if (quizList.length > index + 1) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
    document.getElementById("restart").classList.remove("hide");
  }
}
