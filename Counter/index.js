// alert("Dewansh Jangir")

var counter=0;

$(".decrease").click(function(){
    counter--;
    counter<0?$(".counter-number").css("color","red"):$(".counter-number").css("color","green");

    $(".counter-number").text(counter);
    console.log(counter);

})

$(".increase").click(function(){
    counter++;
    counter<0?$(".counter-number").css("color","red"):$(".counter-number").css("color","green");

    $(".counter-number").text(counter);
    console.log(counter);

})
$(".reset").click(function(){
    counter=0;
    $(".counter-number").text(counter);
    console.log(counter);
})

