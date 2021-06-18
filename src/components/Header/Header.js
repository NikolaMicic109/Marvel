import "./Header.scss"
import logo from "../../images/logo.png"


const Header = () => {
    return (
        <div className="Header">
            <img src={logo}></img>
            <div className="all-heroes"></div>
        </div>
    )
}


export default Header