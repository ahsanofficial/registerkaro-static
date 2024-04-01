import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">For establishing a business in Saudi Arabia, you may choose one of the following company structure:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in UK"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 :Limited Liability Company:</strong> A single shareholder can create a limited liability company, the most popular legal entity for incorporation in Saudi Arabia. There can be no more than 50 shareholders on the business form. When establishing this kind of corporation, there are no capital requirements; however, the local authorities may impose one based on the particular business activity. </p>
           <p><strong>2 :Joint Stock Company:</strong> This company 's principal attributes include three directors and a minimum of two stockholders. Stockholders must meet certain nationality requirements such as one or more natural individuals or Saudi Arabian companies, including foreigners, may hold the whole joint stock company. It is capable of carrying out a range of activities. Clearance from the Saudi Ministry of Commerce is needed in order to open such a business. </p>
           <p><strong>3 :Limited Partnership:</strong> Limited partnerships are a suitable legal structure in Saudi Arabia for foreign business owners who are new to the nation and do not know the local business landscape. For lone investors wishing to establish themselves here, its structure is perfect because it requires a minimum of two members and provides a great pathway to residency. The business needs a minimum of two partners where a general member is one partner, and a limited member is the other.</p>
           <p><strong>4 :Sole Proprietorship:</strong> In Saudi Arabia, a firm with a sole proprietorship structure is one in which a single person owns and runs the company. Under this arrangement, the business owner bears all accountability for all facets of the operation, including finances, decision-making, and obligations. Although it makes setup and decision-making simpler, the owner's personal assets are not shielded from the duties and debts of the corporation. Because sole proprietorship is simple to set up and has few legal requirements, it is a popular choice for freelancers and small enterprises. </p>
           <p><strong>5 :Branch Office:</strong> In essence, a branch office is an expansion of the parent corporation that already exists. It makes it possible for foreign company owners to enter Saudi Arabia swiftly and affordably as Branch offices replicate the main company's operations and services. Although they are not allowed to trade, branch offices can advertise and bring in business for the main company. The opportunity to operate in Saudi Arabia without the need for a local partner and 100% foreign ownership are the two key advantages of establishing a branch company.</p>
           <p><strong>6 :Representative Office:</strong> A representative office is another type of business that can be founded in Saudi Arabia. When it comes to a representative office, the parent company has all control over the office and it just represents the main office operation which will probably be settled in another country.</p>
        </div>
        
      </div>
    </div>
  );
};
