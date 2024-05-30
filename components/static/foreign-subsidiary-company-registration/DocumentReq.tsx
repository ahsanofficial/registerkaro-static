import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Essential Documents for Registration.svg";


export const DocumentReq = () => {
  return (
    <div id="DocumentReq">
        <p className="main-para">Gathering the essential documents is a critical step in the process of registering a foreign subsidiary company in India. This comprehensive checklist ensures that all legal and regulatory requirements are met efficiently:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>For Indian and Foreign Directors/Shareholders
                <ol>
                    <li>Identification and Address Proof:
                        <ol>
                            <li>Passport (mandatory for foreign directors)</li>
                            <li>Aadhar Card (for Indian Directors)</li>
                            <li>Driving Licence</li>
                            <li>PAN Card and DIN (Director Identification Number)</li>
                        </ol>
                    </li>
                    <li>Contact Details:
                        <ol>
                            <li>Email address</li>
                            <li>Mobile Number</li>
                        </ol>
                    </li>
                    <li>Residential Proof:
                        <ol>
                            <li>Latest Bank statements (not older than 2 months)</li>
                            <li>Utility bills (such as electricity, broadband bills, etc.)</li>
                            <li>Rent agreement and obtaining No objection certificate (NOC) from the landlord  (if applicable)</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>
                For the Indian Company (Subsidiary):
                <ol>
                    <li>Proof of Proposed Place of Business:
                        <ol>
                            <li>Address Proof (Rental Agreement of Registered Office)</li>
                            <li>Utility Bill (Electricity, Telephone, etc.) not older than 2 months</li>
                            <li>NOC for use of premises as Registered Office</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>Additional Documents Required:
                <ol>
                    <li>From the Parent Company:
                        <ol>
                            <li>Certificate of registration with name and address</li>
                            <li>Board resolution authorizing registration in India</li>
                        </ol>
                    </li>
                    <li>Proposed Company Details:
                        <ol>
                            <li>Name of the proposed company</li>
                            <li>Activities the company will undertake in India</li>
                            <li>Share capital for the Indian Company</li>
                            <li>Details of shareholders and directors, ensuring at least one director is an Indian resident</li>
                        </ol>
                    </li>
                </ol>
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Essential Documents for Registration"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
