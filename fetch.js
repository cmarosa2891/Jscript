console.warn('fetch.js cargado correctamente')

const API_URL = "https://jsonplaceholder.typicode.com"

const loadUsers = async () => {
   /* const response = await fetch(`${API_URL}/users`)
    const users = await response.json()
    return users*/ // es lo mismo que la línea 11
    // error 404 : el resultado no existe

    return (await fetch(`${API_URL}/users`)).json()
}

document.addEventListener('DOMContentLoaded',async() =>{
    let users =[]
    
    try {
        users = await loadUsers()
        users = data
    } catch (e) {
        console.log(e)
    }
    console.log(users.flatMap(item =>item.email))
    console.log(users.slice(0,4))
    console.log(users.includes('Sincere@april.biz'))
})
