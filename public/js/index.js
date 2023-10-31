import '@babel/polyfill';
import { login, logout } from './login';

const logOutBtn = document.querySelector('.nav__el--logout');

document.querySelector('.form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  // VALUES
  const email = document?.getElementById('email').value;
  const password = document?.getElementById('password').value;

  login(email, password);
});

if (logOutBtn) {
  logOutBtn.addEventListener('click', function () {
    logout();
  });
}
