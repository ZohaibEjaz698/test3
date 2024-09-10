import React,{useState} from "react"
import { Link } from "react-router-dom";

function Navbar() {
  const[isHover,setIsHover] = useState(false)
    function onHover(){setIsHover(true)
      const Menu = document.querySelector(".hammenu");
      const mobileMenu = document.querySelector(".mobile");
      Menu.addEventListener("click",function(){
         Menu.classList.toggle("active")
         mobileMenu.classList.toggle("active")
      })
    }

    return( <>
    <header>
        <Link className="logo" to="/"><img src="./images/FourDevs.png" alt="" /></Link>
        <nav className="nav">
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Projects">Project</Link>
           <Link to="/Services">Service</Link>
           <Link to="/Blog">Blog</Link>
           <Link to="/Contact">Contact</Link>
        </nav>
        <Link to="/Contact" className="call"><i class='bx bxs-phone-call'></i>  (+92) 321 4247 165</Link>
        <button className="hammenu" onMouseEnter={onHover}>
         <div className="bar"></div>
        </button>
     </header>
     <nav className="mobile">
     <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Projects">Project</Link>
           <Link to="/Services">Service</Link>
           <Link to="/Blog">Blog</Link>
           <Link to="/Contact">Contact</Link>
     </nav>
     </>
     )
}
export default Navbar