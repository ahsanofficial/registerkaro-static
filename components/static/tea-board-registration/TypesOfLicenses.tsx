import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const TypesOfLicenses = () => {
  return (
    <div id="TypesOfLicenses">
      <p className="main-para">The following licences are issuance by the Board:</p>
      <div className="TypesOfLicenses flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. Export License : </strong>As per the Tea (Distribution & Export) Control Order, 1957, all the companies exporting tea from India need to obtain a valid export license. It is valid for a period of three years only thereafter the applicant needs to renew it. Application for an export license can be submitted by filing form A along with the prescribed fees. Moreover, a Permanent export licence can also be granted, if the the applicant fulfils the eligibility criteria of exporting, a minimum of 100,000 Kg of Tea for 3 years continuously.</p>
          <div>
            <p>Documents required for export licence:</p>
            <ol>
              <li>Form along with the applicable licence fee</li>
              <li>Copy of Importer and Exporter Code</li>
              <li>Declaration in Letter Head stating that Directors or Partners are not associated with any other company suspended by the Tea Board</li>
              <li>Letter of Authorisation by the Company</li>
              <li>Applicant’s contact details</li>
              <li>Residential address proof</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
          <p><strong>2. Distributor Licence : </strong>A Distributor License is required by a business which is engaged in the business of distribution of tea and tea products. Application for distributor’s licence can be submitted either to the Head Office or Zonal office in Form - A along with the prescribed fees. If the application is found to be complete in all aspects, the licence shall be issued within two working days. In case of an incomplete application, it may be rejected. The licence once granted is valid for a lifetime.</p>
          <div>
            <p>Documents required for Distributor’s License:</p>
            <ol>
              <li>Application along with the seal of the appropriate Proprietor or Partner or Director or any other authorised personnel</li>
              <li>Import and Export Code</li>
              <li>Details regarding the Name, Residential Address, Contact Information and E-mail of all the Proprietor or Partner or Director or any other authorised personnel attested on the company letterhead along with the company address proof.</li>
              <li>Written declaration by the applicant that there is no association of the applicant with any other Tea Based Company who have previously had their license revoked, suspended or cancelled.</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
          <p><strong>3. Tea Waste License : </strong>The Tea Waste License is issued to prevent the misuse of tea waste and ensure that they are disposed of properly. The tea waste sometimes also contains useful residues which instant tea manufacturers use. The applicant is required to submit the application along with the prescribed fees. The licence is valid until 31st December of each year and can be renewed.</p>
          <div>
            <p>Documents required for Tea Waste License:</p>
            <ol>
              <li>Application along with the date and seal of the appropriate Proprietor or Partner or Director or any other authorised personnel</li>
              <li>Copy of warehouse license</li>
              <li>Copy of the registration certificate of the manufacturing plant</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
          <p><strong>4. License for Tea Auction : </strong>No person is allowed to conduct an auction without getting registered with the Board. Only brokers who have a valid license issued by the committee can auction. An application needs to be submitted to the concerned authority through Form - G. The validity of the Broker License is 31st December of each year and can renewed.</p>
          <div>
            <p>Documents required for License for Tea Auction:</p>
            <ol>
              <li>Application along with signature, date and seal of the appropriate Proprietor or Partner or Director or any other Authorised Personnel</li>
              <li>Copy of the Certification of Incorporation along with the MoA and AoA</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
          <p><strong>5. Warehouse License : </strong>All the companies engaged in the business of exporting tea, need to obtain a warehouse licence. The applicant needs to submit an application in Form - A along with the prescribed fees. The validity of the license is of three years, and upon renewal of the license, the validity is for one year from the date of issuance. </p>
          <div>
            <p>Documents required for Warehouse Licence:</p>
            <ol>
              <li>Application along with the date and seal of the appropriate Proprietor or Partner or Director or any other Authorised Personnel</li>
              <li>Copy of the Proprietorship with notary attested with stamp paper of minimum INR 100, with the inclusion of the Name and Residential Details, if any or </li>
              <li>Registered lease deed or rent receipt</li>
              <li>Ownership details of the warehouse</li>
              <li>Map of warehouse</li>
              <li>Trade License</li>
              <li>Contact Details of Company’s Partner/Directors/Representatives</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
        </div>
        <div className="flex-3">
          <Image
            alt="Types of Licenses granted by the Tea Board"
            className="TypesOfLicenses-img w-100 Importance-img-h-100"
            height={2300}
            loading="lazy"
            src={dft}
          />
        </div>      
      </div>
    </div>
  );
};
