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
    var actual_answer = parseInt(number1) * parseInt(number2) ;
    var question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    var input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>" ; 
    var check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    var row = question_number + input_box + check_button ; 
    
    document.getElementById("output").innerHTML = row ;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}