const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"

export const deleteItem = async (item) => {
    const response = await fetch(`${API_URL}/items/items/${item._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const json = await response.json()
    return json
}