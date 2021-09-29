import "../components/OurTeamSection.css"


function CoverSection() {
    return (
        <div className="OurTeam">
        <div className="title-container">
            <row className="ourSectionText">
                <h1 id="OurTeamTitle">Our Team</h1>
                <p id="TeamDescription">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </row>
        </div>
        
        <div className="team-container">
            <div className="TeamCard">
            <row className="InfoCard">
            <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2cef726ab29158c7a7e11198/21.jpg" className="Image"/>
            <h4 id="TeamMemberName">Dr. Jessica Tailor</h4>
            <p>Dental Implant Surgeon</p>
            </row>
            </div>

            <div className="TeamCard">
            <row className="InfoCard">
            <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1badb080631b587cb5f604b3/s.jpg" className="Image"/>
            <h4 id="TeamMemberName">Dr. Brian Adam</h4>
            <p>Restorative Dentist</p>
            </row>
            </div>

            <div className="TeamCard">
            <row className="InfoCard">
            <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1e9f620815815dfdab0777c3/1.jpg" className="Image"/>
            <h4 id="TeamMemberName">Dr. Linda Feldman</h4>
            <p>Cosmetic Dental Surgeon</p>
            </row>
            </div>

            </div>
        </div>
    )
}

export default CoverSection;