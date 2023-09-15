import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getItem } from "../api/getItem"
<<<<<<< Updated upstream
=======
import { update } from "../api/update"
>>>>>>> Stashed changes

const EditItem = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState("")
    const [userInput, setUserInput] = useState("")

    const submitHandler = async () => {
        let obj = {
            _id: toUpdate._id,
            text: userInput
        }
        let response = await update(obj)
        console.log(response)
        alert("edited item")
    }

    useEffect(() => {
        const fetchItem = async() => {
            let data = await getItem(id)
            setToUpdate(data)
        }
        fetchItem()
    },[])
    return (
        <div>
            <h1>edit</h1>
            <h2>{toUpdate.text}</h2>
            <input
            onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default EditItem