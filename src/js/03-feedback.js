import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const formData = {};

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(event) {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  event.preventDefault();
  console.log(parsedData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataFromLocalStorage() {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (parsedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}

dataFromLocalStorage();
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
