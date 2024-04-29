import certificate from "../../../assets/images/static/italy-company-registration/certificate.svg";
import Image from "next/image";

export const Process = () => {
  return (
    <div className="process flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-5">
        <p className="text-justify">
          A private limited company is a form of business organization in India.
          This business is owned by shareholders and its shares are not listed
          on the stock market for public trading. The company's shareholders
          choose a board to oversee operations, and the board then selects
          officers to handle daily activities. Private limited companies are
          required to have a minimum of seven shareholders and are not allowed
          to exceed fifty shareholders. The regulation of private limited
          companies in India is governed by the Companies Act of 2013. According
          to this legislation, private limited companies must submit yearly
          returns to the Registrar of Companies (ROC). They are required to keep
          financial records and create audited financial statements. The ROC
          requires the auditor's report to be submitted along with the financial
          statements. Private limited companies must cease operations if they
          are incapable of settling their debts. The process of winding up is
          supervised by the Insolvency and Bankruptcy Code of 2016. According to
          this Code, the company's assets are liquidated in order to settle its
          debts. The money earned from the sale is divided among the creditors
          based on their debts. If there are assets remaining after settling
          debts, they are divided among shareholders based on their ownership
          percentage.
        </p>
        <div className="page-point">
          <ul>
            <ul>
              <a href="#Reasons" className="scrollTo">
                <li>Reasons for Closing a Pvt. Ltd. Company</li>
              </a>
              <a href="#DocumentsReq" className="scrollTo">
                <li>Documents Required</li>
              </a>
              <a href="#Procedure" className="scrollTo">
                <li>Procedure for Closure of Pvt. Ltd. Company</li>
              </a>
              <a href="#WhyChoose" className="scrollTo">
                <li>
                How RegisterKaro helps you in the Registration process?
                </li>
              </a>
              <a href="#Faq" className="scrollTo">
                <li>Frequently Asked Questions</li>
              </a>
            </ul>
          </ul>
        </div>
      </div>
      <div className="flex-5">
        <p className="small-heading text-center">
          Company Registration in Italy
        </p>
        <div>
          <Image
            alt="An Overview of Company Registration in Italy"
            className="certificate h-100 w-100"
            loading="lazy"
            src={certificate}
          />
        </div>
      </div>
    </div>
  );
};
