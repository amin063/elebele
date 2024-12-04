import { api } from "../api"

export const userService = {
    getUsers: async () => {
        const res = await api.get("/users")
        console.log(res);
        return res.data
    },
    getUser: async (id) => {
        const res = await api.get(`/users/${id}`)
        return res.data
    }
}