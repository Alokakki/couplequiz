const questions = [
    "Who do you like most?",
    "What is your favorite hobby?",
    "Which place would you love to visit?",
    "Who is your inspiration?",
    "What is your dream job?"
];

let currentQuestionIndex = 0;
let timeLeft = 30;
let timer;

const questionElement = document.getElementById("question");
const timerElement = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");

function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timerElement.textContent = `Time left: 30`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextBtn.disabled = false;  // Enable button when time runs out
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        questionElement.textContent = questions[currentQuestionIndex];
        nextBtn.disabled = true;  // Disable button until time runs out
        startTimer();
    } else {
        clearInterval(timer);
        questionElement.textContent = "Quiz completed!";
        timerElement.textContent = "";
        nextBtn.style.display = "none";
    }
}

nextBtn.addEventListener("click", nextQuestion);

// Initialize the first question
questionElement.textContent = questions[currentQuestionIndex];
nextBtn.disabled = true;
startTimer();