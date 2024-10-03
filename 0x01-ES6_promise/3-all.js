import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const createUserPromise = createUser();
  const uploadPhotoPromise = uploadPhoto();
  Promise.all([createUserPromise, uploadPhotoPromise]).then((values)=>{console.log(values)})
}
