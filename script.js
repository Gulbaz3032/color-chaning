var div = document.getElementById('main');

function redColor(){
    div.classList.add('red');
    div.classList.remove('blue');
    div.classList.remove('gree');
}
function blueColor(){
    div.classList.add('blue');
    div.classList.remove('red');
    div.classList.remove('green');
}
function greenColor(){
    div.classList.add('green');
    div.classList.remove('red');
    div.classList.remove('blue');
}