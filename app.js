let enable = false

document.getElementsByClassName('symbols')[0].style.opacity = 0;
function showit()
{
    enable = !enable;
    if (enable == true) {
        document.getElementsByClassName('symbols')[0].style.animation = "500ms show ease";
        document.getElementsByClassName('showsym')[0].innerText = "Cпрятать";
        document.getElementsByClassName('symbols')[0].style.opacity = 1;
    }
    else {
        document.getElementsByClassName('symbols')[0].style.animation = "500ms hide ease";
        document.getElementsByClassName('showsym')[0].innerText = "Условные обозначения";
        document.getElementsByClassName('symbols')[0].style.opacity = 0;
    }
}
if(window.innerWidth / window.innerHeight < 16/10)
{
    document.getElementById('caution').style.opacity = 1;
}
else {
        document.getElementById('caution').style.opacity = 0;
}
window.addEventListener("resize", function() {
    if(window.innerWidth / window.innerHeight < 16/10)
{
    document.getElementById('caution').style.opacity = 1;
}
else {
        document.getElementById('caution').style.opacity = 0;
}
}, false);