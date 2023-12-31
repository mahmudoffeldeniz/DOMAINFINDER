import React from "react";
import {useNavigate} from "react-router-dom";
import '../../assets/css/adobe.css'
import Images from "./images";
const ResultList = () => {
    const navigate = useNavigate();

    return (
        <div>

            <div className="search-result-card similar-content-design rounded-2 p-5 w-100 border border-1">
                <div className="search-result-header-wrapper ">
                    <div className="result-first-part">
                        <div className="result-logo">
                           <span><img className="p-2 pb-3" src={Images.Bese} alt=""/></span>
                            <span className="bg-info w-25">Adobe</span>
                            <div className="result-second-part" >
                     <span className="local-rating text-info d-none d-lg-block ">
                        </span>
                        <span className="local-rating text-info test">

                            <b>3.5</b>
                            <p>Local rating</p>
                        </span>
                      <span className="text-info global-rating test1 d-none ">
                            <b>5.0</b>
                            <p>Global rating</p>
                        </span>
                            </div>
                        </div>
                        <p className="text-info">https://www.adobe.com</p>
                    </div>

                </div>
                <hr className="search-result-hr" />
                <div className="search-result-body">
                    <h5>
                        <span className="bg-info" >Adobe</span>: Creative, marketing and document
                        management ...
                    </h5>
                    <p>
                        <span >Adobe</span> is changing the world through digital
                        experiences. We help our customers create, deliver and optimize content and applications.
                    </p>

                        <span className="bg-light p-1 mx-2">adobe</span>
                       <span className="bg-light p-1 mx-2">design</span>
                        <span className="bg-light p-1 mx-2">creative</span>
                        <br className="d-md-block d-lg-none"/><br/>
                        <span className="bg-light p-1 mx-2">designer</span>
                        <span className="bg-light p-1 mx-2">photoshop</span>
                        <span className="bg-light p-1 mx-2">illustrator</span>

                </div>
            </div>
        </div>
    );
};

export default ResultList;
