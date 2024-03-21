import recipesService from "../../services/recipes.service"

const loaderRecipes = async () => {
    const recipes = await recipesService.getRandomRecipes()
    return recipes
}

export default loaderRecipes