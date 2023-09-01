import React from "react";
import {useNavigate} from "react-router-dom";
import ResComp from "./ResCompanetsHom";


const ResultList = () => {
    const navigate = useNavigate();
    return (
        <div>


            <div className="container mt-5">
                <div className="row d-flex">
                    <div className="col-lg-8"><ResComp.Adobe/></div>
                    <div className="col-lg-4"><ResComp.Tags/></div>
                    <div className="col-lg-8 mt-5 pt-5"><ResComp.DominRegistar/></div>
                    <div className="col-lg-4 mb-5 pb-3"><ResComp.Conpany/></div>
                    <div className="col-lg-8"><ResComp.Domaininformatin/></div>
                    <div className="col-lg-4"><ResComp.Color/></div>

                 <h4 className="pt-5">Similar Content</h4>
                 <div className="container d-lg-flex p-3 m-2">
                     <div className="col-lg-4 m-2 overflow-hidden"><ResComp.Adobe/></div>
                     <div className="col-lg-4 m-2 overflow-hidden"><ResComp.Adobe/></div>
                     <div className="col-lg-4 m-2  overflow-hidden"><ResComp.Adobe/></div>
                 </div>

                </div>
            </div>

        </div>

    );
};

export default ResultList;
