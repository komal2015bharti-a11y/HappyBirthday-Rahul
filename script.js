function scrollToGallery(){

  document.getElementById("gallery")
  .scrollIntoView({
    behavior:"smooth"
  });
}

/* MUSIC */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("music-btn");

let playing = true;

musicBtn.addEventListener("click",()=>{

  if(playing){

    music.pause();

    musicBtn.innerHTML = "🎵";

    playing = false;

  }else{

    music.play();

    musicBtn.innerHTML = "❤️";

    playing = true;
  }
});

/* COUNTDOWN */

const startDate =
new Date("2023-07-13");

const today =
new Date();

const difference =
today - startDate;

const days =
Math.floor(
difference /
(1000*60*60*24)
);

document.getElementById("days")
.innerText = days;

/* IMAGE POPUP */

function openImage(src){

  document.getElementById("popup")
  .style.display = "flex";

  document.getElementById("popup-img")
  .src = src;
}

function closeImage(){

  document.getElementById("popup")
  .style.display = "none";
}

/* HEART CURSOR TRAIL */

document.addEventListener(
  "mousemove",
  function(e){

    let heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add(
      "cursor-heart"
    );

    heart.style.left =
    e.pageX + "px";

    heart.style.top =
    e.pageY + "px";

    document.body.appendChild(
      heart
    );

    setTimeout(()=>{
      heart.remove();
    },1000);

});

/* SURPRISE MESSAGE */

function showSurprise(){

  document.getElementById(
    "secret-message"
  ).style.display = "block";
}

/* BIRTHDAY CAKE */

function blowCandles(){

  const flames =
  document.querySelectorAll(
    ".flame"
  );

  flames.forEach(flame=>{

    flame.style.display =
    "none";

  });

  document.getElementById(
    "wish-message"
  ).style.display = "block";
}