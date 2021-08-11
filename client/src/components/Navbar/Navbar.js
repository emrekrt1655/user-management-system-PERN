import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'


const Navbar = ({hamburgerMenu, setHamburgerMenu}) => {

    const setOpen = () => {
        setHamburgerMenu(!hamburgerMenu)
    }


    return (
        <div className={'navbar ' + (hamburgerMenu && 'active')} >
        <div className="wrapper">
            <div className="left">
                <NavLink to='/' className='logo'>milon gmbh.</NavLink>
                <div className="itemContainer">
                    <span>stay fit through sport</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setOpen()}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
)
    
}

export default Navbar
