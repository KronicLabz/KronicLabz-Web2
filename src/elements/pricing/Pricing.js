import React from 'react';
import SEO from "../../common/SEO";
import SectionTitle from "../sectionTitle/SectionTitle";
import PricingOne from "./PricingOne";
import PricingTwo from "./PricingTwo";
import Separator from "../separator/Separator";


const Pricing = () => {
    return (
        <>
            <SEO title="Pricing || KronicLabz" />

            <div className="main-content">

                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <PricingOne />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40 mb_sm--0">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="ERC20 Token"
                                    title="Token Smart Contract Development"
                                    description=""
                                />
                            </div>
                        </div>
                        <PricingTwo />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricing;