const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });
}

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Заявка отправлена';
      button.disabled = true;
      button.classList.add('button--ghost');
    }
  });
});
