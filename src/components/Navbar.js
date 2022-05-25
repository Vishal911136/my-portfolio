import {NavLink} from 'react-router-dom';
import {BsFillLightbulbFill} from "react-icons/bs"
import {MdDarkMode} from "react-icons/md"

import { useState } from 'react';
const Navbar = ({dark,setDark}) =>{

    const [toggle,setToggle] = useState(true);
    return( 
        <header>
            <div className="sidebar" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color)'}}>
                <div className="logo">
                    <img src="/images/vishal.jpeg" alt="" />
                </div>
                <nav className='nav_link' style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color)'}}>
                    <li>
                     <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to='contact'>Contact</NavLink>
                    </li>
                </nav>
                <div className="dark_btn sidebar_dark_btn" onClick={() => setDark(!dark)}>
                            {dark?<MdDarkMode/>:<BsFillLightbulbFill style={{color:'#fffc35'}}/>}
                </div>
            </div>

            <div className="mobile_nav_container" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--darkbg-color)'}}>
                <div className="mobile_menu" style={dark?{background:'var(--lightbg-color)'}:{background:'var(--dark-card)'}}>
                    <div className="navleftside">
                        <img src="/images/vishal.jpeg" alt="" />
                    </div>
                    <div className="navrightside">
                        <div className={toggle?"toggle_btn":"toggle_btn opan"} onClick={() =>{
                    setToggle(!toggle);
                }}>
                            <span></span>
                            <span></span>
                            <span></span>                        
                        </div>
                        <div className="dark_btn" onClick={() => setDark(!dark)}>
                            {dark?<MdDarkMode/>:<BsFillLightbulbFill style={{color:'#fffc35'}}/>}
                        </div>
                    </div>
                </div>

                <nav className={toggle?'hide_menu':'show_menu'}>
                    <li>
                        <NavLink onClick={() =>setToggle(true)} to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() =>setToggle(true)} to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() =>setToggle(true)} to='/projects'>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() =>setToggle(true)} to='/skills'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() =>setToggle(true)} to='contact'>Contact</NavLink>
                    </li>
                </nav>
            </div>
        </header> 
    )
}
export default Navbar;