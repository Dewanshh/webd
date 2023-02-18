// var faq=false;
// $(".faq").click(function(){
//     faq?$(".faq").removeClass("active")?$(".faq").addClass("active");
// })
// alert("Deans")
// var x=$(".faq");
// const faqs = document.querySelectorA
$(".faq").click(function(e){
    // $(".answer").removeClass("active");
    $(this).find(".answer").toggleClass("active");
})
