import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";

const PortfolioThreeColumn = () => {
    return (
        <>
            <SEO title="Portfolio || KronicLabz LLC - Blockchain Development" />
            <Layout>
                <BreadcrumbOne 
                    title="Projects And Platforms We've Built"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio"
                />
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                            </div>
                            <PortfolioOne Column="col-lg-4 col-md-6 mt--30 portfolio"  />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default PortfolioThreeColumn;
