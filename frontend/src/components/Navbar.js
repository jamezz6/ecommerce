import { Link } from 'react-router-dom'
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div id='navbar'>
            <header>
                <div>
                    <header>
                        <div className="container2">
                            <div className="navbar">
                                <Link to='/'>
                                    Meals
                                </Link>
                                <Link to='/cart'>
                                    My Basket
                                </Link>
                            </div>
                        </div>
                    </header>
                </div>
            </header>
        </div>
    )
}

export default Navbar