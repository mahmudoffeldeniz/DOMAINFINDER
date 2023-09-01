import React, {useState} from "react";
import "../../assets/css/global.css";
import Images from "./images";

const Metatags = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="container d-none d-lg-block">
                <div className="company-side-menu-style mt-3">
                    <div className="company-menu-header" onClick={toggleMenu}>
                        <h6>Metatags  <span className="mx-5"><img className="cnpIcon" src={Images.Upicon} alt=""/></span></h6>

                    </div>
                    {menuOpen && (
                        <div className="company-menu-options mt-3">
                            <div>
                                {" "}
                                <form className="company-input-group mt-3">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback" />
                                        <input type="text" className="form-control" placeholder="Search metatag" />
                                    </div>
                                </form>
                            </div>
                            <div>
                                {" "}
                                <form className="checkbox-wrapper mt-3">
                                    <label>
                                        <input type="checkbox" checked />
                                        Metatag 1
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Metatag 2
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Metatag 3
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Metatag 4
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Metatag 5
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

export default Metatags;
