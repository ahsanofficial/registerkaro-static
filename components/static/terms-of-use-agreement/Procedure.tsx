import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/terms-of-use-agreement/Procedure to Creating Terms of Use┬á Agreement.svg";
interface HeroProps {
    cityName: string;
}
export const Procedure = ({ cityName }: HeroProps) => {
  return (
    <div id="Procedure">
      <div className="Procedure flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Procedure to Creating Terms of Use  Agreement"
            className="Procedure-img w-100 Importance-img-h-100"
            height={1025}
            loading="lazy"
            src={dft}
          />
        </div>   
        <div className="flex-7">
          <p><strong>1. Acceptance of Terms : </strong>Explicitly state that users must agree to the terms of the Service Agreement to access and utilize the company's services. Make it clear that by using the platform or app, users consent to be bound by the terms and conditions specified in the agreement.</p>
          <p><strong>2. Platform or App Description : </strong>Offer a thorough description of the website or application users will be engaging with. Specify the platform's features, functionalities, and intended purpose.</p>
          <p><strong>3. Goods or Services Provided : </strong>Clearly outline the goods or services offered by your business via the platform or app. Provide a detailed explanation of what users can anticipate in terms of products or services.</p>
          <p><strong>4. Policies and Procedures : </strong>Describe the policies and procedures users are required to adhere to when utilizing the provided goods or services. Outline any specific rules, guidelines, or requirements users need to follow.</p>
          <p><strong>5. User Agreement Confirmation : </strong> Include a statement or checkbox for users to confirm their agreement to adhere to the terms of service. This ensures users acknowledge and accept the terms before proceeding to use the platform or app.</p>
          <p><strong>6. Activation of Agreement : </strong>Specify when the terms of the service agreement become effective. Define the circumstances under which users are obligated by the agreement, such as upon registration, account creation, or initial use of the platform or app.</p>
          <p><strong>7. Liability Limitations and Disclaimers : </strong> Incorporate clauses limiting your business's liability and offering disclaimers for any warranties or guarantees. Clearly delineate the extent and constraints of your company's accountability for any user-incurred damages or losses.</p>
          <p><strong>8. Intellectual Property and Content Ownership : </strong>Identify and designate the owners of the intellectual property and content featured on the platform or app. Specify users' rights and restrictions concerning the content, trademarks, logos, or any other intellectual property.</p>
          <p><strong>9. Privacy Policies : </strong>Furnish comprehensive details regarding your company's privacy policies and data handling procedures. Explain the collection, storage, utilization, and safeguarding of user information.</p>
          <p><strong>10. Noncompliance Consequences : </strong>Explicitly outline the consequences or penalties for users failing to comply with the terms of service. Specify potential actions, such as account suspension, termination, or legal recourse.</p>
          
        </div>
      </div>
      <p className="main-para">Customers who agree to Terms and Conditions agreements comprehend their obligations and the company's commitments. It establishes a legally binding contract between your company and its customers. The agreement ideally encompasses sections detailing your firm's service scope, payment terms, liability limitations, intellectual property rights, account termination procedures, user-generated content policies, acceptable use guidelines, and contact information. It's advisable to ensure your Terms and Conditions agreement is readily accessible to end users by publishing it in multiple locations.</p>
      <p className="main-para">RegisterKaro specialises in offering complete services relating to Terms of Use Agreements. We understand the importance of a well-crafted Terms of Use Agreement in safeguarding your business interests and ensuring compliance with legal requirements. Our team of experts specializes in drafting customized and comprehensive Terms of Use Agreements tailored to the specific needs of businesses operating in {cityName}. Join our community of 1000+ happy clients who have entrusted us to provide them with reliable and effective legal solutions. Let us help you protect your business and manage user expectations with a robust Terms of Use Agreement.</p>
      <p className="main-para">Get started with RegisterKaro today!</p>
    </div>
  );
};
