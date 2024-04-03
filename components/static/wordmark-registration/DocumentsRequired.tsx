import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">Several documents and information are necessary for filing a wordmark registration in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Name and Address: </strong>Complete details of the applicant, including the name, address, and nationality for individuals. For entities, the legal name, address of the principal place of business, and legal status are required.</p>
            <p><strong>Logo or Wordmark Representation: </strong>Clear representation of the wordmark in the specified format. For wordmarks, this includes the name written in standard characters or a specific font.</p>
            <p><strong>Description of Goods/Services: </strong>A detailed description specifying the goods or services the wordmark will represent, along with the relevant class or classes.</p>
            <p><strong>Power of Attorney: </strong>Sometimes required to authorize an agent or attorney to act on behalf of the applicant.</p>
            <p><strong>Proof of Claim of Priority (if applicable): </strong>In cases where priority is claimed based on an earlier filed application, supporting documents need to be provided.</p>
            <p><strong>Trademark Search Report: </strong>Although not mandatory, providing a search report indicating the availability of the wordmark strengthens the application.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="DocumentsRequired-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">Ensuring the completeness and accuracy of these documents is crucial for a successful wordmark registration process in India. Professional assistance from trademark attorneys or service providers can streamline this paperwork and improve the chances of a smooth registration process.</p>
    </div>
  );
};

export default DocumentsRequired;


