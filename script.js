
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");

let audio = new Audio();
audio.src="./Sounds/Street-Credibility.mp3";

function playAudio(){
    audio.play();
}
function pauseAudio(){
    audio.pause();
}

first.addEventListener("click", playAudio);
second.addEventListener("click", pauseAudio);
third.addEventListener("click", playAudio);



function playSound(keys) {
    switch (keys) {
      case "a":
        audio.play();
        break;
      case "p":
        audio.pause();
        break;
            case " ":
                audio.pause();
        break
            case "backspace":
                audio.play();
        break
      default:
        // Do nothing for keys without a defined sound
        break;
    }
  }

  // Add a keydown event listener to the document
  document.addEventListener("keydown", function (e) {
    const keyPressed = e.key.toLowerCase(); // Convert to lowercase for case-insensitive matching
    playSound(keyPressed );
  });
