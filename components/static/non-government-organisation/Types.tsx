import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are different compositions of NGOs as below:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7">
           <p><strong>1. Trust:</strong> Trust should be a public charitable trust. However, a written instrument of trust can be signed by the author and registered. A public trust is governed under Indian Trusts Act, 1882 whether relating to movable or immovable property, may be created by mere delivery of possession with a direction that the property is to be held under trust. </p>
           <p><strong>2. Society :</strong> Society is governed under Section 20 of the Societies Registration Actwhich described as charitable societies and societies established for the promotion of science, literature of the fine arts may be registered under that Act. A society registered under the said Act becomes a legal entity apart from its members. As per the provision prescribed under section 6 of the said Act, it can sue or be sued in the name of its President, Chairman, Secretary, or members of the governing body or Trustees.</p>
           <p><strong>3. Company :</strong> If the Central Government is satisfied that it is about to be formed as a limited company for promoting commerce, science, religion, charity, or any other useful object and it intends to apply its profits, if any, or other income in promoting its objects and to prohibit the payment of any dividend to its members. The provision for registration of any association is given under Section 25 of the Companies Act, 1956. In such cases, the Central Government may by license direct that the association may registered as a company with limited liability without the addition to its name of the word “Limited” or the words “Private Limited”.</p>
           
        </div>
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in Qatar"
              className="Importance-img-h-100 w-100"
              height={400}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
