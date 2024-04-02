import axios from 'axios';

class AxiosConfig {
  constructor() {

    this.axios = axios.create(
      {
        baseURL: 'http://localhost:3001/api',

      }
    );
  }
}

export default AxiosConfig;