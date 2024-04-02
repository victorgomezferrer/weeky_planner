import AxiosConfig from "./axios"

class RecipesService extends AxiosConfig {


  constructor() {
    super()
  }

  async getRandomRecipes() {

    const response = await this.axios.get(`/axiosRecipes`)

    return response.data
  }

  async getRecipeByName(name) {
    const response = await this.axios.get(`/axiosRecipes/:${name}`)
    return response.data
  }

}
const recipesService = new RecipesService();
export default recipesService;