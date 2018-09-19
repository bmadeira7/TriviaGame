//setting up my variables 
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");


var timeRemaining = 45;
var correctlyAnswered = 0;
var incorrectlyAnswered = 0;



//this is my array which will contain all of my trivia questions

var questionsArray = ["Which inventor developed the solid-body electric guitar that made rock 'n roll possible?",
    "Which electronic musical instrument emits the eeriest of sounds and is the only instrument played without touching it?",
    "How many keys are on most baby grand pianos?",
    "Which one of Prince's songs reached highest on the music charts?",
    "Which famous American musician was fatally shot by his father on April 1, 1984?",
    "Who is the most successful UK solo artist in the US?",
    "How many valves does a trumpet have?",
    "What was the first music video played on MTV?"
]

//this is my question one answers array
var answersArray1 = ["Jimi Hendrix", "Chuck Berry", "Les Paul", "Glenn Danzig"]

var answersArray2 = ["Theremin", "Piano", "Midi Guitar", "Beat Machine"]

var answersArray3 = ["90", "38", "78", "88"]

var answersArray4 = ["Purple Rain", "When Doves Cry", "I Would Die 4 U", "Raspberry Beret"]

var answersArray5 = ["John Lennon", "Kurt Cobain", "Tupac", "Marvin Gaye"]

var answersArray6 = ["Elton John", "Paul McCartney", "John Lennon", "Gucci Mane"]

var answersArray7 = ["Six", "Three", "Twelve", "Four"]

var answersArray8 = ["You Better Run", "In The Air Tonight", "Video Killed The Radio Star", "Oliver's Army"]

// i wish i knew how to do all this using for loops, it would save time 

function start() {
    firstQuestion = $(".questionOne").text(questionsArray[0])
    secondQuestion = $(".questionTwo").text(questionsArray[1])
    thirdQuestion = $(".questionThree").text(questionsArray[2])
    fourthQuestion = $(".questionFour").text(questionsArray[3])
    fifthQuestion = $(".questionFive").text(questionsArray[4])
    sixthQuestion = $(".questionSix").text(questionsArray[5])
    seventhQuestion = $(".questionSeven").text(questionsArray[6])
    eighthQuestion = $(".questionEight").text(questionsArray[7])
    $("#timerSpan").text(timeRemaining)
    var INTERVAL = setInterval(timeDown, 1000)
    correctResults = $("#results").text("Correct Answers: " + correctlyAnswered)
    incorrectResults = $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered)
}


function timeDown() {
    timeRemaining--;
    $("#timerSpan").text(timeRemaining);
    if (timeRemaining === 0) {
        alert("OUT OF TIME!!!");
        
      clearInterval(INTERVAL)
    }
}

var correctAnswer1 = answersArray1[2]
console.log("'" + correctAnswer1 + "'")

var correctAnswer2 = answersArray2[0]
console.log("'" + correctAnswer2 + "'")

var correctAnswer3 = answersArray3[3]
console.log("'" + correctAnswer3 + "'")

var correctAnswer4 = answersArray4[1]
console.log("'" + correctAnswer4 + "'")

var correctAnswer5 = answersArray5[3]
console.log("'" + correctAnswer5 + "'")

var correctAnswer6 = answersArray6[0]
console.log("'" + correctAnswer6 + "'")

var correctAnswer7 = answersArray7[1]
console.log("'" + correctAnswer7 + "'")

var correctAnswer8 = answersArray8[2]
console.log("'" + correctAnswer8 + "'")




$("#startButton").click(function () {
    start();

})



$("#submit").click(function () {
    var answer1 = $("#form1 input[type='radio']:checked").val()
    var answer2 = $("#form2 input[type='radio']:checked").val()
    var answer3 = $("#form3 input[type='radio']:checked").val()
    var answer4 = $("#form4 input[type='radio']:checked").val()
    var answer5 = $("#form5 input[type='radio']:checked").val()
    var answer6 = $("#form6 input[type='radio']:checked").val()
    var answer7 = $("#form7 input[type='radio']:checked").val()
    var answer8 = $("#form8 input[type='radio']:checked").val()

    if (correctAnswer1 === answer1) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else {
        incorrectlyAnswered++;
        $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);
    }

    if (correctAnswer2 === answer2) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);

    if (correctAnswer3 === answer3) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);


    if (correctAnswer4 === answer4) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);


    if (correctAnswer5 === answer5) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);


    if (correctAnswer6 === answer6) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);


    if (correctAnswer7 === answer7) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);


    if (correctAnswer8 === answer8) {

        correctlyAnswered++;
        $("#results").text("Correct Answers: " + correctlyAnswered);

    }
    else { incorrectlyAnswered++ }
    $("#wrongs").text("Incorrect Answers: " + incorrectlyAnswered);


})
