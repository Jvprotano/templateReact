import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as  FaIcons from "react-icons/fa";
import * as  GrIcons from "react-icons/gr";
import { sideBar } from "./Sidebar"
import { IconContext } from "react-icons/lib";



function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: 'fff' }}>
                <nav className="navbar"></nav>
                <div className="navbar-container">
                    <Link to='#' className='Logo'>
                        JOSÉ VINÍCIUS's TEMPLATE
                    </Link>

                    <div className='menu-icon'>
                        <Link to='#'><FaIcons.FaBars onClick={showSidebar} /></Link>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='nav-toggle'>
                            <Link to='#' className='menu-bars'>
                                <GrIcons.GrClose onClick={showSidebar} />
                            </Link>
                        </li>
                        {sideBar.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
