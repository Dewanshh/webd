for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // console.log(this.innerHTML);
        animationbutton(this.innerHTML);

        if (this.innerHTML === "a") {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        if (this.innerHTML === "w") {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        if (this.innerHTML === "s") {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        if (this.innerHTML === "d") {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        }
        if (this.innerHTML === "j") {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
        if (this.innerHTML === "k") {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        }
        if (this.innerHTML === "l") {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
    });
}


window.addEventListener("keydown", function (event) {
    console.log(event.key);
    animationbutton(event.key);
    if (event.key ==="a") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if (event.key === "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if (event.key  === "s") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if (event.key === "d") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    if (event.key === "j") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (event.key  === "k") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if (event.key === "l") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
});

function animationbutton(key){
        var activebutton=document.querySelector("."+key);
        activebutton.classList.add("pressed");

        setTimeout(function(){
            activebutton.classList.remove("pressed");
        },100);
}