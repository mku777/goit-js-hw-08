import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
let formData = {};
const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
 if (savedFormData) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
 }


 function onFormData(event) {
  formData[event.target.name] = event.target.value;
  let data = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, data);
}

function onFormSubmit(event) {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedData);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    if (parsedData.email) {
    inputEl.value = parsedData.email;
  }
  if (parsedData.message) {
    textareaEl.value = parsedData.message;
  }
  }
} 

dataFromLocalStorage();
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

