import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getItem } from "../api/getItem"

const EditItem = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState("")
    const [userInput, setUserInput] = useState("")

    const submitHandler = async () => {
        let obj = {
            
        }
    }
}