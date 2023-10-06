const audio1 = document.getElementById('classical');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window;
    audio1.muted = !audio1.muted;
    e.preventDefault();
}, false);

const audio2 = document.getElementById('qmusic');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window;
    audio2.muted = !audio2.muted;
    e.preventDefault();
}, false);

const audio3 = document.getElementById('lqmusic');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window;
    audio3.muted = !audio3.muted;
    e.preventDefault();
}, false);


let badlinks = [
    "/qnegative/negative1.html",
    "/qnegative/negative2.html",
    "/qnegative/negative3.html",
    "/qnegative/negative4.html",
    "/qnegative/negative5.html",
    "/qnegative/negative6.html",
    "/qnegative/negative7.html",
    "/qnegative/negative8.html",
    "/qnegative/negative9.html",
    "/qnegative/negative10.html",
    "/unhapending/gameover.html",
];

const randombad = Math.floor(Math.random() * badlinks.length);

console.log(randombad, badlinks [randombad]);

let goodlinks = [
    "/qpositive/positive1.html",
    "/qpositive/positive2.html",
    "/qpositive/positive3.html",
    "/qpositive/positive4.html",
    "/qpositive/positive5.html",
    "/qpositive/positive6.html",
    "/qpositive/positive7.html",
    "/qpositive/positive8.html",
    "/qpositive/positive9.html",
    "/qpositive/positive10.html",
    "/hapending/youwin.html",
];

let endings = [
    "/hapending/youwin.html",
    "/unhapending/gameover.html",
];

const randend = Math.floor(Math.random() * endings.length);

console.log(randend, endings [randend]);


const randomgood = Math.floor(Math.random() * goodlinks.length);

console.log(randomgood, goodlinks[randomgood]);

let mainlinks = badlinks.concat(goodlinks);
const rando = Math.floor(Math.random() * mainlinks.length);
console.log(rando, mainlinks[rando]);

const butset1 = document.querySelector("#choice1")

const butset2 = document.querySelector("#choice2")

const butset3 = document.querySelector("#choice3")

const butset4 = document.querySelector("#choice4")

const stbtton = document.querySelector("#start1")

const btnarray = [butset1, butset2, butset3, butset4]

butset1.addEventListener("click", gotourl);
function gotourl() {
    window.location.assign(mainlinks[rando]);
}

butset2.addEventListener("click", gotourl);
function gotourl() {
    window.location.assign(mainlinks[rando]);
}  

butset3.addEventListener("click", gotourl);
function gotourl() {
    window.location.assign(mainlinks[rando]);
}

butset4.addEventListener("click", gotourl);
function gotourl() {
    window.location.assign(mainlinks[rando]);
}






stbtton.addEventListener("click", hott);
function hott() {
    let beat = new Audio/Sound/start.wav;
    beat.play();
}


    btnarray.addEventListener('click', trackButtonClick);
function trackButtonClick() {
    let clickcount = 0;
    let button = btnarray; 
    clickcount++;
    if (clickcount> 7) {
        window.location.assign(endings[randend]);

    }
}







