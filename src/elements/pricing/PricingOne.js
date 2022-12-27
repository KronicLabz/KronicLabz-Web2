import React from 'react';
import { FiCheck } from "react-icons/fi";

const PricingOne = () => {
    return (
        <div className="row row--30">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Standard Collection Drop</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">1,350</span>
                                </div>
                                <span className="subtitle">Great for traditional art and music</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Audited ERC721 Contract</li>
                                <li><FiCheck /> Contract Dashboard</li>
                                <li><FiCheck /> Minting Page</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="./contact">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Pro NFT Degen</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">2,100</span>
                                </div>
                                <span className="subtitle">Great for web3 businesses</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> ERC721A Smart Contract</li>
                                <li><FiCheck /> DEEP Dive Security Audit Report</li>
                                <li><FiCheck /> Project Github Page</li>
                                <li><FiCheck /> Minting Dapp</li>
                                <li><FiCheck /> Custom Contract Dashboard</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="./contact">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Alpha NFT Drop</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">5,100</span>
                                </div>
                                <span className="subtitle">Includes all of Pro NFT Degen package plus:</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Stakable ERC721A</li>
                                <li><FiCheck /> NFT Staking Contract</li>
                                <li><FiCheck /> Staking Dapp</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="./contact">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}
        </div>
    )
}
export default PricingOne;
