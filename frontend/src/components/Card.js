import { Link } from "react-router-dom"

const Card = ({ item, deleteHandler }) => {
    
    return (
        <div>
            <h3>{list.text}</h3>
            <button onClick={() => deleteHandler(item)}>Remove Item</button>
            <Link
            to={`/${item._id}`}
            >
                Alter Selection
            </Link>
        </div>
    )
}

export default Card