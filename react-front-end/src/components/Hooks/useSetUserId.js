
export default function useSetUserId(name, value){
    return localStorage.setItem(name,value);
}