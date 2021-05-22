import colorsData from './colors.js';

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

let colorIntervall;
// Напиши скрипт, который после нажатия кнопки Start,
// раз в секунду меняет цвет фона body на случайное значение
// из массива используя инлайн-стиль.
// При нажатии на кнопку Stop,
// изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено,
// кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов),
//  используй функцию randomIntegerFromInterval.
startRef.addEventListener('click', clickOnBtnStart);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getColor = color => colorsData[color];

const randomColor = () =>
  (bodyRef.style.backgroundColor = getColor(randomIntegerFromInterval(0, 5)));
// colors '#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548';

function clickOnBtnStart() {
  stopRef.addEventListener('click', clickOnBtnStop);
  startRef.removeEventListener('click', clickOnBtnStart);

  colorIntervall = setInterval(randomColor, 1000);
}

function clickOnBtnStop() {
  startRef.addEventListener('click', clickOnBtnStart);
  stopRef.removeEventListener('click', clickOnBtnStop);
  clearInterval(colorIntervall);
}
