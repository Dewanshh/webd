// alert("Dewansh JAngir")

// $ Sign replaces the java script document.querySelectorALL

// $('h1').css("color","red"); // Assign Colour to Element
// 
// $("h1").addClass("big-title"); //Helps to add Class to selected element

// $("h1").removeClass("big-title"); //He;ps to  remove the class

// We can also assign multiple classes to the selected element using the following commnad
// $("h1").addClass("big-title margin-50");

// We can also change the text or set the text using following command 
// $("h1").text("Hello Dewansh How are you?")

// We can add html properties using the followring command
// $("button").html("<em>HELLO WORLD</em>");

// We can also edit the src or href or the attributes using following command
// $("a").attr("href","https://www.yahoo.com");

// $("a").addClass("anchor");

// We can also add event listeners using jquery

// $("h1").click(function(){
//     $("h1").css("color","purple")
// })


// We can also add css or anything to particular class or id

$(".hello ").click(function(){
    $("h1").css("color","red")
    $(".d").css("color","blue");
    $(".d").css("font-size","200px");
    console.log($(".stringg").val());



})

$("input").keypress(function(event){
    // console.log(event.key);
    $("h1").text($(".stringg").val());
    var x=$(".stringg").val();
    $(".length").text(x.length+" Words");


})

//For adding animation we can use JQuery Effects page
