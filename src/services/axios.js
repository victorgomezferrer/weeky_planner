import axios from 'axios';

class AxiosConfig {
  constructor(path) {
    this.axios = axios.create(
      {
        baseURL: `https://api.edamam.com/api/recipes/v2`,
        header: {
          'app_id': 'e50bc045',
          'app_key': 'b574867775831885724b7dc588c5e125'
        }
      }
    );
  }
}





export default AxiosConfig;