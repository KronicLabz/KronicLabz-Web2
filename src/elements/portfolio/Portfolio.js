import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";



const Portfolio = () => {

    return (
        <>
            <SEO title="Portfolio || KronicLabz LLC" />
            <Layout>

                <BreadcrumbOne 
                    title="Projects, Platforms and Creators"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Portfolio"
                />
                
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Our Work"
                                            title = "These are just a few of the many projects and platforms <br /> KronicLabz has helped develop."
                                            description = ""
                                        />
                                </div>
                            </div>
                            <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--30 portfolio" />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Portfolio;
