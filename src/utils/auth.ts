const TOKEN_KEY = 'token';
const ADMIN_KEY='admin';
export function isLogin() {
  return !!localStorage.getItem(TOKEN_KEY);
}
export function isAdmin(){
    return !!localStorage.getItem(TOKEN_KEY) &&
        localStorage.getItem(ADMIN_KEY) === 'admin';
}
export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
    localStorage.setItem(TOKEN_KEY,token)
}
export function setAdmin(admin: string) {
    localStorage.setItem(ADMIN_KEY,admin)
}
export function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
}
