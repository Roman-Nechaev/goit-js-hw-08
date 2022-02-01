import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onfullForm, 500));
const FEEDBACK_FORM_KEY = 'feedback-form-state';
onTextArealFormOutput();
const formData = {};

// =======  set_localStorage =========
function onfullForm(event) {
  //   formData[event.target.name] = event.target.value;
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
  // console.log(formData);
}
// =======  get_localStorage =========
function onTextArealFormOutput(event) {
  const savetForm = localStorage.getItem(FEEDBACK_FORM_KEY);
  const TextOutputPars = JSON.parse(savetForm);

  if (TextOutputPars) {
    refs.form.email.value = TextOutputPars.email || '';
    refs.form.message.value = TextOutputPars.message || '';
  }
}

// ======== ОТПАРВКА ФОРМЫ ==========
function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();

  const savedTextForm = localStorage.getItem(FEEDBACK_FORM_KEY);
  const obgForm = JSON.parse(savedTextForm);

  localStorage.removeItem(FEEDBACK_FORM_KEY);
  console.log('Отправка формы:', obgForm);
}
