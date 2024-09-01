import Navbar from "../components/Navbar.jsx"
import Button from "../components/Button.jsx"
import Page from "../components/PageBox.jsx"
import Footer from "../components/Footer.jsx"
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact(){
  useEffect(() =>{document.title = "Contact | FourDev Technologies"});
  useEffect(() =>{
    Aos.init({duration: 1000,
      disable:'phone'
    })
},[])
   return(
    <>
    <Navbar/>
    <Page text="Our Contacts" p="Contact"/>
    <section className="contact">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Contact Now</h3>
      <div className="cont">
      <div className="contact1">
      <h1>Have Any <span>Project</span> On Mind! <span>Contact</span> Us</h1>
      <p data-aos="fade-left">If you have any project that you want to build or you have a problem with your current project then we are happy to help you solve your problems.</p>
      <div className="info" data-aos="fade-down">
      <div className="email">
        <h4><i class='bx bx-envelope'></i>Email Us</h4>
        <p>info@fourdevs.net</p>
      </div>
      <div className="ph">
        <h4><i class='bx bx-phone'></i>Phone No.</h4>
        <p>+92 321 4247165</p>
      </div>
      </div>
     <form className="form" data-aos="fade-up">
        <input type="text"  placeholder="Your Name"/>
        <input type="number" placeholder="Your Phone No." />
        <input type="email"  placeholder="Your Email"/>
        <textarea placeholder="Your Message"></textarea>
      </form>
        <Button text="Send Now"/>
      </div>
      <div className="contact2">
        <img src="./images/contact.svg" alt="" />
      </div>
      </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.7286133691696!2d74.29910017536511!3d31.55906174522989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d1ecca90641%3A0xae971e03c919f243!2sFourDevs%20Technologies!5e0!3m2!1sen!2s!4v1724741798449!5m2!1sen!2s" width="1580" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <footer>
      <Footer/>
    </footer>
    </>
   )
}
export default Contact