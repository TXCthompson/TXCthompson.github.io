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

document.querySelector('.y1').onclick = myCode;

function myCode() {
    let a = document.querySelector('.i1').value;
    document.querySelector('.o1').innerHTML = a;
}

document.querySelector('.y2').onclick = myCopy;

function myCopy() {
    var copyText = document.getElementById("rr");
    copyText.select();
    document.execCommand("copy");
    copyText.value
}

document.querySelector('.y3').onclick = myChange;

function myChange() {
    if (document.querySelector('.all').getAttribute('href') === 'bold') {
        let a = document.querySelector('.i1').value;
        let b = '.s1 {font-family: "Times New Roman", Times, serif; font-weight: bold;}' + '\n' + ' ' + '\n' + '<p class="s1">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s1");
        c.className = 's0';
    }
    else if (document.querySelector('.all').getAttribute('href') === 'italic') {
        let a = document.querySelector('.i1').value;
        let b = '.s2 {font-family: "Times New Roman", Times, serif; font-style: italic;}' + '\n' + ' ' + '\n' + '<p class="s2">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s2");
        c.className = 's0';
    }
    else if (document.querySelector('.all').getAttribute('href') === 'bold_italic') {
        let a = document.querySelector('.i1').value;
        let b = '.s3 {font-family: "Times New Roman", Times, serif; font-style: italic; font-weight: bold;}' + '\n' + ' ' + '\n' + '<p class="s3">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s3");
        c.className = 's0';
    }
    else if (document.querySelector('.all').getAttribute('href') === 'grenze_gotisch') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch&display=swap');" + '\n' + '.s4 {font-family: "Grenze Gotisch", cursive;}' + '\n' + ' ' + '\n' + '<p class="s4">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s4");
        c.className = 's0';
    }
    else if (document.querySelector('.all').getAttribute('href') === 'noto_sans_mono') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300&display=swap');" + '\n' + '.s5 {font-family: "Noto Sans Mono", monospace;}' + '\n' + ' ' + '\n' + '<p class="s5">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s5");
        c.className = 's0';
    } 
    else if (document.querySelector('.all').getAttribute('href') === 'akaya_telivigala') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');" + '\n' + '.s6 {font-family: "Akaya Telivigala", cursive;}' + '\n' + ' ' + '\n' +  '<p class="s6">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s6");
        c.className = 's0';
    } 
    else if (document.querySelector('.all').getAttribute('href') === 'permanent_marker') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');" + '\n' + '.s7 {font-family: "Permanent Marker", cursive;}' + '\n' + ' ' + '\n' + '<p class="s6">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s7");
        c.className = 's0';
    } 
    else if (document.querySelector('.all').getAttribute('href') === 'bebas_neue') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');" + '\n' + '.s8 {font-family: "Bebas Neue", cursive;}' + '\n' + ' ' + '\n' + '<p class="s6">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s8");
        c.className = 's0';
    } 
    else if (document.querySelector('.all').getAttribute('href') === 'henny_penny') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');" + '\n' + '.s9 {font-family: "Henny Penny", cursive;}' + '\n' + ' ' + '\n' + '<p class="s6">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s9");
        c.className = 's0';
    } 
}

