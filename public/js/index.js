import '@babel/polyfill';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';

const logOutBtn = document.querySelector('.nav__el--logout');
const formLogin = document.querySelector('.form--login');
const userDataForm = document.querySelector('.form-user-data');
const updatePasswordForm = document.querySelector('.form-user-settings');

if (formLogin) {
  formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    // VALUES
    const email = document?.getElementById('email').value;
    const password = document?.getElementById('password').value;

    login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', function () {
    logout();
  });
}

if (userDataForm) {
  userDataForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document?.getElementById('name').value;
    const email = document?.getElementById('email').value;

    updateSettings({ name, email }, 'data');
  });
}

if (updatePasswordForm) {
  updatePasswordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const passwordCurrent = document?.getElementById('password-current').value;
    const password = document?.getElementById('password').value;
    const passwordConfirm = document?.getElementById('password-confirm').value;

    updateSettings({ passwordCurrent, password, passwordConfirm }, 'password');
  });
}
