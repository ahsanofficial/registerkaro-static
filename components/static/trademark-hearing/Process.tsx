import certificate from "../../../assets/images/static/trademark-hearing/certificate.svg";
import Image from "next/image";

export const Process = () => {
  return (
    <div className="process flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-5">
        <p className="text-justify">
          Trademark hearings play a crucial role in protecting intellectual
          property rights and making favourable decisions for resolving disputes
          for getting Trademark registered. A trademark hearing is an
          administrative process conducted by the Registrar of Trademarks by
          allowing being heard to protect intellectual property rights and
          resolve disputes among the parties involved. It serves as a platform
          to address disputes arising from issues related to trademark
          registration, renewal, or infringement. Businesses seeking to protect
          their trademarks must analyse the importance of these proceedings is
          vital for businesses. For a smooth process always trust in the
          expertise of legal professionals and proactive measures to secure
          trademark rights are essential steps towards success in trademark
          hearings in India. In this blog, we explore the trademark hearing
          process in India, emphasizing key steps, considerations, and best
          practices.
        </p>
        <div className="page-point">
          <ul>
            <ul>
              <a href="#TerritorialJurisdictions" className="scrollTo">
                <li>Territorial Jurisdictions of Trademark Regional Offices</li>
              </a>
              <a href="#Reason" className="scrollTo">
                <li>Reason for Hearing Notices on Trademark</li>
              </a>
              <a href="#ProcessStep" className="scrollTo">
                <li>Understanding the Trademark Hearing</li>
              </a>
              <a href="#KeyConsiderations" className="scrollTo">
                <li>What are the Key Considerations for a Successful Hearing?</li>
              </a>
              <a href="#DocumentReq" className="scrollTo">
                <li>List of documents required for Trademark Hearing</li>
              </a>
              <a href="#RecentDevelopments" className="scrollTo">
                <li>
                Recent Developments and Emerging Trends
                </li>
              </a>
              <a href="#WhyChoose" className="scrollTo">
                <li>
                How RegisterKaro Can Assist You in the Franchise Agreement Process?
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
        Trademark Hearing
        </p>
        <div>
          <Image
            alt="Trademark Hearing"
            className="certificate h-100 w-100"
            loading="lazy"
            src={certificate}
          />
        </div>
      </div>
    </div>
  );
};
