var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
for (var i=1;i<=5;i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage)
}

    thumbBar.onclick = function (event) {
        var target = event.target;
        var adr = target.getAttribute('src');
        displayedImage.setAttribute('src', adr);
    }
    btn.onclick=function (ev) {
    var target=ev.target;
    var cl=target.getAttribute('class');
        if (cl === "dark") {
            btn.setAttribute('class', 'light');
            btn.textContent = 'Висвітлити';
            overlay.style.backgroundColor ="rgba(0,0,0,0,5)";
        }
        else {
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Затемнити';
            overlay.style.backgroundColor = "rgba(0,0,0,0)";
        }}
