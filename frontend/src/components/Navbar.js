import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div id="navbar">
            <header>
                <div>
                    <Link to="/">
                        List of Items
                    </Link>
                    <Link to="/add-item">
                        Add Item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar