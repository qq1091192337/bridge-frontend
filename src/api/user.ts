import axios from "axios";

export type RoleType = '' | '*' | 'admin' | 'user' ;
export type RankType = '' | '未激活' | '已激活' ;
export interface UserState {
    name?: string,
    avatar?: string,
    job?: string,
    phone?: string,
    email?: string,
    role?: RoleType,
    balance?: number,
    rank?: RankType,
}
export interface LoginData {
    username: string;
    password: string;
    captcha_token: string;
}
export interface RegisterData {
    username: string;
    password: string;
    email: string;
    inviteCode: string;
}
export function getUserInfo(){
    return axios.post<UserState>('/api/user/info');
}

export function userLogin(data: LoginData) {
    return axios.post('/api/user/login', data);
}
export function userRegister(data:RegisterData)
{
    return axios.post('/api/user/register',data);
}
export function userLogout() {
    return axios.post('/api/user/logout');
}