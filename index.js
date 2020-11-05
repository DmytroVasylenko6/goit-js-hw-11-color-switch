const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const bodyEl = document.querySelector('body');
const buttonStartEl = bodyEl.querySelector('[data-action="start"]');
const buttonStopEl = bodyEl.querySelector('[data-action="stop"]');
let colorSwitchId = null;
let buttonActive = false;

buttonStartEl.addEventListener('click', onButtonStartClick);
buttonStopEl.addEventListener('click', onButtonStopClick);


function onButtonStartClick() {
    if (buttonActive) {
        return
    };
    colorSwitchId = setInterval(() => {
        const indexColor = randomIntegerFromInterval(0, colors.length - 1)
        bodyEl.style.backgroundColor = colors[indexColor]
        buttonActive = true
       console.log('hello')
    }, 1000);
    addStyleStartButton()
};

function onButtonStopClick() {
    buttonActive = false;
    clearInterval(colorSwitchId);
    addStyleStopButton();
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function addStyleStopButton() {
bodyEl.style.backgroundColor = ''
    buttonStopEl.classList.add('notactive')
    buttonStopEl.classList.remove('hover')
    
    if (buttonStartEl.classList.contains('notactive')) {
        buttonStartEl.classList.remove('notactive')
        buttonStartEl.classList.add('hover')
    }
}

function addStyleStartButton() {
     buttonStartEl.classList.add('notactive')
    buttonStartEl.classList.remove('hover')

    if (buttonStopEl.classList.contains('notactive')){
        buttonStopEl.classList.remove('notactive')
        buttonStopEl.classList.add('hover')
        
    }
}


