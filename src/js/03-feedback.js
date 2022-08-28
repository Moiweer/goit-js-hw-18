
import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-msg'
const form = document.querySelector('.js-feedback-form');
const emailEl = document.querySelector('.js-feedback-form textarea');

const formData = {};

form.addEventListener('submit', onFormSubmit);
emailEl.addEventListener('input', throttle(onTextareaInput, 1000));
// form.addEventListener('input', e => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
// })

populateMassageOutput();

function onFormSubmit(e) {
    e.preventDefault();
    console.log('send message')
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
 }

function populateMassageOutput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
       emailEl.value = savedMessage;
   }
}
form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    console.log(formData);
    // const formDataJSON = JSON.stringify(formData);
    // console.log(formDataJSON);
})
  const formDataJSON = JSON.stringify(formData);
    console.log(formDataJSON);