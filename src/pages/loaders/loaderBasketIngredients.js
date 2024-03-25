import BasketService from "../../services/basket.service"


const loaderBasketIngredients = async () => {
 
    const recipes = await BasketService.getIngredients()
    return recipes
}

export default loaderBasketIngredients