import axios from 'axios';

class AxiosConfig {
  constructor() {

    this.axios = axios.create(
      {

        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en'
        },
      }
    );
  }
}

export default AxiosConfig;