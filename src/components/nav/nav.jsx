import { Link, useLocation } from "react-router-dom"
import "../../global.scss"
import strayfarm from "./strayfarm.png"
import menu from "./more.png"
import cls from "./close.png"

function Nav() {

    const location = useLocation()
    const currentPath = location.pathname;
    const isAbout = currentPath == "/about"
    const isDonate = currentPath == "/donate"
    const isContact = currentPath == "/contact"
    const isfad = currentPath == "/first-aid"
    const isblogs = currentPath == "/blogs"
    const isfaq = currentPath == "/faq"
    const isMemories = currentPath == "/memories"

    const closeNav = () => {
        document.getElementById("overlayNav").style.display = "none"
    }
    const openNav = () => {
        document.getElementById("overlayNav").style.display = "flex"
    }

    return (
        <>
            <div id="overlayNav" className="overlay-nav">
                <div className="nav-box">
                    <div className="cls-box">
                        <img onClick={closeNav} className="cls" src={cls} />
                    </div>
                    <div className="nav-menu-box">
                        <Link style={{ textDecoration: 'none' }} to="/donate"><p onClick={closeNav} className={isDonate ? "menu-itemO activeM" : "menu-itemO"} >Donate</p> </Link>
                        <Link style={{ textDecoration: 'none' }} to="/about"><p onClick={closeNav} className={isAbout ? "menu-itemO activeM" : "menu-itemO"} >About</p> </Link>
                        {/* <Link style={{ textDecoration: 'none' }} to="/first-aid"><p onClick={closeNav} className={isfad ? "menu-itemO activeM" : "menu-itemO"} >First Aid</p> </Link> */}
                        <Link style={{ textDecoration: 'none' }} to="/blogs"><p onClick={closeNav} className={isblogs ? "menu-itemO activeM" : "menu-itemO"} >Blogs</p> </Link>
                        <Link style={{ textDecoration: 'none' }} to="/contact"><p onClick={closeNav} className={isContact ? "menu-itemO activeM" : "menu-itemO"} >Contact</p> </Link>
                        {/* <Link style={{ textDecoration: 'none' }} to="/faq"><p onClick={closeNav} className={isfaq ? "menu-itemO activeM" : "menu-itemO"} >FAQs</p> </Link> */}
                        {/* <Link style={{ textDecoration: 'none' }} to="/reviews"><p onClick={closeNav} className={isReviews ? "menu-itemO activeM" : "menu-itemO"} >Reviews</p> </Link> */}
                        {/* <Link style={{ textDecoration: 'none' }} to="/memories"><p onClick={closeNav} className={isMemories ? "menu-itemO activeM" : "menu-itemO"} >Memories</p> </Link> */}
                    </div>
                </div>
            </div>
            <div className="Nav">
                <div className="nav-container">
                    <div className="logo-box">
                        <Link to="/">
                            <img className="logo" src={strayfarm} />
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}> <p className="name" >Stray Farm</p></Link>
                    </div>
                    <div className="menu">
                        {/* <Link style={{ textDecoration: 'none' }} to="/gallery"><p className='menu-item' >Gallery</p> </Link> */}
                        {/* <Link style={{ textDecoration: 'none' }} to="/adoption"><p className='menu-item' >Adopt</p> </Link> */}
                        <Link style={{ textDecoration: 'none' }} to="/donate"><p name="Donation Page" className={isDonate ? "menu-item activeM" : "menu-item"} >Donate</p> </Link>
                        <Link style={{ textDecoration: 'none' }} to="/about"><p className={isAbout ? "menu-item activeM" : "menu-item"} >About</p> </Link>
                        {/* <Link style={{ textDecoration: 'none' }} to="/first-aid"><p className={isfad ? "menu-item activeM" : "menu-item"} >First Aid</p> </Link> */}
                        <Link style={{ textDecoration: 'none' }} to="/blogs"><p className={isblogs ? "menu-item activeM" : "menu-item"} >Blogs</p> </Link>
                        <Link style={{ textDecoration: 'none' }} to="/contact"><p className={isContact ? "menu-item activeM" : "menu-item"} >Contact</p> </Link>
                        {/* <Link style={{ textDecoration: 'none' }} to="/faq"><p className={isfaq ? "menu-item activeM" : "menu-item"} >FAQs</p> </Link> */}
                        {/* <Link style={{ textDecoration: 'none' }} to="/reviews"><p className={isReviews ? "menu-item activeM" : "menu-item"} >Reviews</p> </Link> */}
                        {/* <Link style={{ textDecoration: 'none' }} to="/memories"><p className={isMemories ? "menu-item activeM" : "menu-item"} >Memories</p> </Link> */}
                        <img className="menu-img" id="menuImg" onClick={openNav} src={menu} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav