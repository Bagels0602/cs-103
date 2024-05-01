const questions = [
    {
        question: "What is not part of an arctic fox's diet?",
        answers: {
            a: "Lemming",
            b: "Birds",
            c: "Fish"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the top speed for an arctic fox?",
        answers: {
            a: "50 m/h",
            b: "50 km/h",
            c: "50 mm/h"
        },
        correctAnswer: "b"
    },
    {
        question: "Which animal is not included on this website?",
        answers: {
            a: "Snow petrel",
            b: "King penguin",
            c: "Orca",
            d: "Seal"
        },
        correctAnswer: "d"
    }
];


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz() {
    const output = [];


    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];


        for (const letter in currentQuestion.answers) {
            answers.push(
                `<label>
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                   ${letter}: ${currentQuestion.answers[letter]}
               </label>`
            );
        }


        output.push(
            `<div class="question">
               <h2>${currentQuestion.question}</h2>
               <div class="answers">${answers.join('')}</div>
           </div>`
        );
    });


    quizContainer.innerHTML = output.join('');
}


function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');


    let numCorrect = 0;


    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;


        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}


buildQuiz();


submitButton.addEventListener('click', showResults);