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
  }
}

export default AxiosConfig;