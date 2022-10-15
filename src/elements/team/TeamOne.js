import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'team-01',
        name: 'Dustin',
        designation: 'Founder/CEO and Lead Blockchain Developer',
        location: 'Grand Chain, IL, USA', 
        description: 'Creator and founder of KronicKatz, KronicLabz and MetaTec.',
        socialNetwork: [
            {
                icon: <FiTwitter />,
                url: 'https://twitter.com/KronicKatz'
            },
            {
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/kronickatz/'
            },
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/dustin-turska-5a604887/'
            }
        ]
       
    },
    {
        image: 'team-02',
        name: 'Lance',
        designation: 'Co-Founder/CFO and Developer',
        location: 'England, UK', 
        description: 'Chief Financial Officer, Stock and Futures Expert.',
        socialNetwork: [
            {
                icon: <FiTwitter />,
                url: 'https://twitter.com/DefiDfyn'
            },
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]
      
    },
    {
        image: 'team-03',
        name: 'Penny',
        designation: 'Co-Founder/CCO Public Relations',
        location: 'England, UK', 
        description: 'Chief Communications Officer, Public Relations and Marketing.',
        socialNetwork: [
            {
                icon: <FiTwitter />,
                url: 'https://twitter.com/money_penny_NFT'
            }
        ]
        
    },
    {
        image: 'team-04',
        name: 'Aiden',
        designation: 'Co-Founder/CTO and Lead VR Developer',
        location: 'Portland, OR, USA', 
        description: 'Chief Technology Officer, lead of VR Research and Development.',
        socialNetwork: [
            {
                icon: <FiTwitter />,
                url: 'https://twitter.com/aidenfknrich'
            }
        ]
        
    },
    {
        image: 'team-05',
        name: 'Matt',
        designation: 'Co-Founder, KronicKatz NFTs',
        location: 'Indiana, USA', 
        description: 'Co-Founder and head of project management of KronicKatz NFT project. Liaison for Phoenix Blockchain Rise of the Kronic Phoenix NFT project.',
        socialNetwork: [
            {
                icon: <FiTwitter />,
                url: 'https://twitter.com/mjkristoff'
            }
        ]
        
    },
    {
        image: 'team-06',
        name: 'AllThingsCrypto',
        designation: 'Partner KronicKatz NFTs, Owner KronicKatz AU',
        location: 'Brisbane, Queensland', 
        description: 'Partner and PR for KronicKatz, Owner / Liaison for KronicKatz AU.',
        socialNetwork: [
            {
                icon: <FiTwitter />,
                url: 'https://twitter.com/CryptoJimmybraz'
            }
        ]
        
    }
]


const TeamOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`rn-team ${teamStyle}`}>
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                    <ul className="social-icon social-default icon-naked mt--20" >
                                        {data.socialNetwork.map((social, index) =>
                                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                        )}
                                    </ul>
                                </figcaption>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamOne;
