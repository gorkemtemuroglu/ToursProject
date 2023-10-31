import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'succes') {
      showAlert('success', 'Logged in succesfully');
    }

    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

// export const login = async (email, password) => {
//   try {
//     const response = await fetch('http://localhost:3000/api/v1/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     window.setTimeout(() => {
//       location.assign('/');
//     }, 1500);
//     const data = await response.json();
//   } catch (err) {
//     alert(err);
//   }
// };
