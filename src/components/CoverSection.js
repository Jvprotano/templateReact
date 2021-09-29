import { Link } from "react-router-dom";
import "../components/CoverSection.css"
import * as AiIcons  from "react-icons/ai";


function CoverSection() {
    return (
        <>
        <div className="cover-container">
            <row className="sectionImage">

            </row>
            <row className="sectionText">
                <h1 className="Title">FIRST TITLE</h1>
                <p>Subtitle goes here</p>
                <Link to="#">
                <button onClick="/#"> View All Services </button>
                </Link>
            </row>
        </div>
        
        <div className="services-container">
            <row className="Card">
            <AiIcons.AiFillAndroid className="Icons"/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </row>

            <row className="Card1">
            <AiIcons.AiFillAndroid className="Icons"/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </row>

            <row className="Card">
            <AiIcons.AiFillAndroid className="Icons"/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </row>

            <row className="Card1">
            <AiIcons.AiFillAndroid className="Icons"/>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </row>
            </div>
        </>
    )
}

export default CoverSection;