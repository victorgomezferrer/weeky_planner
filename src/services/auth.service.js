import AxiosConfig from "../services/axios"

class AuthService extends AxiosConfig {
    constructor() {
        super("auth")
    }

    async signup(data) {
        const response = await this.axios.post("/signup", data)
        return response.data
    }

    async login(data) {
        const response = await this.axios.post("/login", data)
        return response.data
    }

    async getUser(token) {
        const response = await this.axios.post(
            "/verify",
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