import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state'; // /хранилише для мыла и текста /

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
// throttle(, 500)
onTextArealFormOutput();

refs.form.addEventListener('submit', onFormSubmit);

refs.input.addEventListener('input', onfullForm);

refs.form.addEventListener('input', throttle(onfullForm, 500));

const formData = {};

function onfullForm(event) {
  formData[event.target.name] = event.target.value;
  //   console.log(formData);

  const foo = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_FORM_KEY, foo);

  //   JSON.parse(FEEDBACK_FORM_KEY);
  //   JSON.stringify(savedTextForm);
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function onTextArealFormOutput(event) {
  const savedTextForm = localStorage.getItem(FEEDBACK_FORM_KEY);

  //   const beeTest = JSON.parse(savedTextForm);

  if (savedTextForm) {
    refs.input.value = savedTextForm;

    refs.textarea.value = savedTextForm;
  }
}

// function onTextInput(event) {
//   const Message = event.target.value;
//   localStorage.setItem(FEEDBACK_FORM_KEY, Message);
//   console.log(Message);
// }

// function onMailIbput(event) {
//   const UseMail = event.currentTarget.value;
//   localStorage.setItem(FEEDBACK_FORM_KEY, UseMail);
//   localStorage.removeItem(FEEDBACK_FORM_KEY);
//   console.log(UseMail);
// }