/*


const randombad = Math.floor(Math.random() * badlinks.length);

const randend = Math.floor(Math.random() * endings.length);

const randomgood = Math.floor(Math.random() * goodlinks.length);

let mainlinks = badlinks.concat(goodlinks);

const rando = Math.floor(Math.random() * mainlinks.length);


const butset1 = document.querySelector("#choice1")

const butset2 = document.querySelector("#choice2")

const butset3 = document.querySelector("#choice3")

const butset4 = document.querySelector("#choice4")

const stbtton = document.querySelector("#start1")

const btnarray = [butset1, butset2, butset3, butset4]

let clickCount = 0
let maxClicks = 7


function gotourl() {
    clickCount++;
  if (clickCount <= maxClicks) {
    window.location.assign(mainlinks[rando]);
}else {
window.location.assign(endings[randend]);
}}



butset1.addEventListener("click", gotourl);
butset2.addEventListener("click", gotourl);
butset3.addEventListener("click", gotourl);
butset4.addEventListener("click", gotourl);




console.log(clickCount);







/*
const endings = [
    "/hapending/youwin.html",
    "/unhapending/gameover.html",
];

const randend = Math.floor(Math.random() * endings.length);
const mainlinks = badlinks.concat(goodlinks);

const buttons = [
  document.querySelector("#choice1"),
  document.querySelector("#choice2"),
  document.querySelector("#choice3"),
  document.querySelector("#choice4"),
];

const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;
const maxClicks = 8;

function gotourl() {
  window.location.assign(mainlinks[Math.floor(Math.random() * mainlinks.length)]);
}

function trackButtonClick() {
  clickCount++;
  clickCountElement.textContent = clickCount;

  if (clickCount >= maxClicks) {
    window.location.assign(endings[randend]);
  } else {
    gotourl();
  }
}

buttons.forEach(button => button.addEventListener('click', trackButtonClick));


/*


const randombad = Math.floor(Math.random() * badlinks.length);

const randend = Math.floor(Math.random() * endings.length);

const randomgood = Math.floor(Math.random() * goodlinks.length);

let mainlinks = badlinks.concat(goodlinks);

const rando = Math.floor(Math.random() * mainlinks.length);


const butset1 = document.querySelector("#choice1")

const butset2 = document.querySelector("#choice2")

const butset3 = document.querySelector("#choice3")

const butset4 = document.querySelector("#choice4")

const stbtton = document.querySelector("#start1")

const btnarray = [butset1, butset2, butset3, butset4]

let clickCount = 0
let maxClicks = 7


function gotourl() {
    clickCount++;
  if (clickCount <= maxClicks) {
    window.location.assign(mainlinks[rando]);
}else {
window.location.assign(endings[randend]);
}}



butset1.addEventListener("click", gotourl);
butset2.addEventListener("click", gotourl);
butset3.addEventListener("click", gotourl);
butset4.addEventListener("click", gotourl);




console.log(clickCount);














const audio1 = document.getElementById('classical');

document.getElementById('mute').addEventListener('click', function (e)
{
  e = e || window;
  audio1.muted = !audio1.muted;
  e.preventDefault();
}, false);

const audio2 = document.getElementById('qmusic');

document.getElementById('mute').addEventListener('click', function (e)
{
  e = e || window;
  audio2.muted = !audio2.muted;
  e.preventDefault();
}, false);

const audio3 = document.getElementById('lqmusic');

document.getElementById('mute').addEventListener('click', function (e)
{
  e = e || window;
  audio3.muted = !audio3.muted;
  e.preventDefault();
}, false);





const audio1 = document.getElementById('classical');
const audio2 = document.getElementById('qmusic');
const audio3 = document.getElementById('lqmusic');
const muteButton = document.getElementById('mute');
let clickCount = 0;
const maxClicks = 8;
const countElement = document.getElementById('clickCount');



let badlinks = [
  "/qnegative/negative1.html",
  "/qnegative/negative2.html",
  "/qnegative/negative3.html",
  "/qnegative/negative4.html",
  "/qnegative/negative5.html",
  "/qnegative/negative6.html",
  "/qnegative/negative7.html",
  "/qnegative/negative8.html",
  "/qnegative/negative9.html",
  "/qnegative/negative10.html",
   
];


let goodlinks = [
  "/qpositive/positive1.html",
  "/qpositive/positive2.html",
  "/qpositive/positive3.html",
  "/qpositive/positive4.html",
  "/qpositive/positive5.html",
  "/qpositive/positive6.html",
  "/qpositive/positive7.html",
  "/qpositive/positive8.html",
  "/qpositive/positive9.html",
  "/qpositive/positive10.html",
];

let endings = [
  "/hapending/youwin.html",
  "/unhapending/gameover.html",
];


const randend = Math.floor(Math.random() * endings.length);
const mainlinks = badlinks.concat(goodlinks);

const buttons = [
  document.querySelector("#choice1"),
  document.querySelector("#choice2"),
  document.querySelector("#choice3"),
  document.querySelector("#choice4"),
];

muteButton.addEventListener('click', function (e) {
  e = e || window;
  audio1.muted = !audio1.muted;
  audio2.muted = !audio2.muted;
  audio3.muted = !audio3.muted;
  e.preventDefault();
}, false);

function gotourl() {
  window.location.assign(mainlinks[Math.floor(Math.random() * mainlinks.length)]);
}

function trackButtonClick() {
  clickCount++;
  countElement.textContent = clickCount;
  console.log(clickCount)

  if (countElement !== null) {
    countElement.textContent = clickCount;
  }
  if (clickCount >= maxClicks) {
    window.location.assign(endings[randend]);
  } else {
    gotourl();
  }
}

buttons.forEach(button => button.addEventListener('click', trackButtonClick));










const randombad = Math.floor(Math.random() * badlinks.length);

console.log(clickCount);

const randend = Math.floor(Math.random() * endings.length);

const mainlinks = badlinks.concat(goodlinks);

const buttons = [
    document.querySelector("#choice1"),
    document.querySelector("#choice2"),
    document.querySelector("#choice3"),
    document.querySelector("#choice4")
];

const startButton = document.querySelector("#start1");



function gotourl() {
    window.location.assign(mainlinks[Math.floor(Math.random() * mainlinks.length)]);
}

function trackButtonClick() {
    clickCount++;
    

    if (clickCount >= maxClicks) {
        window.location.assign(endings[randend]);
    } else {
        gotourl();
    }
}

countElement.innerHTML = clickCount;

buttons.forEach(button => button.addEventListener('click', trackButtonClick));






const audio1 = document.getElementById('classical');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window;
    audio1.muted = !audio1.muted;
    e.preventDefault();
}, false);

const audio2 = document.getElementById('qmusic');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window;
    audio2.muted = !audio2.muted;
    e.preventDefault();
}, false);

const audio3 = document.getElementById('lqmusic');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window;
    audio3.muted = !audio3.muted;
    e.preventDefault();
}, false);



let badlinks = [
    "/qnegative/negative1.html",
    "/qnegative/negative2.html",
    // ... (other negative links)
];

let goodlinks = [
    "/qpositive/positive1.html",
    "/qpositive/positive2.html",
    // ... (other positive links)
];

let endings = [
    "/hapending/youwin.html",
    "/unhapending/gameover.html",
];

const randend = Math.floor(Math.random() * endings.length);

let mainlinks = badlinks.concat(goodlinks);

const butset1 = document.querySelector("#choice1");
const butset2 = document.querySelector("#choice2");
const butset3 = document.querySelector("#choice3");
const butset4 = document.querySelector("#choice4");
const btnarray = [butset1, butset2, butset3, butset4];

let clickCount = 0;
const maxClicks = 8;
const countElement = document.getElementById('clickCount');

document.addEventListener('DOMContentLoaded', function () {

function gotourl() {
    window.location.assign(mainlinks[Math.floor(Math.random() * mainlinks.length)]);
}

for (const button of btnarray) {
    button.addEventListener('click', function() {
        clickCount++;
        countElement.textContent = clickCount;
        trackButtonClick();
    });
}

function trackButtonClick() {
    if (clickCount >= maxClicks) {
        window.location.assign(endings[randend]);
    } else {
        const rando = Math.floor(Math.random() * mainlinks.length);
        window.location.assign(mainlinks[rando]);
    }
}

});

/*
let badlinks = [
    "/qnegative/negative1.html",
    "/qnegative/negative2.html",
    "/qnegative/negative3.html",
    "/qnegative/negative4.html",
    "/qnegative/negative5.html",
    "/qnegative/negative6.html",
    "/qnegative/negative7.html",
    "/qnegative/negative8.html",
    "/qnegative/negative9.html",
    "/qnegative/negative10.html",
    
];


let goodlinks = [
    "/qpositive/positive1.html",
    "/qpositive/positive2.html",
    "/qpositive/positive3.html",
    "/qpositive/positive4.html",
    "/qpositive/positive5.html",
    "/qpositive/positive6.html",
    "/qpositive/positive7.html",
    "/qpositive/positive8.html",
    "/qpositive/positive9.html",
    "/qpositive/positive10.html",
];


let endings = [
    "/hapending/youwin.html",
    "/unhapending/gameover.html",
];


const randend = Math.floor(Math.random() * endings.length);

let mainlinks = badlinks.concat(goodlinks);

const rando = Math.floor(Math.random() * mainlinks.length);



const butset1 = document.querySelector("#choice1")

const butset2 = document.querySelector("#choice2")

const butset3 = document.querySelector("#choice3")

const butset4 = document.querySelector("#choice4")

const stbtton = document.querySelector("#start1")

const btnarray = [butset1, butset2, butset3, butset4]


let clickCount = 0;
const maxClicks = 8; 
const countElement = document.getElementById('clickCount');

butset1.addEventListener('click', gotourl);
butset2.addEventListener('click', gotourl);
butset3.addEventListener('click', gotourl);
butset4.addEventListener('click', gotourl);

function gotourl() {
    window.location.assign(mainlinks[Math.floor(Math.random() * mainlinks.length)]);
}

const bt1 = document.getElementById('button-container1');
const bt2 = document.getElementById('button-container2');

bt1.addEventListener('click', function() {
    clickCount++;
    countElement.textContent = clickCount;
    trackButtonClick();
});

bt2.addEventListener('click', function() {
    clickCount++;
    countElement.textContent = clickCount;
    trackButtonClick();
});

function trackButtonClick() {
    if (clickCount >= maxClicks) {
        window.location.assign(endings[randend]);
    } else {
        const rando = Math.floor(Math.random() * mainlinks.length);
        window.location.assign(mainlinks[rando]);
    }
}








   

butset1.addEventListener("click", gotourl1);
function gotourl1() {
    window.location.assign(mainlinks[rando]);
}

butset2.addEventListener("click", gotourl2);
function gotourl2() {
    window.location.assign(mainlinks[rando]);
}  

butset3.addEventListener("click", gotourl3);
function gotourl3() {
    window.location.assign(mainlinks[rando]);
}

butset4.addEventListener("click", gotourl4);
function gotourl4() {
    window.location.assign(mainlinks[rando]);
}



bt1.addEventListener('click', function() {
    clickCount++;
    countElement.textContent = clickCount;
    trackButtonClick();
});

bt2.addEventListener('click', function() {
    clickCount++;
    countElement.textContent = clickCount;
    trackButtonClick();
});



function trackButtonClick() {
    
   if (clickCount >= 8) {
            window.location.assign(endings[randend]);
            
        } else {
            const rando = Math.floor(Math.random() * mainlinks.length);
            window.location.assign(mainlinks[rando]);
            
        }         
    }


*/
