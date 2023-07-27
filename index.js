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





