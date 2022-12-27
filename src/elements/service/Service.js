import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import Pricing from "../pricing/Pricing";

const Service = () => {
    return (
        <>

            <SEO title="Service || KronicLabz LLC" />
            <Layout>
                <div className="main-content">

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="ERC721 / 1155 Token"
                                        title="NFT Smart Contract Development."
                                        description="Below are the standard package deal we offer. These are streamlined for quick, fast and efficient deployment. For more complex projects, please contact us for a custom quote."
                                    />
                                </div>
                            </div>
                            <Pricing />
                        </div>
                    </div>
                    {/* End Service Area  */}

                </div>

            </Layout>

        </>
    )
}

export default Service;
