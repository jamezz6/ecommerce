const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"

export const getItem = async (id) => {

    let response = await fetch(`${API_URL}/items/item/${id}`)
    let data = await response.json()
    return data
}