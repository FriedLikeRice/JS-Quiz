const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?", 
        answers:[
            { text: "document.getElementByName("p").innerHTML = "Hello World!";",correct: false}
            { text: "#demo.innerHTML = "Hello World!";", correct: true}
            { text: "document.getElement("p").innerHTML = "Hello World!";",correct: false}
            { text: "document.getElementById("demo").innerHTML = "Hello World!";",correct: true}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers:[
            { text: "<javascript>",correct: false}
            { text: "<script>",correct: true}
            { text: "<scripting>",correct: false}
            { text: "<js>",correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answers");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startaQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers.appenedChild(button)
    });
    
}