import AxiosConfig from "../services/axios"

class AuthService extends AxiosConfig {
    constructor() {
        super()
    }

    async signup(data) {

        const response = await this.axios.post("/auth/signup", data)
        return response.data
    }

    async login(data) {
        const response = await this.axios.post("/auth/login", data)
        return response.data
    }

    async getUser(token) {

        const response = await this.axios.post(
            "/user/allData",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        return response.data
    }
}

const authService = new AuthService()
export default authService