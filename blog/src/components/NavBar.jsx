import React from 'react'
// import { Link } from "react-router-dom";
import logo from "../images/logo_light.png"
const NavBar = () => {
    const navItems = [
        {
            id: 0,
            name: "home"
        },
        {
            id: 1,
            name: "About"
        },
        {
            id: 2,
            name: "Exploare"
        },
        {
            id: 3,
            name: "productes"
        },
    ]
    return (
        <div className='w-full mx-auto bg-white'>
            <nav>
                <div id="logo" className="">
                    <a><img src={logo} alt="logo" className='w-[120px] h-[60px]' /></a>
                </div>
                <div>
                    <ul>
                        {navItems?.map((item) => {
                            return <li key={item.id}>
                                <a href="">{item.name}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
