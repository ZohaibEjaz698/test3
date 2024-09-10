import Button from './Button.jsx'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

function Footer(){
     return(
        <>
        <div className={styles.upper}>
            <div className={styles.logo}>
                <img src="./images/FourDevs.png" alt="" />
            </div>
            <div className={styles.head}>
                <h1>Modern Solutions For <span>Creative Development</span></h1>
            </div>
        </div>
        <div className={styles.lower}>
        <div className={styles.p1}>
            <h3>Services</h3>
            <Link to="/Services"><i class='bx bx-chevron-right'></i>Web Development</Link>
            <Link to="/Services"><i class='bx bx-chevron-right'></i>App Development</Link>
            <Link to="/Services"><i class='bx bx-chevron-right'></i>Landing Pages</Link>
            <Link to="/Services"><i class='bx bx-chevron-right'></i>Email Marketing</Link>
            <Link to="/Services"><i class='bx bx-chevron-right'></i>Seo</Link>
            </div>
            <div className={styles.p1}>
            <h3>Other Pages</h3>
            <Link to="/"><i class='bx bx-chevron-right'></i>Home</Link>
            <Link to="/About"><i class='bx bx-chevron-right'></i>About</Link>
            <Link to="/Services"><i class='bx bx-chevron-right'></i>Services</Link>
            <Link to="/Projects"><i class='bx bx-chevron-right'></i>Projects</Link>
            <Link to="/Contact"><i class='bx bx-chevron-right'></i>Contact</Link>
            </div>
            <div className={styles.p2}>
            <h3>Quick Links</h3>
            <a href="#"><i class='bx bx-chevron-right'></i>Privacy Policy</a>
            <a href="#"><i class='bx bx-chevron-right'></i>Terms of Condition</a>
            <a href="#"><i class='bx bx-chevron-right'></i>Disclaimer</a>
            <a href="#"><i class='bx bx-chevron-right'></i>Credits</a>
            <a href="#"><i class='bx bx-chevron-right'></i>FAQ</a>
            </div>
            <div className={styles.p3}>
            <h3>Newsletter</h3>
            <label>
                <input type="email" placeholder='Your Email Address'/>
                <Button text="Subscribe"/>
            </label>
            <p>Get the latest News and info.</p>
          <div className={styles.social}>
            <Link to="https://www.instagram.com/fourdevsofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" data="Instagram" className='l1'><i class='bx bxl-instagram'></i></Link>
            <Link to="https://pk.linkedin.com/company/fourdevstechnologies" data="Linkedin" className='l2'><i class='bx bxl-linkedin'></i></Link>
            <Link to="https://www.facebook.com/FourDevsOfficial/?locale=hi_IN" data="Facebook" className='l3'><i class='bx bxl-facebook' ></i></Link>
            <Link to="#" data="Twitter"className='l4' ><i class='bx bxl-twitter' ></i></Link>
          </div>
            </div>
        </div>
        </>
     )
}
export default Footer