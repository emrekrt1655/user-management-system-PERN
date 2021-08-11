import './Menu.scss'
import { NavLink } from 'react-router-dom'

export default function Menu({hamburgerMenu, setHamburgerMenu}) {

    const setFalse = () => {
        setHamburgerMenu(false)
    }

    return (
        <div className={"menu " + (hamburgerMenu && 'active')}>
            <ul>
                <li onClick={()=> setFalse()}><NavLink to='/'>Home</NavLink></li>
                <li onClick={()=> setFalse()}><NavLink to="/add"> Add Customer</NavLink></li>
            </ul>
        </div>
    )
}