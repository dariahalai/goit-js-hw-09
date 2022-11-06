
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const refs = {
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]')
}
let changeBG = null;
// console.log(refs.startBtn,refs.stopBtn)



refs.startBtn.addEventListener('click', letChangeBgColor);
refs.stopBtn.addEventListener('click', stopChangeBgColor);

function letChangeBgColor(){
    changeBG = setInterval(()=>{return document.body.style.backgroundColor = getRandomHexColor() }, 1000);
    refs.startBtn.setAttribute('disabled','');

}

function stopChangeBgColor(){
    clearInterval(changeBG);
    refs.startBtn.removeAttribute('disabled');
}

