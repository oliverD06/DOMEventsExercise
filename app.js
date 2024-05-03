const button1 = document.querySelector('#one');
button1.onclick = function(){
    alert(`You clicked the first button! Congrats!`)
}

const h3 = document.querySelector(`h3`)
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`)
})

const form = document.querySelector(`form`)
form.addEventListener(`submit`, () => {
    alert(`You submitted the form! Congrats!`)
})

const darkmode = document.getElementById(`dm`)
darkmode.addEventListener(`click`, () => {
    document.body.classList.toggle(`dark-mode`)
})

const times = document.getElementById(`times`)
let clickCount = 0;

times.addEventListener(`click`, () => {
  clickCount++;
  if (clickCount === 1 || clickCount === 2) {
    alert(`You clicked the last button! Congrats!`)
  } else if (clickCount === 3) {
    alert(`OH NO! This button is NOT going to work anymore`)
    times.disabled = true;
  }
})