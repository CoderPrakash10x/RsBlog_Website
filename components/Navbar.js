import Link from "next/link";
import Styles from '../styles/Navbar.module.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const togglemenu = ()=>setMenuOpen(!MenuOpen);
  return (
    <>
        <nav className={Styles.nav}>
                <div className={Styles.logo}>
                    SRBLOGS
                </div>
                <div className={Styles.hamburger} onClick={togglemenu}>
                    {MenuOpen ? <GiCrossMark /> :<FaBarsStaggered />}
                    </div>
                <div className={`${Styles.links} ${ MenuOpen ? Styles.active : ""}`}>
                    <ul>
                        <li onClick={() => setMenuOpen(false)}><Link href ="/">Home</Link></li>
                        <li onClick={() => setMenuOpen(false)}><Link href ="/about">About</Link></li>
                        <li onClick={() => setMenuOpen(false)}><Link href ="/blogs">Blogs</Link></li>
                        <li onClick={() => setMenuOpen(false)}><Link href ="/contact">Contact</Link></li>
                    </ul>
                </div>
        </nav>
    </>
  )
}
