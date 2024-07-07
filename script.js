const questions = [
    {
        ques: "What year did World War II end?",
        ans: [
            {option: "1947", val:false},
            {option: "1942", val:false},
            {option: "1948", val:false},
            {option: "1945", val:true}
        ]
    },
    { 
        ques: 'Who is the author of the "Harry Potter" series?',
        ans: [
            {option: "J.R.R. Tolkien", val:false},
            {option: "George R.R. Martin", val:false },
            {option: "J.K. Rowling", val:true },
            {option: "Suzanne Collins", val:false}
        ]
    },
    { 
        ques: "Who was the first Prime Ministerof independent India?",
        ans: [
            {option: "Mahatma Gandhi", val:false},
            {option: "Jawaharlal Nehru", val:true},
            {option: "Sardar Vallabhbhai Patel", val:false},
            {option: "Dr. B.R. Ambedkar", val:false}
        ]
    },
    { 
        ques: "What is the largest desert in the world?",
        ans: [
            {option: "Sahara Desert", val:true},
            {option: "Gobi Desert", val:false},
            {option: "Arabian Desert", val:false},
            {option: "Kalahari Desert", val:false}
        ]
    },
    { 
        ques: "What is the capital city of Australia?",
        ans: [
            {option: "Sydney", val:false},
            {option: "Melbourne", val:false },
            {option: "Canberra", val:true},
            {option: "Brisbane", val:false}
        ]
    },
    { 
        ques: "Who was the leader of the Indian National Army (INA) during World War II?",
        ans: [
            {option: "Subhas Chandra Bose", val:true},
            {option: "Chandrashekhar Azad", val:false},
            {option: "Lala Lajpat Rai", val:false },
            {option: "Bhagat Singh", val:false}
        ]
    },
    { 
        ques: "Which country has the most natural lakes?",
        ans: [
            {option: "Canada", val:true},
            {option: "Russia", val:false },
            {option: "United States", val: false },
            {option: "Brazil", val:false}
        ]
    },
    { 
        ques: 'Who wrote the play "Romeo and Juliet"?',
        ans: [
            {option: "Christopher Marlowe", val:false},
            {option: "Geoffrey Chaucer", val:false },
            {option: "William Shakespeare", val:true},
            {option: "John Milton", val:false}
        ]
    },
    { 
        ques: "Which is the smallest continent by land area?",
        ans: [
            {option: "Europe", val:false},
            {option: " Australia", val:true},
            {option: "Antarctica", val:false },
            {option: "South America", val:false}
        ]
    },
    { 
        ques: "What is the largest ocean on Earth?",
        ans: [
            {option: "Atlantic Ocean", val:false},
            {option: "Indian Ocean", val:false },
            {option: "Southern Ocean", val:false},
            {option: "Pacific Ocean", val:true}
        ]
    },
    { 
        ques: 'Who painted the Mona Lisa?',
        ans: [
            {option: 'Vincent van Gogh', val:false},
            {option: 'Pablo Picasso', val:false },
            {option: 'Claude Monet', val:false},
            {option: 'Leonardo da Vinci' , val:true}
        ]
    },
    { 
        ques: 'What is the tallest building in the world as of 2024?',
        ans: [
            {option: 'Shanghai Tower', val:false},
            {option: 'Abraj Al-Bait Clock Tower', val:false },
            {option: 'Burj Khalifa' , val:true},
            {option: 'One World Trade Center', val:false},
        ]
    },
    { 
        ques: 'In which year did the Titanic sink?',
        ans: [
            {option: '1905', val:false},
            {option: '1910', val:false },
            {option: '1912', val:true },
            {option: '1915' , val:false}
        ]
    },
    { 
        ques: 'Which movie won the Oscar for Best Picture in 2020?',
        ans: [
            {option: '1917', val:false},
            {option: 'Parasite', val:true},
            {option: 'Once Upon a Time in Hollywood', val:false },
            {option: 'Joker' , val:false}
        ]
    },
    { 
        ques: 'Who is the creator of the television series "Game of Thrones"?',
        ans: [
            {option: 'George R.R. Martin' , val:true},
            {option: 'J.K. Rowling', val:false},
            {option: 'J.R.R. Tolkien', val:false },
            {option: 'Stephen King', val:false},
        ]
    },
    { 
        ques: 'In which year was the first "Harry Potter" book published?',
        ans: [
            {option: '1995', val:false},
            {option: '1997' , val:true},
            {option: '1999', val:false },
            {option: '2000', val:false},
        ]
    },
    { 
        ques: 'What is Spider-Man’s real name?',
        ans: [
            {option: 'Peter Parker' , val:true},
            {option: 'Tony Stark', val:false},
            {option: 'Bruce Banner', val:false },
            {option: 'Clark Kent', val:false},
        ]
    },
    { 
        ques: 'What is the smallest country in the world by land area?',
        ans: [
            {option: 'Monaco', val:false},
            {option: 'Liechtenstein', val:false },
            {option: 'San Marino', val:false},
            {option: 'Vatican City' , val:true}
        ]
    },
    { 
        ques: 'Who wrote "Pride and Prejudice"?',
        ans: [
            {option: 'Charlotte Brontë', val:false},
            {option: 'Emily Brontë', val:false },
            {option: 'Jane Austen', val:true},
            {option: 'Mary Shelley' , val:false }
        ]
    },
    { 
        ques: 'The Battle of Plassey was fought in which year?',
        ans: [
            {option: '1757', val:true},
            {option: '1761', val:false },
            {option: '1776', val:false},
            {option: '1782' , val:false }
        ]
    },
]

