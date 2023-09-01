import {Link, NavLink} from 'react-router-dom'
import Images from '../Elements/images'
import '../../assets/css/Home.css'
import React from "react";

const Search = () => {

    return <div>

            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row input-row  m-auto">
                                <div className="col">
                                    <div className="container d-flex justify-content-center align-items-center ">
                                        <div className="input-group  mb-3">
                                            <button className="btn dropdown-toggle border border-1"  type="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</button>
                                            <ul className="dropdown-menu">
                                                <li><span className="dropdown-item" >Only domain <input type="checkbox"/></span></li>
                                                <li><span className="dropdown-item" >Other options <input className="pt-5" type="checkbox"/></span></li>
                                            </ul>
                            <input type="text"  placeholder="Search something..." className="form-control input-search " aria-label="Text input with dropdown button"/>
                            <NavLink
                                className="nav-link btn-input " aria-label=" btn-input with  input"
                                activeClassName="active"
                                to="/Detalis">
                                <img src={Images.Searchicon} alt=""/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
                 </div>
                       </div>
                           </div>

}
export  default  Search;
