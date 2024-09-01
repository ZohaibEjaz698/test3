import Navbar from "../components/Navbar.jsx"
import Page from "../components/PageBox.jsx"
import BlogCard from "../components/BlogCard.jsx"
import Footer from "../components/Footer.jsx"
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Blog(){
  useEffect(() =>{document.title = "Blog | FourDev Technologies"});

  useEffect(() =>{
    Aos.init({duration: 1000,
      disable:'phone'
    })
},[])
   return(
    <>
    <Navbar/>
    <Page text="Our Blogs" p="Blog"/>
    <div className="empp"></div>
    <section className="blogg">
      <h3 className="abt" data-aos="fade-right">Our Blogs</h3>
      <h1>Blogs We Have Posted</h1>
      <p className="pofblogg" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima.</p>
      <div className="post" data-aos="fade-down-right">
      <BlogCard img="./images/post-1.jpg" text="Using Meta Advantage to Simplify Your Facebook Campaigns
" p="Using Meta Advantage to Simplify Your Facebook Campaigns admin December 21st, 2023 Social Media In the vast sea of..."/>
<BlogCard img="./images/blog3.jpg" text="3 Instagram Ads Reports That Simplify Your Marketing
" p="Using Insta Advantage to Simplify Your Instagram Campaigns admin December 21st, 2023 Social Media In the vast sea of..."/>
<BlogCard img="./images/blog-2.jpg" text="TikTok Storytelling: How to Stand Out From the Crowd
" p="Using Tiktok Advantage to Simplify Your Tiktok Campaigns admin December 21st, 2023 Social Media In the vast sea of..."/>
    </div>
    <div className="post " data-aos="fade-up-left">
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
    </>
   )
}
export default Blog