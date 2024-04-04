import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-product-approval/Procedure_for_getting_Product_Approval_in_India.svg";

const Procedure = () => {
  return (
    <div id="Procedure">
      <p className="main-para">
        Following is the procedure for getting FSSAI product approval:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
          <h3>Company Incorporation</h3>
          <p>
            Basically, Food Product Approval is an intangible asset for any
            business or company and it gives the business with authority to
            either manufacture or markets a certain type of food product in
            India. In addition, each product approval is granted only after a
            significant amount of processing time and involves payment of high
            processing fees to FSSAI. Therefore, it has been advised that the
            Product Approval application is filed from any entity such as
            Private Limited Company or LLP (Limited Liability Partnership) so as
            to transfer the company or business easily at a later time with the
            FSSAI License (if needed).
          </p>

          <h3>FBO License:</h3>
          <p>
            A FBO or Food Business Operator License is vital for businesses that
            are involved in the selling, manufacturing, or handling of food
            items or products. A copy of the FBO License Certificate should be
            submitted while applying for food product approval. Hence, it is
            advisable that an FBO License is obtained in the business name (if
            required).
          </p>

          <h3>Test Reports:</h3>
          <p>
            The food Product Approval application shall be submitted with
            certain test reports from NABL accredited labs. But, the NABL lab
            reports are used to authenticate the claims, label claims, and other
            aspects of the food product. For the food product, the type of tests
            to be conducted will vary based on the product’s nature.
          </p>

          <h3>Label of the Product:</h3>
          <p>
            It’s compulsory to contain a product label for Product Approval. The
            label may be a prototype and need not be printed. It’s vital to make
            sure that the food product label follows the FSSAI food product
            labelling standards in India.
          </p>

          <h3>Submitting the Application:</h3>
          <p>
            After submitting all the vital documents, the application for
            Product Approval can be made through the FPAS or Food Product
            Approval System. However, it’s vital to have an expert while
            preparing & submitting the application.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Procedure for getting Product Approval in India"
            className="Procedure-img w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
     
      </div>
    </div>
  );
};

export default Procedure;
