import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const arr = [];
      values.forEach((element) => {
        arr.push({ status: 200, value: element });
      });
      return arr;
    })
    .catch((err) => ({ status: 100, value: err }));
}
