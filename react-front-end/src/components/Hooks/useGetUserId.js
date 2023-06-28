
export default function useGetUserId(name = 'auth_token'){
    

    return localStorage.getItem(name);

}