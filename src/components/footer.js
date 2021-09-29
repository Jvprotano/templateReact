import "../components/footer.css"
import * as  FaIcons from "react-icons/fa";

function footer(){

    return(
        <>
        <div className="footer-container">
            <row id="footerText">
            <p >Sample Footer</p>
            </row>
            <row className="FooterIcons">
            <a href="http://twitter.com" className="FooterIcons"><FaIcons.FaTwitter/></a>
            <a href="http://instagram.com" className="FooterIcons"><FaIcons.FaInstagram/></a>
            <a href="http://facebook.com" className="FooterIcons"><FaIcons.FaFacebook /></a>
            <a href="http://linkedin.com" className="FooterIcons"><FaIcons.FaLinkedin/></a>
            </row>
                
        </div>
        </>
    )
}

export default footer;
