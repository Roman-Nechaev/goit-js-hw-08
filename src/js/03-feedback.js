import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const FEEDBACK_FORM_KEY = 'feedback-form-state'; // /хранилише для мыла и текста /
onTextArealFormOutput();
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', onfullForm);
refs.form.addEventListener('input', throttle(onfullForm, 500));

function onfullForm(event) {
  //   formData[event.target.name] = event.target.value;
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();

  const savedTextForm = localStorage.getItem(FEEDBACK_FORM_KEY);
  const obgForm = JSON.parse(savedTextForm);

  localStorage.removeItem(FEEDBACK_FORM_KEY);
  console.log('Отправка формы:', obgForm);
}

function onTextArealFormOutput(event) {
  localStorage.getItem(FEEDBACK_FORM_KEY);

  const savetForm = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };
  // const beeTest = JSON.parse(savetForm);
  //   const dog = JSON.parse(savetForm);

  if (savetForm) {
    refs.form.email.value = savetForm;
    refs.form.message.value = savetForm;
    console.log(savetForm);
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
