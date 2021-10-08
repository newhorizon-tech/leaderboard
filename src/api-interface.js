const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'Rcl2sFmCQZv9b27vyvUs';

const targetUrl = `${apiUrl}games/${gameId}/scores`;

const getData = async () => {
  const response = await fetch(targetUrl);
  return response.json();
};

const postData = async (data) => {
  const response = await fetch(targetUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export {
  getData, postData,
};
