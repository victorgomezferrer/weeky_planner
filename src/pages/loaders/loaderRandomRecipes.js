import recipesService from "../../services/recipes.service"

const loaderRandomRecipes = async () => {
    const recipes = await recipesService.getRandomRecipes()
    return recipes
}

export default loaderRandomRecipes