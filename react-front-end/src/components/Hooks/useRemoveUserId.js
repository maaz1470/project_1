

export default function useRemoveUserId(name = 'auth_token'){
    return localStorage.removeItem(name)
}