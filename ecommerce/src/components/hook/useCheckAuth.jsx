/* eslint-disable no-unused-vars */
export const setItem = (name,value) => {
    localStorage.setItem(name,value)
}

export const getItem = (name) => {
    return localStorage.getItem(name);

}