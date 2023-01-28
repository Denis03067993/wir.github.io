
const quizData =[
    {
        question: 'Расчет стоимости',
        a: 'Квартира', 
        b: 'Дом',
        c: 'Офис',
       correct : 'a'
    },
    {
        question: 'Есть ли у вас проект?',
        a: 'Да, есть',
        b: 'нет',
        c: 'планирую',
        correct : 'b'
    },
    { 
        question: 'Нужно ли покупать материал?',
        a: 'да',
        b: 'нет',
        c: 'возможно есть',
       correct: 'c'
    }
  
];

const quiz = document.getElementById('quiz');
const answerElement = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

function deselectAnswers() {
    answerElement.forEach(answerEL => answerEL.checked = false)
}

function getSelected() {
    let answer

    answerElement.forEach(answerEL => {
        if(answerEL.checked) {
            answer = answerEL.id;
        }
    })
    return answer;
}

submit.addEventListener('click', () =>{
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML =`<h2> Вы ответили на ${quizData.length} вопроса </h2>
            <h2>Пожалуйста напишите своё ФИО и номер телефона для связи </h2>
            <h2>Мы обязательно с вами свяжемся </h2>
            <form action= telegram.php method='POST' >
            <input type=text placeholder='ФИО' id='' name='name' style = 'padding: 8px'/>
            <input type=text placeholder='Номер телефона' id='' name='phone' style = 'padding: 8px'/>
            <button>Отправить</button>
            </form>
            `
            
        }
    }
}) 