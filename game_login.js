function addName(){
   var player1 = document.getElementById("player1_name_input").value; 
   console.log(player1);
   var player2 = document.getElementById("player2_name_input").value;
   console.log(player2);
   localStorage.setItem("player1",player1);
   localStorage.setItem("player2",player2);
   window.location = "page.html";
}