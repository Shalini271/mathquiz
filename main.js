player1="";
player2="";
function adduser(){
    player1=document.getElementById("player1_name_input").value;
    player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("P1",player1);
    localStorage.setItem("P2",player2);
    window.location="second.html";
}
