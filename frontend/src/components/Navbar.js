import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id='navbar'>
            <header>
                <div>
                    <Link to='/'>
                        My Items
                    </Link>
                    <Link to='/add-item'>
                        add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar