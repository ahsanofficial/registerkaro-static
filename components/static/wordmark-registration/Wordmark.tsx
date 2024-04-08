import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/wordmark-registration/What_is_the_Eligibility_for.svg";
interface HeroProps {
    cityName: string;
}
const Wordmark = ({ cityName }: HeroProps) => {
  return (
    <div id="Wordmark">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Distinctiveness: </strong>To qualify for registration, a wordmark must be distinctive and capable of distinguishing the goods or services of one entity from others in the market. It should not be generic, descriptive, or commonly used in the concerned industry.</p>
            <p><strong>Non-Conflict with Existing Marks: </strong>Prior to application, conducting a thorough trademark search is mandatory. This search ensures that the proposed wordmark doesn’t infringe upon existing trademarks. It’s a crucial step to avoid conflicts and potential objections during the registration process.</p>
            <p><strong>Applicant’s Eligibility: </strong>Any individual, company, partnership firm, or legal entity claiming ownership of the mark can apply for registration. The applicant must provide accurate information about themselves, including name, address, and details of authorized signatories.</p>
            <p><strong>Clear Description of Goods/Services: </strong>The application must specify the goods or services associated with the wordmark. The clarity of description is essential to determine the scope of protection.</p>
            <p><strong>Use or Intent to Use: </strong>In {cityName}, an applicant can file for a trademark based on actual use of the mark or with an intention to use it. However, proof of use might be required at a later stage for registration.</p>
            <p><strong>Proper Representation of the Mark: </strong>The wordmark must be represented appropriately in the application. The representation can include the word in standard characters or a specific stylized font, but it should be clear and reproducible.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="What is the Eligibility for the Registration of Wordmark Online in {cityName}?"
            className="Wordmark-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">Understanding and adhering to these rules and prerequisites is crucial for a successful wordmark registration process in {cityName}. Any deviation or failure to comply with these requirements may lead to objections or rejection of the trademark application. Seeking guidance from trademark professionals or attorneys can ensure adherence to these prerequisites and improve the chances of a smooth registration process.</p>
    </div>
  );
};

export default Wordmark;


