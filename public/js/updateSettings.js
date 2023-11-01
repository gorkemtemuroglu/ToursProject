import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  console.log(name, email);
  try {
    const url =
      type === 'password'
        ? 'http://localhost:3000/api/v1/users/updateMyPassword'
        : 'http://localhost:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    if (res.data.status === 'succes') {
      showAlert('success', `${type.toUpperCase()} Updated in succesfully`);
    }

    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
