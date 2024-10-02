export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'photo-profile-1' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
