import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../elements/logo/Logo";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];
const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterOne = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default">
                <div className="footer-top">
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterOne
