import React, {useState} from "react";
import Images from "./images";
import "../../assets/css/global.css";

const Alexa = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="container d-none d-lg-block">
                <div className="company-side-menu-style mt-3">
                    <div className="company-menu-header " onClick={toggleMenu}>
                        <h6>Alexa points <span className="mx-5"><img className="cnpIcon" src={Images.Upicon} alt=""/></span></h6>

                    </div>
                    {menuOpen && (
                        <div className="company-menu-options mt-3">
                            <input type="text" className="form-control" placeholder="Search sector" />
                            <div>
                                {" "}
                                <form className="checkbox-wrapper mt-3">
                                    <label>
                                        <input type="checkbox" checked />5 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />4 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />3 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />2 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />5 star
                                    </label>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Alexa;
