import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
function Button(props) {
    const[isHover,setIsHover] = useState(false)
    function OnHover(){setIsHover(true)}
    function OnNotHover(){setIsHover(false)}
    const navigate = useNavigate();
    const btn = {
        backgroundColor: '#c51a31',
        color: '#ffffff',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '4rem',
        border: 'none',
        padding: '14px 40px',
        fontSize: '17px',
        fontWeight: '700',
        backgroundColor: isHover ? '#4dc4f1' : '#c51a31',
        cursor: 'pointer',
        transform: isHover ? 'scale(1.05)' : 'scale(1)'
    }
    return(<button style={btn} onMouseEnter={OnHover} onMouseLeave={OnNotHover} >{props.text}</button>)
}
export default Button