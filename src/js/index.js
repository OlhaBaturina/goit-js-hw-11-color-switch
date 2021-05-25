import colorsData from './colors.js';

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

let colorIntervall = null;

startRef.addEventListener('click', clickOnBtnStart);

// Рандомайзер
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Получает цвет из базы цветов
const getColor = color => colorsData[color];

// Задает на боди рандомный цвет
const randomColor = () =>
  (bodyRef.style.backgroundColor = getColor(randomIntegerFromInterval(0, colorsData.length - 1)));

// Снимает EventListener с кнопки Старт и вешает на Стоп,
// Задает значение интервалу (с рандомным цветом)
function clickOnBtnStart() {
  stopRef.addEventListener('click', clickOnBtnStop);
  startRef.removeEventListener('click', clickOnBtnStart);
  stopRef.removeAttribute('disabled', 'disabled');
  startRef.setAttribute('disabled', 'disabled');
  colorIntervall = setInterval(randomColor, 1000);
}

// Снимает EventListener с кнопки Стоп и вешает на Старт,
// очищает значение интервала
function clickOnBtnStop() {
  startRef.addEventListener('click', clickOnBtnStart);
  stopRef.removeEventListener('click', clickOnBtnStop);
  stopRef.setAttribute('disabled', 'disabled');
  startRef.removeAttribute('disabled', 'disabled');
  clearInterval(colorIntervall);
}
