import { useEffect, useState } from "react";
import { readItems } from "../api/readItems";
import Card from "../components/Card"
import { deleteItem } from "../api/deleteItem";

const Home = () => {
    const [items, setItems] = useState([])

    const deleteHandler = async (item) => {
        let response = await deleteItem(item)
        console.log(response)
        let updated = [...items]
        updated = updated.filter(items => items._id !== response._id)
        setItems(updated)
    }

    useEffect(() => {
        const fetchItems = async () => {
            let data = await readItems()
            setItems(data.items)
            console.log(data.message)
        }
        fetchItems()
    },[])

    if (!items) return <h1>Loading...</h1>
    return (
        <div>
            <>
            {
                items ? items.map((item) => <Card key={item._id} deleteHandler={deleteHandler} item={item}/>)
                : <p>Loading...</p>
            }
            </>
        </div>
    );
}

export default Home