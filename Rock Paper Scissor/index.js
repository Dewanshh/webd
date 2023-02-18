var started=false;
var level=10;
var c_score=0;
var p_score=0;

$("button").click(function(e){
    
    level===0?gameover():check($(this).attr("id"));
});
function gameover(){
    if(c_score==p_score){
        $('.rpc-h').text("It's a Tie");
        $('.rpc-h').css("color","green");
    }
    if(c_score>p_score){
        $('.rpc-h').text("Computer Wins the Game");
        $('.rpc-h').css("color","green");
    }
    if(c_score<p_score){
        $('.rpc-h').text("Player Wins the Game");
        $('.rpc-h').css("color","green");
    }
}



function check(pressed){
    level--;
    $(".moves").text("Moves Left: "+level);
    var com=computer();
    console.log("Player "+pressed+"\nCom "+com);
    if(com>pressed)
    {
        $(".board").text("Computer Wins");
        $(".board").css("color","red");
        c_score++;
        $(".c_scoree").text(c_score);   
    }
    if(com<pressed)
    {
        $(".board").text("Player Wins");
        $(".board").css("color","green");

        p_score++;
        $(".p_scoree").text(p_score);   
    }
    if(com==pressed)
    {
        $(".board").text("Tie");
    }
}


function computer(){
    var computerr=Math.floor(Math.random()*5);
    return computerr;

}