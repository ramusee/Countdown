import { formatDuration, intervalToDuration } from 'date-fns';

const UI = {
  INPUT_DATE: document.querySelector('.form__input-date'),
  OUTPUT: document.querySelector('.output'),
  BUTTON: document.querySelector('.button'),
}

UI.BUTTON.addEventListener('click', calcDate)

function calcDate() {
  const date = UI.INPUT_DATE.value
  const dateInterval = intervalToDuration({
    start: new Date,
    end: new Date(date),
  })
  const dateFormatInterval = formatDuration(dateInterval)
  UI.OUTPUT.textContent = `Date interval:  \n ${dateFormatInterval}`
}