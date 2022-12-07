document.querySelector('.btn').onclick = myTheme;

function myTheme() {
    if (document.querySelector('.style').getAttribute('href') === 'css/style-light.css') {
        document.querySelector('.style').href="css/style-dark.css";
        localStorage.setItem('style', 'style-dark');
    } else {
        document.querySelector('.style').href="css/style-light.css";
        localStorage.setItem('style', 'style-light');
    }
}

document.querySelector('.button1').onclick = myCode;

function myCode() {
    let a = document.querySelector('.i1').value;
    document.querySelector('.o1').innerHTML = a;
}

document.querySelector('.button2').onclick = myCopy;

function myCopy() {
    let copyText = document.getElementById("rr");
    copyText.select();
    document.execCommand("copy");
    copyText.value;
}

document.querySelector('.button3').onclick = myChange;

function myChange() {
    if (document.querySelector('.all-blocks').getAttribute('href') === 'bold') {
        let a = document.querySelector('.i1').value;
        let b = '.s1 {font-family: "Montserrat", Times, serif; font-weight: bold;}' + '\n' + ' ' + '\n' + '<p class="s1">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s1");
        c.className = 's0';
    }
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'italic') {
        let a = document.querySelector('.i1').value;
        let b = '.s2 {font-family: "Montserrat", Times, serif; font-style: italic;}' + '\n' + ' ' + '\n' + '<p class="s2">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s2");
        c.className = 's0';
    }
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'bold_italic') {
        let a = document.querySelector('.i1').value;
        let b = '.s3 {font-family: "Montserrat", Times, serif; font-style: italic; font-weight: bold;}' + '\n' + ' ' + '\n' + '<p class="s3">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s3");
        c.className = 's0';
    }
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'grenze_gotisch') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch&display=swap');" + '\n' + '.s4 {font-family: "Grenze Gotisch", cursive;}' + '\n' + ' ' + '\n' + '<p class="s4">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s4");
        c.className = 's0';
    }
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'noto_sans_mono') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300&display=swap');" + '\n' + '.s5 {font-family: "Noto Sans Mono", monospace;}' + '\n' + ' ' + '\n' + '<p class="s5">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s5");
        c.className = 's0';
    } 
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'akaya_telivigala') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');" + '\n' + '.s6 {font-family: "Akaya Telivigala", cursive;}' + '\n' + ' ' + '\n' +  '<p class="s6">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s6");
        c.className = 's0';
    } 
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'permanent_marker') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');" + '\n' + '.s7 {font-family: "Permanent Marker", cursive;}' + '\n' + ' ' + '\n' + '<p class="s7">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s7");
        c.className = 's0';
    } 
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'bebas_neue') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');" + '\n' + '.s8 {font-family: "Bebas Neue", cursive;}' + '\n' + ' ' + '\n' + '<p class="s8">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s8");
        c.className = 's0';
    } 
    else if (document.querySelector('.all-blocks').getAttribute('href') === 'henny_penny') {
        let a = document.querySelector('.i1').value;
        let b = "@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');" + '\n' + '.s9 {font-family: "Henny Penny", cursive;}' + '\n' + ' ' + '\n' + '<p class="s9">'+ a +'</p>';
        document.querySelector('.o1').innerHTML = b;
        let c = document.querySelector(".s9");
        c.className = 's0';
    } 
}

