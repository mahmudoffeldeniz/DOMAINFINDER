import  React from 'react';
import Search from "../Elements/Search";
import Buttons from "../Elements/buttonsgroup";
import Homepages from "../Elements/Home-page";
const Home = () => {
    return <div>
    <div className="container mt-5 ">
        <h1 className={"text-center"}>Use Domain Finder to find unique domains!</h1>
        <p className={"text-center"}>Millions of people are searching for companies, domains, meta tags, company names and etc., on Domain finder.<br/> Try today! 1 000 000 data for your search.</p>
    </div>
        <Search/>
        <Buttons/>
        <Homepages/>
      </div>
}

export  default  Home;
