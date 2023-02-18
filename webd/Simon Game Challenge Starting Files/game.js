// alert("game.js")
var GamePattern=[];
var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;
var started=false;
$(document).keypress(function(event){
    level=0;
    if(!started)
    {
        $("#level-title").text("Level "+ level)
        nextSequence();
       started=true;
    }
    
});
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    AnimatePress(userChosenColour);
    soundd(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentlevel){
    if(GamePattern[currentlevel]===userClickedPattern[currentlevel]){
        console.log("Success");
        if(userClickedPattern.length===GamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    
    else{
        var sound=new Audio(src="sounds/"+"wrong"+".mp3");
     sound.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            

            $("body").removeClass("game-over");
        },200)
        console.log("Failed");
        $("h1").text("Game Over, Press Any Key to Restart");
        started=false;
    }

}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+ level)
    var RandomNumber=Math.floor(Math.random()*4);
    var RandomColour=buttonColours[RandomNumber];
    GamePattern.push(RandomColour);
    $("#"+RandomColour).fadeOut(100).fadeIn(100); 
    soundd(RandomColour);
    
}  

function soundd(sound){
    var sound=new Audio(src="sounds/"+sound+".mp3");
    sound.play();
}
function AnimatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}