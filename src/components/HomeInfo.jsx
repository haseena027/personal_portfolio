import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-xhite mx-5">
            Hi, I am <span className="font-semibold">Sheik Haseena</span> 👋
        <br />
        A Software Engineer from Chennai, India
        </h1>
    ),
    2:(
        <InfoBox 
            text="Recent graduate passionate about web development, ready to offer fresh ideas and strong work ethic to a dynamic team."
            link="/about"
            btnText="Learn more"
        />
    ),
    3:(
        <InfoBox 
            text="Discover my projects where creativity meets functionality, showcasing my evolution and zeal as a front-end developer."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox 
            text="Interested in collaborating or want to learn more about my work? Feel free to reach out!"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
