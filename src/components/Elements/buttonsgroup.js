import {Link, NavLink} from 'react-router-dom'
import Images from '../Elements/images'
import '../../assets/css/Home.css'
import React from "react";

const Buttons = () => {

    return <div>
        <div className="container mx-auto mt-2">
            <div className="container mx-auto">
                <div className="row d-flex mx-auto">
                    <div className="col mx-auto">
                        <span className="btn  btn-home"><i>Top searches :</i></span>
                        <button className="btn btn-light btn-home" type="submit">development</button>
                        <button className="btn btn-light btn-home" type="submit">agile</button>
                        <button className="btn btn-light btn-home" type="submit">design</button>
                        <button className="btn btn-light btn-home" type="submit">finance</button>
                        <button className="btn btn-light btn-home" type="submit">startup</button>
                        <button className="btn btn-light btn-home" type="submit">delivery</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export  default  Buttons;
