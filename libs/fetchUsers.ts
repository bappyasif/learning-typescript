export const fetchUsers = async () => {
    const USERS_URL = "https://jsonplaceholder.typicode.com/users";
    const resp = await fetch(USERS_URL)
    
    if(!resp.ok) {
        throw Error("failed to fetch data")
    }

    return resp.json()
}