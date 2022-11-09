document.querySelector('.bttn').onclick = myTheme;

function myTheme() {
    if (document.querySelector('.style').getAttribute('href') === '/a/light_mode.css') {
        document.querySelector('.style').href="/a/dark_mode.css";
        localStorage.setItem('style', 'dark_mode');
        } 
    else {
        document.querySelector('.style').href="/a/light_mode.css";
        localStorage.setItem('style', 'light_mode');
        }
}

document.querySelector('.y1').onclick = myChange;

function myChange() {
    let a = document.querySelector('.i1').value;
    console.log(a);
    document.querySelector('.o1').innerHTML = a;
}

document.querySelector('.y2').onclick = myCopy;

function myCopy() {
    var copyText = document.querySelector(".o1");
    copyText.select();
    document.execCommand("copy");
    copyText.value
}