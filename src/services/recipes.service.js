import AxiosConfig from "./axios"

class RecipesService extends AxiosConfig {


  constructor() {
    super()
  }

  async getRandomRecipes() {
    const response = await this.axios.get(`api/recipes/v2`, {
      params: {
        'random': 'true',
        'q': 'q',
        'type': 'public',
        'app_id': 'e50bc045',
        'app_key': 'b574867775831885724b7dc588c5e125'
      }
    })
    return response.data
  }

  async getRecipeByName(name) {
    const response = await this.axios.get(`api/recipes/v2`, {
      params: {
        'q': `${name}`,
        'type': 'public',
        'app_id': 'e50bc045',
        'app_key': 'b574867775831885724b7dc588c5e125'
      }
    })
    return response.data
  }

}
const recipesService = new RecipesService();
export default recipesService;