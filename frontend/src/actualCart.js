import { useState } from "react"
import { addItem } from "./addItem"

const AddCart = () => {
    const [userInput, setUserInput] = useState("")

    const handler = async (e) => {
        e.preventDefault() // prevents the page from refreshing as then we will lose the state a

        // what function will run?
        let response = await addItem(userInput)
        console.log(response)
    }

    return (
        <div >
            <h1>
                add item
            </h1>
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button  type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddCart