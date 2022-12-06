import Notiflix from 'notiflix';

function getRefs() {
  return {
    form: document.querySelector('.form'),
    delay: document.querySelector('[name="delay"]'),
    step: document.querySelector('[name="step"]'),
    amount: document.querySelector('[name="amount"]'),
    btnSubmit: document.querySelector('button[type="submit"]'),
  };
}
const refs = getRefs();

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  const { delay, amount, step } = adoptFormData(formData);
  timeOutForPromice({ delay, amount, step });
});

function createPromise({ position, delays }) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delays });
      } else {
        reject({ position, delays });
      }
    }, delays);
  });
}

function adoptFormData(formData) {
  const form = {};
  formData.forEach((value, name) => {
    form[name] = value;
  });
  return form;
}

function timeOutForPromice({ delay, amount, step }) {
  let delays = Number(delay);
  const amounts = Number(amount);
  const steps = Number(step);

  for (let position = 1; position <= amounts; position += 1) {
    createPromise({ position, delays })
      .then(({ position, delays }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delays} ms`
        )
      )
      .catch(({ position, delays }) =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delays} ms`
        )
      );
    delays += steps;
  }
}
