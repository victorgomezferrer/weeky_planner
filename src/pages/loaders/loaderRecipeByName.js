import recipesService from "../../services/recipes.service"

const loaderRecipeByName = async (name) => {
    const recipes = await recipesService.getRecipeByName(name)
    return recipes
}

export default loaderRecipeByName