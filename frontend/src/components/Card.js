//import { Link } from "react-router-dom"

const Card = ({ item, deleteHandler }) => {
    
    return (
        <div> <div className="container3"><div className="box2">
            <h3>{item.text}</h3>
            <img src= {item.image} alt = {item.text} width = "25%"></img>
             <h3>Price: £{item.price}{console.log(item.price)}</h3>
             </div></div><div className="container3">
            <button className="button" onClick={() => deleteHandler(item)}>Remove Item</button>
            </div>
            {/* <Link
            to={`/${item._id}`}
            >
                Alter Selection
            </Link> */}
        </div>
    )
}

export default Card