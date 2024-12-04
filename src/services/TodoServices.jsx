import { api } from "../api"

export const todoServices = {
    getUserTodos: async (id)=>{
        const res = await api.get(`/todos?userId=${id}`)
        return res.data
    }
}