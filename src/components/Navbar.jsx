import React,{useState} from "react"

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
        <a href="/" className="logo"><img src="./images/FourDevs.png" alt="" /></a>
        <nav className="nav">
           <a href="/">Home</a>
           <a href="/About">About</a>
           <a href="/Projects">Project</a>
           <a href="/Services">Service</a>
           <a href="/Blog">Blog</a>
           <a href="/Contact">Contact</a>
        </nav>
        <a href="/Contact" className="call"><i class='bx bxs-phone-call'></i>  (+92) 321 4247 165</a>
        <button className="hammenu" onMouseEnter={onHover}>
         <div className="bar"></div>
        </button>
     </header>
     <nav className="mobile">
     <a href="/">Home</a>
           <a href="/About">About</a>
           <a href="/Projects">Project</a>
           <a href="/Services">Service</a>
           <a href="/Blog">Blog</a>
           <a href="/Contact">Contact</a>
     </nav>
     </>
     )
}
export default Navbar