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
                            <h4 className="title">ERC20 Rewards Token</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">900</span>
                                </div>
                                <span className="subtitle">Non-Liquid staking rewards token</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Audited ERC20 Contract</li>
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
                            <h4 className="title">ERC Asset Token</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">2,200</span>
                                </div>
                                <span className="subtitle">Liquid back traditional ERC20 token</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> ERC20 Smart Contract</li>
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
                            <h4 className="title">ERC20 Token + DAO</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">6,500</span>
                                </div>
                                <span className="subtitle">Includes all of ERC Asset Token package plus: </span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> ERC721 DAO Membership Contract</li>
                                <li><FiCheck /> ERC721 Gated DAO voting page</li>
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
