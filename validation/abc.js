const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  // Code to send form data to server or perform other actions
});

function validateForm() {
  let isValid = true;
  
  if (nameInput.value.trim() === '') {
    setError(nameInput, 'Please enter your name');
    isValid = false;
  } else {
    removeError(nameInput);
  }
  
  if (emailInput.value.trim() === '') {
    setError(emailInput, 'Please enter your email address');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    setError(emailInput, 'Please enter a valid email address');
    isValid = false;
  } else {
    removeError(emailInput);
  }
  
  if (subjectInput.value.trim() === '') {
    setError(subjectInput, 'Please enter a subject');
    isValid = false;
  } else {
    removeError(subjectInput);
  }
  
  if (messageInput.value.trim() === '') {
    setError(messageInput, 'Please enter a message');
    isValid = false;
  } else {
    removeError(messageInput);
  }
  
  return isValid;
}

function setError(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');
  
  errorText.innerText = message;
  formControl.classList.add('error');
}

function removeError(input) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');
  
  errorText.innerText = '';
  formControl.classList.remove('error');
}

function isValidEmail(email) {
  // Regex pattern to validate
}