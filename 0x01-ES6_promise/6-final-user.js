import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const arr = [];
      values.forEach((element) => {
        arr.push(element);
      });
      return arr;
    })
    .catch((err) => ({ status: 100, value: err }));
}
