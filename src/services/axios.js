import axios from 'axios';

class AxiosConfig {
  constructor() {

    this.axios = axios.create(
      {
        baseURL: 'https://api.edamam.com/',
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en'
        },
      }
    );

    this.axios2 = axios.create(
      {
        baseURL: 'http://localhost:3001/api/',
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en'
        },
      }
    );
  }
}

export default AxiosConfig;