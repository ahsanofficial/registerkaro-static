import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/franchise-agreement/Advantages_of_Franchise_Agreement.svg"

const Advantages = () => {
  return (
    <div id="Advantages">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>1. Brand Recognition:</strong>
            Franchisees leverage established brand recognition, which attracts
            customers and facilitates business growth. This familiarity with the
            brand eliminates the need to build a brand from scratch,
            establishing credibility in the market.
          </p>

          <p>
            <strong>2. Built-In Customer Base:</strong>
            Franchises come with an existing customer base, ensuring a steady
            stream of business opportunities. This built-in clientele, coupled
            with brand recognition, alleviates the challenge of acquiring new
            customers and fosters growth for franchisees.
          </p>

          <p>
            <strong>3. Higher Profits:</strong>
            Franchises typically yield higher profits than independent
            businesses due to recognizable brands that attract a steady flow of
            customers. This popularity translates into lucrative returns on
            investment for franchisees.
          </p>

          <p>
            <strong>4. Lower Failure Rate:</strong>
            Franchises boast a lower failure rate compared to independent
            businesses, attributed to the support and advice offered by the
            franchisor network. Additionally, the proven business concept and
            existing demand for products or services mitigate the risk of
            failure.
          </p>

          <p>
            <strong>5. Lower Risk:</strong>
            ownership entails lower risk compared to independent business
            ventures, thanks to the proven business model and support systems
            provided by the franchisor. This reduced risk enhances accessibility
            to financing options for launching and sustaining the business.
          </p>

          <p>
            <strong>6. Business Assistance:</strong>
            Franchisees benefit from comprehensive support provided by the
            franchisor, ranging from turnkey operations to access to the
            franchisor's knowledge base. This assistance streamlines the process
            of owning and operating a business, offering invaluable guidance and
            resources.
          </p>

          <p>
            <strong>7. Buying Power:</strong>
            Franchises benefit from the collective buying power of the network,
            enabling them to negotiate bulk discounts on products and supplies.
            This results in lower operational costs and increased profitability
            for franchisees.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Advantages of Franchise Agreement"
            className="Importance-img-h-100 w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
