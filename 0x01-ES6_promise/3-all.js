import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const createUserPromise = createUser();
  const uploadPhotoPromise = uploadPhoto();
  const display = [];
  uploadPhotoPromise.then((value) => {
    display.push(value.body);
    return createUserPromise;
  }).then((value) => {
    display.push(value.firstName);
    display.push(value.lastName);
    console.log(display.join(' '));
  });
}
