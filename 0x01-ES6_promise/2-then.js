export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    } else {
      reject(new Error({}));
    }
    console.log('Got a response from the API');
  });
}
