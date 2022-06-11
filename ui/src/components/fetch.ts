import axios from 'axios';
import sha1 from 'crypto-js/sha1';

export const get = (url: string | undefined, param: string) => {
  let tweets = '';
  return new Promise((resolve, reject) => {
    axios.get(url + '?username=' + param)
      .then((response) => {
        response.data.forEach((value: { [x: string]: string; }) => {
          tweets += value['full_text'];
          resolve(tweets);
        });
      })
      .catch((error) => {
        console.log(error.message);
        reject(error);
      });
  });
}

export const hash = (data: string) => {
  return sha1(data).toString();
}