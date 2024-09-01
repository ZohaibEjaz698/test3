import Button from './Button.jsx'
import styles from './footer.module.css'

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
            <a href="/Services"><i class='bx bx-chevron-right'></i>Web Development</a>
            <a href="/Services"><i class='bx bx-chevron-right'></i>App Development</a>
            <a href="/Services"><i class='bx bx-chevron-right'></i>Landing Pages</a>
            <a href="/Services"><i class='bx bx-chevron-right'></i>Email Marketing</a>
            <a href="/Services"><i class='bx bx-chevron-right'></i>Seo</a>
            </div>
            <div className={styles.p1}>
            <h3>Other Pages</h3>
            <a href="/"><i class='bx bx-chevron-right'></i>Home</a>
            <a href="/About"><i class='bx bx-chevron-right'></i>About</a>
            <a href="/Services"><i class='bx bx-chevron-right'></i>Services</a>
            <a href="/Projects"><i class='bx bx-chevron-right'></i>Projects</a>
            <a href="/Contact"><i class='bx bx-chevron-right'></i>Contact</a>
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
            <a href="#" data="Instagram" className='l1'><i class='bx bxl-instagram'></i></a>
            <a href="#" data="Linkedin" className='l2'><i class='bx bxl-linkedin'></i></a>
            <a href="#" data="Facebook" className='l3'><i class='bx bxl-facebook' ></i></a>
            <a href="#" data="Twitter"className='l4' ><i class='bx bxl-twitter' ></i></a>
          </div>
            </div>
        </div>
        </>
     )
}
export default Footer