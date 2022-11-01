
document.querySelector('.q').onclick = myClick;

function myClick() {
    let a = document.querySelector('.i-1').value;
    console.log(a);
    document.querySelector('.out1').innerHTML = a;
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}