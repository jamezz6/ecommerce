import { useState } from "react"
import { addItem } from "../api/addItem"

const AddItem = () => {
    const [userInput, setUserInput] = useState("")

    const handler = async (e) => {
        e.preventDefault()
        let response = await addItem(userInput)
        console.log(response)
    }

    return (
        <div>
            <h1>
            Add Item to Basket</h1>
                <form onSubmit={handler}>
                
            <button type="submit">Add Item to Basket</button>
            </form>
        </div>
    )
}