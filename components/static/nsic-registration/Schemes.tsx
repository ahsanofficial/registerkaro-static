import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsic-registration/Schemes_pertaining_to_NSIC.svg";

const Schemes = () => {
  return (
    <div id="Schemes">
      <p className="main-para">
        Following are certain schemes available under the NSIC Registration:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
          <p>
            <strong>Single Point Registration schemes: </strong>
            The Government of India has directed that firms registered under the
            Single Point Registration Scheme of NSIC be eligible to receive
            benefits under the “Public Procurement Policy for Micro & Small
            Enterprises (MSEs) Order 2012”.
          </p>

          <p>
            <strong>Marketing Assistance Scheme: </strong>
            Support for marketing has long been regarded as one of the most
            crucial instruments for any company’s growth. In today’s fiercely
            competitive market, it is essential for Micro, Small, and
            Medium-Sized Enterprises to survive and flourish. The National Small
            Industries Corporation has a number of programs to aid businesses in
            promoting their products and services in both domestic and
            international markets. The following is a quick description of these
            schemes:
          </p>

          <p>
            <strong>Associations and Bidding Promotion: </strong>
            When it comes to obtaining and delivering significant orders, micro
            and small businesses face a number of challenges that prevent them
            from competing on an equal footing with larger organizations. In
            order to combine in their capacity, National Small Industries
            Corporation develops consortia of MSEs that manufacture the same or
            similar product or items. In order to obtain orders for individual
            micro and small enterprises or consortiums of micro and small
            enterprises, National Small Industries Corporation submits tenders
            on their behalf. Ultimately, these orders are distributed across
            Micro and Small Businesses based on their manufacturing
            capabilities.
          </p>

          <p>
            <strong>Technology Fairs and Exhibitions: </strong>
            Annual participation in National and International Trade Fairs and
            Exhibitions by National Small Industries Corporation serves to
            highlight the key competencies of Micro and Small Enterprises in
            India and to leverage market opportunities. The National Small
            Industries Corporation provides MSEs with rents and other subsidies
            to make their participation easier. By taking part in various
            national and international events, Micro and Small Enterprises units
            get to know foreign business practices and enhance their business
            acumen.
          </p>

          <p>
            <strong>Credit Assistance: </strong>
            NSIC offers credit support to the MSEs in a varied range of areas
            such as financing raw material procurement, marketing activities,
            exporting, Bill discounting, etc. National Small Industries
            Corporation forms strategic agreements with many commercial banks to
            provide working capital and long-term financing of MSEs nationwide,
            ensuring a seamless flow of credit to MSEs. The agreement calls for
            National Small Industries Corporation to share the processing fee
            and submit loan applications from interested MSEs to the banks.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Schemes pertaining to NSIC"
            className="Schemes-img w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Schemes;
