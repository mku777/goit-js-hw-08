import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (parsedData) {
    email.value = parsedData.value;
    message.value = parsedData.value;
  }
}

dataFromLocalStorage();
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);