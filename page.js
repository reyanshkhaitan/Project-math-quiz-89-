var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
console.log("player1 = " + player1 + "playe2 = " + player2  );


player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("playerQuestionName").innerHTML = "Question Turn - " + player1 ;
document.getElementById("playerAnswerName").innerHTML = "Answer Turn - " + player2 ;

function send(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2) ;
    var question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    var input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>" ; 
    var check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    var row = question_number + input_box + check_button ; 
    
    document.getElementById("output").innerHTML = row ;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

questionTurn = "player1";
answerTurn = "player2";

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answerTurn == "player1"){
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("playerQuestionName").innerHTML = "Question Turn - " + player2 ;
    }
    else{
        questionTurn = "player1"
        document.getElementById("playerQuestionName").innerHTML = "Question Turn - " + player1 ;
    }


    if(answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("playerAnswerName").innerHTML = "Answer Turn - " + player2 ;
    }
    else{
        answerTurn = "player1"
        document.getElementById("playerAnswerName").innerHTML = "Answer Turn - " + player1 ;
    }
    document.getElementById("output").innerHTML = "";
}