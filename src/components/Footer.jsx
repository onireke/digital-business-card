import home from "../images/home.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"


function Footer(){
    return(
        <div className="footer">
            <img src= {home} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
        </div>
    )
}

export default Footer