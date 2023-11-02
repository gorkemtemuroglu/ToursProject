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
    const form = new FormData();
    form.append('name', document?.getElementById('name').value);
    form.append('email', document?.getElementById('email').value);
    form.append('photo', document?.getElementById('photo').files[0]);

    updateSettings(form, 'data');
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
