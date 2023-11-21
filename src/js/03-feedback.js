

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};


const fillFormFields = () => {
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageInput.value = message;
  }
};


const handleSubmit = event => {
  event.preventDefault();
  

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log('Form Data:', formData);
  

  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem(storageKey);
};


form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);


fillFormFields();
