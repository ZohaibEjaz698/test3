import Navbar from "../components/Navbar.jsx"
import Page from "../components/PageBox.jsx"
import Footer from "../components/Footer.jsx"
import Product from "../components/Product.jsx"
import Button from "../components/Button.jsx"
import Stats from "../components/Stats.jsx"
import { useEffect } from "react"
import CountUp from 'react-countup';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Projects() {
  useEffect(() =>{document.title = "Projects | FourDev Technologies"});

  useEffect(() =>{
    Aos.init({duration: 1000,
      disable:'phone'
    })
},[])
   return(
     <>
     <Navbar/>
     <Page text="Our Projects" p="Projects"/>
     <div className="empp"></div>
     <div className="pro">
     <h3 className="abt" data-aos="fade-left">Projects</h3>
     <h2>The Projects We Did</h2>
     <p className="pofpro" data-aos="fade-right">Here are the projects that we have done for our clients that yielded great outcomes</p>
     <div className="products" data-aos="fade-up-right">
      <Product img='./images/webdev.jpg' text="Website Development" p="A Website about a cafe "/>
      <Product img='./images/appdev.jpg' text="App Development" p="An App About a Design Studio"/>
      <Product img='./images/landingpage.jpg' text="Landing Page" p="A LandingPage for a small business"/>
    </div>
    <div className="products" data-aos="fade-up-left">
      <Product img='./images/dashboard.jpg' text="Dashboard" p="Dashboard design"/>
      <Product img='./images/appdev.jpg' text="App Development" p="An App About a Design Studio"/>
      <Product img='./images/landingpage.jpg' text="Landing Page" p="A LandingPage for a small business"/>
    </div>
     </div>
     <section className="statistics">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Our Statistics</h3>
    <h1>Why People Like Us</h1>
    <p className="pofstats" data-aos="fade-left">Professional Development Agency to provide solutions</p>
    <div className="stats" data-aos="fade-down-left">
    <Stats text={<CountUp delay={0.5} start={1000} end={8550} duration={1.5}/>} p="Successful Campaigns" img="./images/icon4.svg"/>
    <Stats text={<CountUp delay={0.5} start={200} end={550} duration={1.5}/>} p="Satisfied Clients" img="./images/icon1.svg"/>
    <Stats text={<CountUp delay={0.5} start={300} end={750} duration={1.5}/>} p="Projects Completed" img="./images/icon3.svg"/>
    <Stats text={<CountUp delay={0.5} start={20} end={85} duration={1.5}/>} p="Marketing Experts" img="./images/icon2.svg"/>
    </div>
    <Button text="Read More"/>
    </section>
     <section className="consult">
        <h2 data-aos="fade-right">Need Advice For Your Social Media Marketing?</h2>
        <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae dolorem nam illo quidem deserunt nostrum illum repellat voluptatum labore excepturi doloremque nulla. Laudantium dolorum voluptate reiciendis aliquam mollitia iure?</p>
        <Button text="Contact Us"/>
    </section>
    <footer>
        <Footer/>
    </footer>
     </>
   )
}
export default Projects