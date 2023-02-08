import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "",
        title: "Aura NFT Exchange",
        description: "Aura is a new aged NFT marketplace designed for the growth of the space. Comprised of Aura Hub, a public NFT marketplace, and Aura PCMs (Private Community Marketplace) the goal is to give communities a one stop shop for all their minting, staking, defi and nft needs.   ",
        image: "timeline-01",
        workingStep: [
            {
                stepTitle: "No external links",
                stepDescription: "One of the key features of Aura is the ability to mint, stake, and trade NFTs all from within the same platform. No more having to leave the platform to trade your NFTs.",
            },
            {
                stepTitle: "Aura Rev Share",
                stepDescription: "10% of Aura porfits are distributed to all Aura Membership NFT holders. This is our way of making sure that the community is rewarded for their support.",
            },
        ]
    },
    {
        id: "2",
        date: "",
        title: "Rug Rescue 🛟",
        description: "Rug Rescue 🛟 is a white glove migration service provided by KronicLabz in conjunction with LordLabz, that allows communities of rugged projects to migrate their NFTs to a community owned contract.",
        image: "timeline-02",
        workingStep: [
            {
                stepTitle: "One for one swap",
                stepDescription: "Each holder gets their identical NFT in the new contract. Same token ID, metadata, traits and even rarity score!",
            },
            {
                stepTitle: "Reversable",
                stepDescription: "If at any point the need were to arise, and the community wanted to migrate back to the old contract, you can!",
            },
        ]
    },
    {
        id: "3",
        date: "",
        title: "MetaTec",
        description: "MetaTec is the Web3 education platform designed for onboarding and retention of new users. Led by the KronicKatz NFT community, MetaTec is the ivy league equivalent for Web3.",
        image: "timeline-03",
        workingStep: [
            {
                stepTitle: "New Learning Styles",
                stepDescription: "MetaTec is actively looking for potential alternative teaching methods to help improve both irl and defi education.",
            },
            {
                stepTitle: "VR Education",
                stepDescription: "One of our most exciting methods is the introduction of Virtual Reality headsets to help students learn in a more immersive way.",
            },
        ]
    },
    {
        id: "4",
        date: "",
        title: "Research and Development",
        description: "If there has been one thing to take away from our time with Web3 so far, it's that there is an astronomical potential for the space.",
        image: "timeline-04",
        workingStep: [
            {
                stepTitle: "NFT Real World Applications",
                stepDescription: "Medical records, insurance, property deeds, and even real estate are just a few of the many real world applications that NFTs can be used for. By using NFTs, we can create more secure and transparent records systems, and let's not forget the cut in consumption of paper alone.",
            },
            {
                stepTitle: "New Standards In Finance",
                stepDescription: "The finance industries have been of the most affected by the introduction of Web3. This can even make it's reach into stock issuance, CD and even savings bonds.",
            },
        ]
    },
]

const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) => (
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index) => (
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation
                                                            animateIn="fadeInUp"
                                                            animateOut="fadeInOut"
                                                            animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation
                                                            animateIn="fadeInUp"
                                                            animateOut="fadeInOut"
                                                            animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="read-morebtn">
                                            <ScrollAnimation
                                                animateIn="fadeInUp"
                                                animateOut="fadeInOut"
                                                animateOnce={true}>
                                                <a className="btn-default btn-large round" href="/contact"><span>Get Started Now</span></a>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
