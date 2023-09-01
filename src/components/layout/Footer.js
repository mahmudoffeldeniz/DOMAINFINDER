import  React from 'react';
import Images from "../Elements/images";
import '../../assets/css/Footer.css'
import {useLocation} from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/home';
    const bgColorClass = isAboutPage  ? 'Nav' : 'HEADER';



    return <div>
        <footer className={`bg-body-tertiary   py-5 ${bgColorClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-2">

                        <div className="d-flex justify-content-start">
                            <img className="icons"  src={Images.Twittericon} alt="twitter"/>
                            <img className="icons"  src={Images.Facebookicon} alt="facebook"/>
                            <img className="icons"  src={Images.Linkedinicon} alt="likdein"/>

                        </div>
                    </div>
                    <div className="col-md-4 d-lg-flex d-block   justify-content-lg-start">
                        <p className="mx-2">Terms of Service</p>
                        <p className="mx-2">Privacy Policy</p>
                        <p className="mx-2">Trust & Safety</p> </div>


                    <div className="col-6">
                        <div className="d-flex justify-content-start">
                            <span className={"span"}>Language :</span>
                             <select className="form-select Language">
                                 <option value="ru">EN</option>
                                <option value="az">AZ</option>
                                <option value="tr">TR</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}

export  default  Footer;
