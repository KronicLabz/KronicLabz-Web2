import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = () => {
    return (
            <div className="rn-splite-style">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="./images/split/nfts.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Why Web3 and NFTs?</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">The Web3 space has given birth to a new era of 
                                        digital technology that is changing the way we think about and interact 
                                        with the world. We are committed to providing the best possible service
                                        to our customers, and to the future of the Web3 space. KronicLabz is 
                                        continuously pushing the boundaries of the blockchain and NFTs in 
                                        particular as a tool that can help shape our futures. We are a team of
                                        developers, designers, engineers, mothers, and fathers, dedicated to the
                                        advancement of the Web3.
                                    </p>
                                    </ScrollAnimation>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SlpitOne
