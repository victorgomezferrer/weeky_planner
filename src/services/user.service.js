import AxiosConfig from "./axios"

class UserService extends AxiosConfig {


    constructor() {
        super()
    }

    async likeRecipe(token, data) {
        const response = await this.axios.post(
            "/user/likeRecipe",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        console.log(response.data)
        return response.data
    }
    async dislikeRecipe(token, data) {
        const response = await this.axios.post(
            "/user/dislikeRecipe",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }
    async addIngredient(token, data) {

        const response = await this.axios.post(
            "/user/addIngredients",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        return response.data
    }
    async deleteIngredient(token, data) {
        data = { _id: data }

        const response = await this.axios.post(
            "/user/deleteIngredient",
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        return response.data
    }
}
const userService = new UserService();
export default userService;