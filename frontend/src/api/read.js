const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"

export const read = async () => {
    let response = await fetch(`${API_URL}/items/items`)
    let data = await response.json()
    return data
}