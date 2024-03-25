import AxiosConfig from "./axios"


class BasketService extends AxiosConfig {

    constructor() {
        super()
    }

    async getIngredients() {
        const response = await this.axios2.get(`shopping/ingredients`)
        return response.data
    }
}

const basketService = new BasketService();
export default basketService;