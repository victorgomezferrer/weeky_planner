import AxiosConfig from "./axios"

class RestaurantService extends AxiosConfig {
  constructor() {
    super("")
  }

  async getAllRestaurants() {
    const response = await this.axios.get("/list")
    return response.data
  }

}

export default new RestaurantService()