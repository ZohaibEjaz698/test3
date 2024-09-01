import Button from "../components/Button.jsx"
import Navbar from "../components/Navbar.jsx"
import Card from "../components/Card.jsx"
import Product from "../components/Product.jsx"
import Stats from "../components/Stats.jsx"
import BlogCard from "../components/BlogCard.jsx"
import Footer from "../components/Footer.jsx"
import { useEffect } from "react"
import CountUp from 'react-countup';
import { useNavigate } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTypewriter, Cursor } from "react-simple-typewriter"
function Home() {
  useEffect(() =>{document.title = "Home | FourDev Technologies"});
  
  useEffect(() =>{
       Aos.init({duration: 1000,
        disable: 'phone'
       })
  },[])

  const [text] = useTypewriter({
    words:["Wordpress Developer","Web Developer","App Developer","Email Marketer"],
    loop:{},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  const navigate = useNavigate();

return(<>
    <Navbar/>
    <div className="hero">
      <div className="part1">
        <h3 data-aos="zoom-in-right">Welcome To Fourdevs</h3>
        <h1>
        Are you looking for a &nbsp;<span>{text}</span><span style={{color: "#c51a31"}}><Cursor/></span>
        </h1>
        <p data-aos="fade-right">FourDevs Software Company Provides The Highest Quality of Web Technology, Apps and Services at Affordable Price. We Build Scalable, Robust and Reliable Apps that are Designed to fit into any Business Environment.</p>
        <button className="btn" onClick={()=>{navigate("/Contact")}}>Let's Start </button>
        <div className="sales">
          <img src="./images/s1.jpg" alt="" />
          <img src="./images/s2.jpg" alt="" />
          <img src="./images/s3.jpg" alt="" />
          <img src="./images/s4.jpg" alt="" />
          <h4>85%+ Sales Growth</h4>
        </div>
      </div>
      <div className="part2">
        <img src="./images/hero.svg" alt="" />
      </div>
    </div>
    <section className="about">
      <div className="about1">
        <img src="./images/About.svg" alt="" />
      </div>
      <div className="about2">
      <h3 className="abt " data-aos="zoom-in-left">About Fourdevs</h3>
      <h1>15 Years Of Experiences In Social Media Marketing</h1>
      <p className="p" data-aos="fade-left">With 15 years of experience in social media marketing, I have honed my skills and expertise in reaching and engaging target audiences across various platforms.</p>
       <div className="point1"> 
        <h3>Optimization Engine Rank</h3>
       <p data-aos="fade-left">The optimization engine rank is a crucial factor in determining the success of a website.</p>
      </div>
      <div className="point2">
        <h3>Listen & Engage with Followers</h3>
        <p data-aos="fade-left">It is crucial for businesses to actively listen and engage with their followers on social media</p>
      </div>
      <div className="point3">
        <h3 data-aos="fade-right">15</h3><span>yrs</span>
        <h3 data-aos="fade-right">20</h3><span>k</span>
        <h3 data-aos="fade-right">10</h3><span>k</span>
      </div>
      <div className="exp">
        <p>Experience</p>
        <p>Products</p>
        <p>Clients</p>
      </div>
      </div>
    </section>
    <section className="service">
      <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Services</h3>
    <h1>We Provide Creative Solutions For You</h1>
    <p className="pp" data-aos="fade-left">At FourDevs, we strive to provide the best service for you. Our team of dedicated professionals is committed to meeting your needs and exceeding your expectations.</p>
    <div className="cards" data-aos="fade-down-right">
      <Card imgSrc="./images/web.png" text="Website Development" p="We offer a wide range of products and services to help you build your website, app, or game."/>
      <Card imgSrc="./images/email.png" text="Email Marketing" p="Email marketing is a effective digital marketing strategy that involves sending emails to a group of individuals." />
      <Card imgSrc="./images/seo.png" text="SEO" p="SEO management is an essential part of any online marketing strategy."/>
    </div>
    <button className="btn" onClick={()=>{navigate("/Services")}}>View All Services</button>
    </section>
    <div className="empp"></div>
    <section className="project">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Our Projects</h3>
    <h2>Projects We Have Done</h2>
    <p className="ppp" data-aos="fade-left">Over the years, our team has successfully completed numerous projects that have showcased our expertise and commitment to excellence.</p>
    <div className="products" data-aos="fade-down-right">
      <Product img='./images/webdev.jpg' text="Website Development" p="A Website about a cafe "/>
      <Product img='./images/appdev.jpg' text="App Development" p="An App About a Design Studio"/>
      <Product img='./images/landingpage.jpg' text="Landing Page" p="A LandingPage for a small business"/>
    </div>
    <button className="btn" onClick={()=>{navigate("/Projects")}}>View All Projects</button>
    </section>
    <section className="statistics">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Our Statistics</h3>
    <h1>Why People Like Us</h1>
    <p className="pofstats" data-aos="fade-left">Professional Development Agency to provide solutions</p>
    <div className="stats" data-aos="fade-down-left">
    <Stats text={<CountUp delay={2} start={1000} end={8550} duration={3}/>} p="Successful Campaigns" img="./images/icon4.svg"/>
    <Stats text={<CountUp delay={2} start={200} end={550} duration={3}/>} p="Satisfied Clients" img="./images/icon1.svg"/>
    <Stats text={<CountUp delay={2} start={300} end={750} duration={3}/>} p="Projects Completed" img="./images/icon3.svg"/>
    <Stats text={<CountUp delay={2} start={20} end={85} duration={3}/>} p="Marketing Experts" img="./images/icon2.svg"/>
    </div>
    <button className="btn" onClick={()=>{navigate("/Contact")}}>Read More</button>
    </section>
    <section className="testimonials">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Testimonials</h3>
    <h1>What Clients Says About Us</h1>
    <div className="testi">
      <div className="testi1">
      <img src="./images/happy.svg" alt="" />
      </div>
      <div className="testi2">
        <img src="./images/icon6.svg" alt="" />
        <h2 data-aos="fade-down">Fantastic Job Done By FourDevs</h2>
        <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui odio beatae aliquam cupiditate nesciunt amet velit dicta deserunt libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam?</p>
        <h3>Steven Hanks</h3>
        <p>
          CEO at InfraTech
        </p>
      </div>
    </div>
    </section>
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
    <section className="blog">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Articles News</h3>
    <h2>Our Latest Blogs</h2>
    <p className="pofblog" data-aos="fade-left">Here are our latest blogs and news about whats been going on in the software development market.</p>
    <div className="post" data-aos="fade-up-left">
      <BlogCard img="./images/post-1.jpg" text="Using Meta Advantage to Simplify Your Facebook Campaigns
" p="Using Meta Advantage to Simplify Your Facebook Campaigns admin December 21st, 2023 Social Media In the vast sea of..."/>
<BlogCard img="./images/blog3.jpg" text="3 Instagram Ads Reports That Simplify Your Marketing
" p="Using Insta Advantage to Simplify Your Instagram Campaigns admin December 21st, 2023 Social Media In the vast sea of..."/>
<BlogCard img="./images/blog-2.jpg" text="TikTok Storytelling: How to Stand Out From the Crowd
" p="Using Tiktok Advantage to Simplify Your Tiktok Campaigns admin December 21st, 2023 Social Media In the vast sea of..."/>
    </div>
    </section>
    <footer>
      <Footer/>
    </footer>
</>)
}
export default Home