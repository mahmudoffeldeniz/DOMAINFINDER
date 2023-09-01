import React, { useState } from 'react';
import '../../assets/css/main.css'
function App() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTextClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const texts = [
        ' Domain Information',
        ' Registrant Contact',
        ' Administrative Contact',
        ' Administrative Contact'
    ];

    return (
        <div className="border border-1 p-2">
            <span><b>Who is</b></span>
        <div className="custom-container">
            {texts.map((text, index) => (
                <div
                    key={index}
                    className={`text-box ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleTextClick(index)}
                >
                    {text}
                </div>
            ))}
        </div>
       <div className="d-lg-flex  p-5">
           <div className="col-lg-4 col-12">
               Domain: <br/>
               Registrar: <br/>
               Registered On: <br/>
               Expires On: <br/>
               Updated On: <br/>
               Status: <br/>


               <div className="mt-5">Name Servers:</div>

           </div>


           <div className="col-lg-4 col-12">
               adobe.com <br/>
               Nom-iq Ltd. dba COM LAUDE <br/>
               1986-11-17 <br/>
               2022-05-17 <br/>
               2021-04-17 <br/>
               clientUpdateProhibited <br/>
               serverDeleteProhibited <br/>
               serverTransferProhibited <br/>
               serverUpdateProhibited <br/>
               a1-217.akam.net <br/>
               a10-64.akam.net <br/>
               a13-65.akam.net <br/>
               a26-66.akam.net <br/>
               a28-67.akam.net <br/>
               a7-64.akam.net <br/>
               adobe-dns-01.adobe.com <br/>
               adobe-dns-03.adobe.com <br/>
               adobe-dns-04.adobe.com <br/>
               adobe-dns-05.adobe.com <br/>









           </div>
       </div>

        </div>
    );
}

export default App;
