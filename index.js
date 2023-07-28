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
];


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










