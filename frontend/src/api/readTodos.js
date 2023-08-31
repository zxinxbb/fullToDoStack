let API_URl = "http://localhost:4000"

export const readTodos = async()=>{
    let response = await fetch (`${API_URl}/todos/items`)
    let data =  await response.json()
    return data 
}