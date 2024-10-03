export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    try {
      if (promise) {
        resolve({
          status: 200,
          body: 'success',
        });
        console.log('Got a response from the API');
      }
    } catch (err) {
      reject(new Error());
      console.log('Got a response from the API');
    } finally { console.log('Got a response from the API'); }
  });
}