let app= document.getElementById("app");
let start = document.getElementsByClassName("start")[0];
let time= document.getElementById("timer");
var timer;
var tim1;

let cqi=0;
let score =0;

function scroll(){
    window.scrollTo({top:document.body.scrollHeight, behavior : "smooth" });
}

function startQuiz(){
    app.innerHTML=""
    cqi=0;
    score =0;
    start.disabled = true;
    showQuestion();
}

function startTimer(){
    var sec=0;
    timer=setInterval(() => {
        time.innerHTML=(29 - sec) + 's';
        sec++;
    },1000)
}

function showQuestion(){
    startTimer();
    cq=questions[cqi];
    const newques= document.createElement('div')
    newques.classList.add("quiz");
    const questionStatement =  document.createElement('p')
    questionStatement.innerHTML=cq.ques;
    const answer1= document.createElement('div')
    answer1.classList.add("answer-buttons");
    const skip = document.createElement('button')
    skip.classList.add("skip")
    skip.innerHTML="SKIP";
    newques.appendChild(questionStatement)
    newques.appendChild(answer1)
    newques.appendChild(skip)
    app.appendChild(newques);
    addButtons();
    tim1 = setTimeout(skipQuestion, 30000);
    skip.addEventListener("click", skipQuestion)
    scroll();
}

function skipQuestion(){
    let ansButtons = document.getElementsByClassName("answer-buttons")[cqi]
    let skip = document.getElementsByClassName("skip")[cqi];
    Array.from(ansButtons.children).forEach(button => {
        if(button.dataset.val === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    skip.disabled=true;
    skip.innerHTML="Please Scroll Down";
    nextQues();
}

function addButtons(){
    let ansButtons = document.getElementsByClassName("answer-buttons")[cqi]
    cq.ans.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML= answer.option;
    button.classList.add("btn")
    ansButtons.appendChild(button);
    if(answer.val){
        button.dataset.val= answer.val
    }
    button.addEventListener("click", selectAnswer)
    })
}

function showScore(){
    let score1 = document.createElement('p');
    score1.classList.add("score");
    score1.innerHTML=`Score : ${score} out of 20`;
    let playagain=document.createElement("button")
    playagain.innerHTML="PLAY AGAIN"
    playagain.classList.add("score")
    app.append(score1);
    app.append(playagain);
    playagain.addEventListener("click", startQuiz)
    scroll();
}

function nextQues(){
    clearInterval(timer);
    clearTimeout(tim1);
    cqi++;
    if(cqi < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

function selectAnswer(e){
    let ansButtons = document.getElementsByClassName("answer-buttons")[cqi]
    let skip1= document.getElementsByClassName("skip")[cqi];
    skip1.disabled=true;
    skip1.innerHTML="Please Scroll Down";
    selectBtn = e.target;
    const isCorrect = selectBtn.dataset.val === "true"
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(ansButtons.children).forEach(button => {
        if(button.dataset.val === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextQues();
}
start.addEventListener("click", startQuiz);

