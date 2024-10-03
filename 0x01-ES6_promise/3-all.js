import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const createUserPromise = createUser();
  const uploadPhotoPromise = uploadPhoto();
  Promise.all([createUserPromise, uploadPhotoPromise])
  .then((values)=>{console.log(values[1].body, values[0].firstName, values[0].lastName)})
  .catch(console.error("Signup system offline"))
}
