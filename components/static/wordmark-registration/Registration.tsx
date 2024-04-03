import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Registration = () => {
  return (
    <div id="Registration">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="Registration-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <h3>Trademark Search</h3>
          <p>
            Before applying for registration, conducting a comprehensive
            trademark search is crucial to ensure that the proposed wordmark
            isn’t already registered or similar to existing trademarks. This
            step helps in avoiding potential conflicts and rejection of the
            application.
          </p>

          <h3>Filing the Application</h3>
          <p>
            Once the trademark search is clear, the applicant can file an
            application with the Trademarks Registry. The application includes
            details such as the wordmark, the goods or services it will
            represent, the name and address of the applicant, and a statement of
            first use (if applicable).
          </p>

          <h3>Examination by the Registrar</h3>
          <p>
            The Registrar examines the application to ensure it complies with
            legal requirements. This includes verifying if the wordmark is
            distinctive, not descriptive or generic for the goods or services it
            represents. The Registrar may issue objections or requests for
            modifications at this stage.
          </p>

          <h3>Publication in Trademark Journal</h3>
          <p>
            If the Registrar finds no objections, the wordmark is published in
            the Trademark Journal for public scrutiny. This allows any
            interested party to oppose the registration within a specified
            period (usually 4 months) if they believe the mark infringes upon
            their rights.
          </p>

          <h3>Registration and Renewal</h3>
          <p>
            In the absence of opposition or successful resolution of objections,
            the Registrar proceeds to register the wordmark. The trademark
            registration is valid for ten years from the date of filing and can
            be renewed indefinitely for successive periods of ten years upon
            payment of the renewal fees.
          </p>

          <h3>Enforcement of Rights</h3>
          <p>
            Upon successful registration, the owner of the wordmark gains
            exclusive rights to use the mark for the specified goods or
            services. They can take legal action against anyone infringing upon
            these rights, including unauthorized use or counterfeiting.
          </p>
        </div>
     
      </div>
      <p className="main-para">Note: It’s essential to note that the process may vary based on the specifics of the application, and seeking legal guidance or assistance from trademark professionals or attorneys can be beneficial to navigate through the intricacies of trademark law and ensure a smoother registration process. Failure to register a wordmark can leave it vulnerable to infringement and misuse by others, potentially leading to brand dilution, confusion among consumers, and loss of market value. Therefore, securing trademark registration for a wordmark is a critical step in safeguarding intellectual property rights and maintaining a distinct brand identity in the Indian market.</p>
      <p className="main-para">The primary legislation governing wordmark registration in India is the Trade Marks Act, of 1999, and the Trade Marks Rules, of 2017. The Controller General of Patents, Designs, and Trademarks, operating under the Ministry of Commerce and Industry, oversees the registration process.

</p>
    </div>
  );
};

export default Registration;
