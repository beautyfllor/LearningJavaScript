//document.querySelector('h1').textContent='Leonid';

//let name = "Fernando"
//name = 123

//console.log(name);
//Usamos para testar o código

//Definindo o h1 com o texto pego do input
const title = document.getElementById('title');
const name = document.getElementById('name');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

function changeTitleToRed() {
    title.textContent = name.value;
    title.className = "";
    title.classList.add('red')
}
function changeTitleToBlue() {
    title.textContent = name.value;
    title.className = "";
    title.classList.add('blue')
}

function changeTitleToGreen() {
    title.textContent = name.value;
    title.className = "";
    title.classList.add('green')
}

red.addEventListener('click', changeTitleToRed);
blue.addEventListener('click', changeTitleToBlue);
green.addEventListener('click', changeTitleToGreen);