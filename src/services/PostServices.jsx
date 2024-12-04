import { api } from "../api"

export const postServices = {
    getUserPosts: async (id)=>{
        const res = await api.get(`/posts?userId=${id}`)
        return res.data
    }
}