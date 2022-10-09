import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

const formDataObj = {};

function onFormDataObj(event) {
    event.preventDefault();
    formDataObj[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formDataObj));
}


function onGetData (event) {
   const savedData = localStorage.getItem("feedback-form-state");
   const parsedData = JSON.parse(savedData);
}