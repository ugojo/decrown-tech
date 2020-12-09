let myInput = document.querySelector(".myInput");

function mainQuiz() {
     document.querySelector(".startCol").style.display = "none";
}
let startBtn = document.querySelector(".startBtn").addEventListener("click" , function() {
    
    if (myInput.value === "") {
   
       let  startBtn = document.querySelector(".startBtn").innerHTML = "Type your name.."
    }
    else {
        document.querySelector(".col-startQuiz").style.display = "none";
        document.querySelector(".col-meun").style.display = "block";
    }
})
function colTip(){
     document.querySelector(".col-meun").style.display = "none";
     document.querySelector(".col-tip").style.display = "block";
     selfWriter()
}
let facts = [
     {
         fact:"EVERYONE IS BUILT TO BE GREAT ACTION DETERMINES THE REST"
     },
     {
        fact:"ONE OF THE MOST EXPENSIVE THINGS YOU CAN DO IS PAY ATTENTION TO THE WRONG PEOPLE"
    },
    {
        fact:"IF YOU WANT TO GET ANYTHING DONE YOU DO IT YOUR SELF"
    },
    {
        fact:"THOSE WHO ARE FOCUSED ON SELF IMPROVEMENT HAVE NO TIME FOR ENVY"
    },
    {
        fact:"LOVE IS NOT IN THE WORD BUT IN THE ACTION AND HEART"
    },
    {
        fact:"IF YOU DONT KNOW WHO YOU ARE YOU BECOME A WEAPON AGAINST YOURSELF"
    },
    {
        fact:"THE HUSBAND MAY BE THE HEAD OF HOME BUT THE WIFE IS THE HEART OF HOME"
    },
    {
        fact:"IGNORING YOUR PASSION IS SLOW SUICIDE"
    },
    {
        fact:"BE HELPFUL WHEN YOU SEE A PRESON WITHOUT A SMILE GIVE THE YOURS"
    },
    {
        fact:"ELEGANCE IS AND ATTITUDE"
    },
    {
        fact:"SUCCESS IS NOTHING MORE THAN A FEW SIMPLE DISCIPLINES, PRACTIED EVERYDAY"
    }
]   
    let x = 0 ;
    let  speed = 70 ;
    let currentFact = facts.sort(function() {
        return 0.5 - Math.random();
    })
    function selfWriter(){
    
    if ( 1 < currentFact[0].fact.length) {
        
        document.getElementById("demo").innerHTML += currentFact[0].fact.charAt(x);
        x++
        setTimeout(selfWriter ,speed);
    }
}
function startQuiz() {
    document.querySelector(".col-tip").style.display = "none";
    document.querySelector(".col-main").style.display = "block";
    document.querySelector(".col-fact").style.display = "block";
    document.querySelector(".logo").style.display = "none";
    showQuestion()
}
/*---------------- highScore -------------------*/
function showScore(){
    document.querySelector(".col-recentScore").style.display = "block";
}
let closeScore = document.querySelector(".closeRecentScore").onclick = function() {
    
    document.querySelector(".col-recentScore").style.display = "none";
}

/* Question Part */
let questions = [
     {
        question: 'where is the world oldest University located ',
        opt1: 'Australia',
        opt2: 'Europe',
        opt3: 'Africa',
        opt4: 'Asia',
        answer: 3,
        hint: 'The University of AL-Qarawinyyin is the oldest existing,' +
         'continually operating na dfirst degree-awarding educational instition in the world'
     },{
       question: 'How much percent of Elephant do Africa own',
       opt1: '70 - 85%',
       opt2: '20  -30%',
       opt3: '5 - 20%',
       opt4: '100%',
       answer: 1 ,
       hint: 'Afican has over 85% of the world\'s elephants,which can weigh up to 7 tons and over 99% of the' +
        'remainig liones are on the African continent'
     },
     {
         question: 'The richest Africa man is from which of these county',
         opt1: 'SouthAfrica',
         opt2: 'Ghana',
         opt3: 'Nigria',
         opt4: 'Algria',
         answer: 3,
         hint: 'The richest man in african is'
     }

    ]
/*------------- show Question--------------------*/
let score = 0;
let worng = 0;
let questionLen = questions.length ;
let currentIndex = 0 ;
let showLength ;
let showingQuestion = document.querySelector(".question");
    let optionsBtn = Array.from( document.querySelectorAll(".option"));
    let currentQuestion = [...questions].sort(function() {
        return 0.5 - Math.random();
    }) ;

let showingNow = 1 ;

 function showQuestion() {

    showingQuestion.innerHTML = currentQuestion[currentIndex].question ;
    optionsBtn.forEach(option => {
        
        let optdata = option.dataset['opt'];

       option.innerHTML =  currentQuestion[currentIndex]['opt' + optdata];

       showLength = document.querySelector(".questionNum").innerHTML = showingNow +" " + 'of' + " " + questionLen; 
    });

/*------- checking for correct Answer ------------*/
   
let correct = false ;
let accpectingAnws = true ;
  optionsBtn.forEach(option => {
      
    option.addEventListener("click", checkAnswer);
  });

  function checkAnswer(e) {
      
   let  currentTarget = e.target ;
   let pickedAnswer = currentTarget.dataset['opt'];

 while (accpectingAnws) {
      
    accpectingAnws = false ;

   if ( pickedAnswer == currentQuestion[currentIndex].answer ) {
       score++ ;
       correct = true;
      currentTarget.className += ' correct';
      
      document.querySelector(".score").innerHTML ='socre :' + score;
   }else{
       worng++;
       correct = false ;
       currentTarget.className += ' worng';
        
       document.querySelector(".worngAnw").innerHTML = 'worng :' + worng ;
   }
  }
 }
}
function nextQuestion() {
     currentIndex++ ; 
     showingNow++ ;

     showLength.innerHTML = showingNow + " " + 'of' + " " + questionLen;
     showQuestion(currentIndex);

     for (let i = 0; i < optionsBtn.length; i++) {
         
        optionsBtn[i].className = "";
        optionsBtn[i].className = " option";
     }
}