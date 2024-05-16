import certificate from "../../../assets/images/static/zed-certification/certificate.svg";
import Image from "next/image";

export const Process = () => {
  return (
    <div className="process flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-5">
        <p className="text-justify">
          The ZED (Zero Defect Zero Effect) Scheme was introduced by the
          Ministry of Micro, Small, and Medium Enterprises to encourage business
          owners to produce high-quality goods and satisfy both domestic and
          international consumer expectations. The program's primary goals are
          to encourage entrepreneurship and assist the government's "Made in
          India" initiative. The Ministry provides several rewards and
          privileges to MSMEs rated under the ZED program in order to encourage
          them. Zero Defect means that the goods should be manufactured in such
          a way that it should carry zero defects & they are never returned due
          to quality parameters, while zero defect means that the manufacturing
          should support sustainable development and it should have zero
          negative impact on the environment. ZED Certificate is valid for a
          period of 3 years from the date of issuance of certificate.
        </p>
        <div className="page-point">
          <ul>
            <ul>
              <a href="#ProcessStep" className="scrollTo">
                <li>Phases of ZED Certification</li>
              </a>
              <a href="#Objectives" className="scrollTo">
                <li>Objectives of ZED Certificate</li>
              </a>
              <a href="#Components" className="scrollTo">
                <li>
                Components of ZED Certification
                </li>
              </a>
              <a href="#Certificate" className="scrollTo">
                <li>ZED Certification Level</li>
              </a>
              <a href="#Eligibility" className="scrollTo">
                <li>Eligibility for ZED Certification</li>
              </a>
              <a href="#Subsidy" className="scrollTo">
                <li>Subsidy on cost of certification</li>
              </a>
              <a href="#DocumentReq" className="scrollTo">
                <li>Documents required for ZED Certificate</li>
              </a>
              <a href="#CertificationProcess" className="scrollTo">
                <li>
                ZED Certification Process
                </li>
              </a>
              <a href="#Surveillance" className="scrollTo">
                <li>
                Surveillance under ZED Certification
                </li>
              </a>
              <a href="#Renewal" className="scrollTo">
                <li>
                Renewal of Certificate
                </li>
              </a>
              <a href="#HowRegisterKaro" className="scrollTo">
                <li>
                How RegisterKaro helps in getting ZED Certificate?
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
          ZED Certification
        </p>
        <div>
          <Image
            alt="ZED Certification"
            className="certificate h-100 w-100"
            loading="lazy"
            src={certificate}
          />
        </div>
      </div>
    </div>
  );
};
