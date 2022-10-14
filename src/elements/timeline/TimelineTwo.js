import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "KronicKatz NFT",
        description: "Where it all started, the key to Web3. A KronicKatz NFT is your key to all the knowledge and information we've gained the hardway.",
    },
    {
        id: "2",
        title: "MetaTec",
        description: "Our Web3 school designed to help onboard safely into Web3, MetaTec has a bigger role in all of this, to help change irl learning models for the better.",
    },
    {
        id: "3",
        title: "KronicLabz",
        description: "Formed to promote the expansion of NFTs and Web3 as a whole. We make it our mission to provide any and everything needed for small creators to big companies to enter the space safely.",
    },
    {
        id: "4",
        title: "Community",
        description: "We actively encourage any community member to join in on a build if they want, to gain and retain interest in the Web3 space.",
    },
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h6 className="title">{data.title}</h6>
                            </ScrollAnimation>
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">{data.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;