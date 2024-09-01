import Navbar from "../components/Navbar.jsx"
import Page from "../components/PageBox.jsx"
import Footer from "../components/Footer.jsx"
import Button from "../components/Button.jsx"
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'
function About() {
  useEffect(() =>{document.title = "About | FourDev Technologies"});

  useEffect(() =>{
    Aos.init({duration: 1000,
      disable: 'phone'
    })
},[])
return(<>
<Navbar/>
<Page text="About Us" p="About "/>
<section className="about">
      <div className="about1">
        <img src="./images/About.svg" alt="" />
      </div>
      <div className="about2">
      <h3 className="abt" data-aos="fade-left">About Fourdevs</h3>
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
    <section className="choice">
    <div className="emp"></div>
    <h3 className="abt" data-aos="fade-right">Why Choose Us</h3>
    <div className="ch1">
        <h2>We Provide Best Service For <span>Social Media Marketing</span></h2>
        <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis esse consectetur similique, magnam quos saepe blanditiis. In voluptates voluptatibus temporibus autem architecto aliquam sed, fugiat voluptate excepturi pariatur alias.</p>
    </div>
    <div className="ch2">
        <img src="./images/choose.svg" alt="" />
    </div>
    </section>
    <div className="empp"></div>
    <section className="process">
      <h3 className="abt" data-aos="fade-right">Our Process</h3>
      <h1>Easy Steps To Get Your Solution</h1>
      <p className="pofprocess" data-aos="fade-left">We Provide an easy step-by-step process to our clients to ensure their success</p>
      <div className="solution">
         <div className="sol1" data-aos="fade-up">
        <div className="s1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#edeaff" d="M24 48H2c-1.1 0-2-.9-2-2V9c0-.55.45-1 1-1h40c.55 0 1 .45 1 1v11h-2V10H2v36h22v2z"/><path fill="#edeaff" d="M41 10H1c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v5c0 .55-.45 1-1 1zM2 8h38V4H2v4z"/><path fill="#edeaff" d="M16 0h2v6h-2zM8 0h2v6H8zM32 0h2v6h-2zM24 0h2v6h-2zM20 13h2v2h-2zM5 17h2v2H5zM10 17h2v2h-2zM15 17h2v2h-2zM20 17h2v2h-2zM25 17h2v2h-2zM30 17h2v2h-2zM35 17h2v2h-2zM5 21h2v2H5zM10 21h2v2h-2zM15 21h2v2h-2zM20 21h2v2h-2zM5 25h2v2H5zM10 25h2v2h-2zM15 25h2v2h-2zM5 29h2v2H5zM10 29h2v2h-2zM15 29h2v2h-2zM25 13h2v2h-2zM30 13h2v2h-2zM35 13h2v2h-2zM11 35h7v2h-7zM5 35h3v2H5zM11 40h8v2h-8zM5 40h3v2H5zM37 43h-6c-.55 0-1-.45-1-1v-4h-4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h4v-4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4h4c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-4v4c0 .55-.45 1-1 1zm-5-2h4v-4c0-.55.45-1 1-1h4v-4h-4c-.55 0-1-.45-1-1v-4h-4v4c0 .55-.45 1-1 1h-4v4h4c.55 0 1 .45 1 1v4z"/><path fill="#edeaff" d="M34 48c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14zm0-26c-6.62 0-12 5.38-12 12s5.38 12 12 12 12-5.38 12-12-5.38-12-12-12z"/></svg>
        </div>
         <h2>Book A Call</h2>
         <p>Book a call with our team and explain your problem to our team</p>
         </div>
         <div className="sol2" data-aos="fade-up">
          <div className="s2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M62 20c0-4.411-3.589-8-8-8s-8 3.589-8 8a7.976 7.976 0 0 0 2.726 6h-5.312l-6.707-6.707a.999.999 0 0 0-1.414 0l-4 4a.999.999 0 0 0 0 1.414l9 9A.996.996 0 0 0 41 34h8v7H31.868l4.964-7.445-1.664-1.109L29.465 41H27v-5a1 1 0 0 0-1-1h-8v-4c0-2.108-1.316-3.907-3.166-4.641C16.753 24.897 18 22.594 18 20c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.594 1.247 4.897 3.166 6.359C3.316 27.093 2 28.892 2 31v14c0 2.757 2.243 5 5 5v12h2V50h7v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V46a4.973 4.973 0 0 0-1.002-3H31v17h-4v2h10v-2h-4V43h7.026A4.948 4.948 0 0 0 39 46v15a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V50h7v12h2V50c2.757 0 5-2.243 5-5V31c0-2.108-1.316-3.907-3.166-4.641C60.753 24.897 62 22.594 62 20zm-14 0c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zM4 20c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm8 21v-8h-2v9a1 1 0 0 0 1 1h9c1.654 0 3 1.346 3 3v14h-5V49a1 1 0 0 0-1-1H7c-1.654 0-3-1.346-3-3V31c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3v5a1 1 0 0 0 1 1h8v4H12zm45-13c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H47a1 1 0 0 0-1 1v11h-5V46c0-1.654 1.346-3 3-3h6a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-8.586l-8-8L36 21.414l6.293 6.293A.996.996 0 0 0 43 28h14z"/><path d="M23.617 22.924a1 1 0 0 0 1.09-.217L31.414 16H42c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3H22c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h1v6c0 .404.243.77.617.924zM22 14a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H31a.996.996 0 0 0-.707.293L25 19.586V15a1 1 0 0 0-1-1h-2z"/><path d="M23 6h6v2h-6zM23 10h18v2H23zM31 6h10v2H31z"/></svg>
          </div>
          <h2>Start Consultation</h2>
         <p>Our Team analyzes your problem and tries to make possible solutions to reach desired outcomes</p>
         </div>
         <div className="sol3" data-aos="fade-up">
          <div className="s3">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M21,6h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6L13,13.6l-3.3-3.3c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0l-6,6c-0.4,0.4-0.4,1,0,1.4
	s1,0.4,1.4,0c0,0,0,0,0,0L9,12.4l3.3,3.3c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0L20,9.4V12c0,0.6,0.4,1,1,1s1-0.4,1-1V7
	C22,6.4,21.6,6,21,6z"/></svg>
          </div>
          <h2>Growth</h2>
         <p>See your growth with our program and get your desired outcomes with the help of our team</p>
         </div>
      </div>
    </section>
        <div className="empp"></div>
    <section className="consult">
        <h2 data-aos="fade-right">Need Advice For Your Social Media Marketing?</h2>
        <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae dolorem nam illo quidem deserunt nostrum illum repellat voluptatum labore excepturi doloremque nulla. Laudantium dolorum voluptate reiciendis aliquam mollitia iure?</p>
        <Button text="Contact Us"/>
    </section>
    <footer>
        <Footer/>
    </footer>
</>)
}
export default About