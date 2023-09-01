import  React from 'react';
import Adobe from "../Elements/adobe";
import CompanySectors from "../Elements/companySectors";
import AlexaSectors from "../Elements/alexaSectors";
import Search2 from "../Elements/Search2";
import MetatagsSectors from "../Elements/metatagsSectors";
import ColorSectors from "../Elements/colorSectors";
const Home = () => {
    return <div>
<Search2/>
        <div className="filter-base container">
            <h6>FILTERS</h6>
        </div>
        <div className="container p-2 ">
            <div className="row">
                <div className="col d-flex">
                    <CompanySectors /> <Adobe/>
                </div>
            </div>
        </div>
        <div className="container p-2 ">
            <div className="row">
                <div className="col d-flex">
                    <AlexaSectors /> <Adobe/>
                </div>
            </div>
        </div>
        <div className="container p-2 ">
            <div className="row">
                <div className="col d-flex">
                    <MetatagsSectors /> <Adobe/>
                </div>
            </div>
        </div>
        <div className="container p-2 ">
            <div className="row">
                <div className="col d-flex">
                    <ColorSectors /> <Adobe/>
                </div>
            </div>
        </div>



    </div>


}

export  default  Home;
