const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"

export const addItem = async (item) => {
    let obj = { text: item }
    const response = await fetch(`${API_URL}/items/item`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const json = await response.json()
    return json
}