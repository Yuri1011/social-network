import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "830641ed-510b-42e3-bd30-9338086d8ee0"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data);
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}