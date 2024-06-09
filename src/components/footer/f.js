import em from "./em.png"
import pc from "./pc.png"
import dis from "./whatsapp.png"
import ig from "./instagram.png"
import email from "./email.png"
import { Link } from "react-router-dom"
import tw from "./twitter.png"

function Footer() {
        return (
                <div className="Footer">
                        <div className="main-footer-box ">
                                <div className="footer-box">
                                        <div className="company-footer">
                                                <p className="name" >Stray Farm</p>
                                                <p className="footer-about" >Stray Farm is a stray animal rescue shelter and an awareness organization located in New Delhi, India.</p>
                                                {/* <p className="footer-reach">Reach out to us</p>
                                                <p className="footer-about" >Get your questions answered about Stray Farm</p>
                                                <div className="footer-icons">
                                                      
                                                        <p className="footer-email" ><a href="mailto:strayfarm9@gmail.com" >strayfarm9@gmail.com</a></p>
                                                </div>
                                                <div className="footer-icons">
                                                      
                                                        <p className="footer-email" ><a href="tel:+919958613736" >+91 9958613736</a></p>
                                                </div> */}
                                        </div>
                                        <div className="second-footer">
                                                {/* <div className="">
                                                        <p className="footer-head-sub">Organization</p>
                                                        <div className="footer-menu">
                                                                <Link to="/donate">
                                                                        <p className="footer-menuItem">Donate</p>
                                                                </Link>
                                                                <Link to="/contact">
                                                                        <p className="footer-menuItem">Contact</p>
                                                                </Link>
                                                                <Link to="/about">
                                                                        <p className="footer-menuItem">About</p>
                                                                </Link>
                                                                <Link to="/reviews">
                                                                        <p className="footer-menuItem">Reviews</p>
                                                                </Link>


                                                        </div>
                                                </div>
                                                <div className="">
                                                        <p className="footer-head-sub">Help & Support</p>
                                                        <div className="footer-menu">

                                                                <Link to="/privacy-policy">
                                                                        <p className="footer-menuItem">Privacy Policy</p>
                                                                </Link>
                                                                <Link to="/terms">
                                                                        <p className="footer-menuItem">Terms & Conditions</p>
                                                                </Link>
                                                                <Link to="/refund-policy">
                                                                        <p className="footer-menuItem">Refund Policy</p>
                                                                </Link>

                                                        </div>
                                                </div> */}

                                                <div className="">
                                                        <p className="footer-reach">Reach out to us</p>
                                                        <p className="footer-about" >Get your questions answered about Stray Farm</p>
                                                        <div className="footer-icons">
                                                                {/* <img className="footer-icon" src={em} /> */}
                                                                <p className="footer-email" ><a href="mailto:strayfarm9@gmail.com" >strayfarm9@gmail.com</a></p>
                                                        </div>
                                                        <div className="footer-icons">
                                                                {/* <img className="footer-icon" src={pc} /> */}
                                                                <p className="footer-email" ><a href="tel:+919958613736" >+91 9958613736</a></p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="lower-footer">
                                        <p className="footer-lower-txt" >&copy;2022 Stray Farm  </p>
                                        <div className="lower-footer-icons">
                                                <a href="https://chat.whatsapp.com/BvZJk4O96sZDs72r62rH6y" target="blank">
                                                        <img className="lower-footer-icon" src={dis} />
                                                </a>
                                                <a href="mailto:strayfarm9@gmail.com" target="blank">
                                                        <img className="lower-footer-icon" src={email} />
                                                </a>
                                                <a href="https://instagram.com/strayfarm" target="blank">
                                                        <img className="lower-footer-icon" src={ig} />
                                                </a>


                                                <a href="https://twitter.com/stray_farm" target="blank" className="si-box">
                                                        <img className="lower-footer-icon" src={tw} />
                                                </a>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Footer;