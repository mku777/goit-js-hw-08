import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {};
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (parsedData) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (parsedData) {
    email.value = parsedData.email; 
    message.value = parsedData.message;
      
  }
}

dataFromLocalStorage();
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);