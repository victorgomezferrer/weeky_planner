import AxiosConfig from "./axios"

class UserService extends AxiosConfig {


    constructor() {
        super()
    }

    async likeRecipe(token, data) {
        const response = await this.axios.post(
            "/user/likeRecipe",
            { data },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }
    async dislikeRecipe(token, data) {
        const response = await this.axios.post(
            "/user/dislikeRecipe",
            { data },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }
    async addIngredient(token, data) {
        console.log(token, data)
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
        console.log(token, data)
        const response = await this.axios.delete(
            "/user/deleteIngredient",
            { _id: data },
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