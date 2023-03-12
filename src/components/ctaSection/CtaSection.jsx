import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ForSale from "../../pictures/forSale.jpg";
import MarketUpdate from "../../pictures/marketUpdate.jpg";
import Rental from "../../pictures/rental.jpg";

import "./CtaSection.css";

const CtaSection = () => {
  return (
    <div className="ctaSection">
      <div className="Section">
        <img alt="for sale house" src={ForSale} />
        <div className="verbiage">
          <h2> Sell for more than the house next door </h2>
          <p>
            Local Seekers Agents price your home right and make it shine online.
            Get started with a free consultation.
          </p>
          <form className="search">
            <input type="text" placeholder=" Enter your street address" />
            <button disabled>Next</button>
          </form>
        </div>
      </div>
      <div className="Section">
        <div className="verbiage">
          <h2> Your perfect rental is now on Seekers </h2>
          <p>
            Finding the apartment, condo, or house you’ll love to rent just got
            easier.
          </p>
          <form className="search">
            <input
              type="text"
              placeholder="City, Address, School, Agent, ZIP"
            />
            <button className="searchBtn" disabled>
              <AiOutlineSearch className="icon" />
            </button>
          </form>
        </div>
        <img alt="for sale house" src={Rental} />
      </div>
      <div className="Section">
        <img alt="for sale house" src={MarketUpdate} />
        <div className="verbiage">
          <h2> Get real-time market updates </h2>
          <p>
            We’re bringing you the latest on how COVID-19 is impacting the real
            estate market.
          </p>
          <button disabled>Housing News</button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
