import AxiosConfig from "./axios"

class RecipesService extends AxiosConfig {


  constructor() {
    super()
  }

  async getRandomRecipes() {
    const response = await this.axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=e50bc045&app_key=b574867775831885724b7dc588c5e125&q=q&random=true`)
    return response.data
  }

}

export default new RecipesService()