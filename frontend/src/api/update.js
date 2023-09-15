const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"

export const update = async (item) => {

    const response = await fetch(`${API_URL}/items/items/${item._id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            text: item.text
        })
    })
    const json = await response.json()
    return json
}