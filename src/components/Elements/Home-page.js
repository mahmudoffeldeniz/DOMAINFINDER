import {Link, NavLink} from 'react-router-dom'
import Images from '../Elements/images'
import '../../assets/css/Home.css'
import React from "react";
const Homepages = () => {
    return <div>
        <div className="container">
            <daiv className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card border border-0">
                            <div className="card-body">
                                <h2 className="card-title">Use Domain Finder to find <br/> unique domains!</h2>
                                <p className="card-text mt-5">Millions of people are searching for companies, domains, meta tags, company names and etc., on Domain finder. Try today! <b>1 000 000</b> data for your search.</p>
                                <div className="mt-3 pt-5">
                                    <b  className="btn  btn-icon"><img src={Images.icon1} /> Type to search <img width="30px" src={Images.Arrow}/></b>
                                    <b  className="btn  btn-icon"><img src={Images.icon2}/> Find domains <img width="30px" src={Images.Arrow}/></b>
                                    <b  className="btn  btn-icon"><img src={Images.icon3}/> Filter them</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border border-0">
                            <div className="card-body mx-auto  mb-5 pb-5">
                                <img width="80%" src={Images.Homeimg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </daiv>
        </div>

    </div>
}
export  default  Homepages;
