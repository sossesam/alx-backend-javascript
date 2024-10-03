export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    try {
      if (promise) {
        resolve({
          status: 200,
          body: 'success',
        });
    
      }
    } catch (err) {
      reject(new Error());
     
    } finally { console.log('Got a response from the API'); }
  });
}
