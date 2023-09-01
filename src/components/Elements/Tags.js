import "../../assets/css/global.css";
import React from "react";


  const Tags =()=>{
      return <div>
          <div className="container d-none rounded-3 d-lg-block p-2 border border-1 ">
              <div className="row  p-2">
              </div>
              <h4 className="mx-2">Tags</h4>
              <div className="col">
           <button className="bg-light border-0 p-2 m-2  w-25">adobe</button><button className="p-2 w-25 bg-light border-0 m-2">design</button>
             <br/> <button className="bg-light border-0 p-2 m-2 w-25">adobe</button><button className="w-25 p-2 bg-light border-0 m-2">design</button>
              <br/> <button className="bg-light border-0 p-2 m-2 w-25">adobe</button><button className="w-25 p-2 bg-light border-0 m-2">design</button>
          </div>
          </div>
      </div>
  }

export default Tags;
