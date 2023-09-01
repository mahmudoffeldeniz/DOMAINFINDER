import  React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/Header.css"


const Header = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/home';
    const bgColorClass = isAboutPage  ? 'Nav' : 'HEADER';
    return <div>

        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${bgColorClass}`}>
            <div className="container">
                <span className="navbar-brand" >
                    <b className="nav-item `${bgColorClass}`">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/home">
                           <span className={ `${bgColorClass}`}>DOMAINFINDER</span>
                        </NavLink>
                    </b>
                    </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse header-des" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 header-des">
                        <b className="nav-item d-menu">
                            <NavLink
                                className="nav-link "
                                to="/about">
                               <span className={ `${bgColorClass}`}>About Us</span>
                            </NavLink>
                       </b>
                        <b className="nav-item d-menu">
                            <NavLink
                                className="nav-link"
                                to="/ResultList">
                                <span className={ `${bgColorClass}`}> For Developers</span>
                            </NavLink>


                        </b>
                        <NavLink className={"nav-link d-md-block nav-mobile"} to="/about">
                          <b className={ `${bgColorClass}`}>About us</b>
                        </NavLink>
                        <b className=" d-md-block nav-mobile">For Developers</b>
                        <b className="d-md-block nav-mobile">Terms of Service</b>
                        <b className=" d-md-block nav-mobile">Privacy Policy</b>
                        <b className=" d-md-block nav-mobile" >Trust & Safety</b>
                    </ul>
                </div>

            </div>
        </nav>

    </div>
}

export  default  Header;
