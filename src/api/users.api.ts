import axios from "axios";
import { api_url, params } from "../environment/environment";
import { UserResponse, UsersPost } from "../types/user.types";

export const getUsers = () => {
    return axios.request<UserResponse>({
        url: `${api_url}/Options`,
        method: 'get',
        params
    }).then((res) => res.data);
}

export const creaeteUser = (data: UsersPost) => {
    return axios.request({
        url: `${api_url}/Options`,
        method: 'post',
        data,
        params
    }).then((res) => res.data);
}

export const updateUser = (data: UsersPost, id: number) => {
    return axios.request({
        url: `${api_url}/Options/${id}`,
        method: 'patch',
        data,
        params
    }).then((res) => res.data);
}

export const deleteUser = (id: number) => {
    return axios.request({
        url: `${api_url}/Options/${id}`,
        method: 'delete',
        params
    }).then((res) => res.data);
}