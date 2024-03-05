import Image from "next/image";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";

export const StepsForRegistering = () => {
  return (
    <div id="StepsForRegistering">
      <div className="DocumentArrowWise w-80 m-auto mobile-flex-column-reverse">
        <h3>Address Proof and Identity of the Partners:</h3>
        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Selection of Name
          </li>
        </ul>

        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Reserving the Name
          </li>
        </ul>

        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Draft the Partnership Deed/LLP Agreement
          </li>
        </ul>

        <p>important Contents of the Deed/Agreement:</p>
        <ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Name of the Firm</li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Details of the partners- Name and Address</li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Commencement Date</li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Profit/Loss sharing structure</li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Interest on Capital</li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Capital Contribution</li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Salary payable </li></ul>
            <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />Procedure of Admission and Retirement of Partners</li></ul>
        </ul>

        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Notarization and Execution of the Deed/Agreement
          </li>
        </ul>

        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Filing of the LLP Agreement/Partnership Deed with the Registrar of
            Companies(RoC).
          </li>
        </ul>

        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Application of PAN, (if under Partnership Structure)
          </li>
        </ul>

        <ul className="tick list-unstyled">
          <li>
            <Image
              alt="ulArrow"
              className="ulArrow-img"
              loading="lazy"
              height={30}
              width={30}
              src={ulArrow}
            />
            Certificate of Incorporation.
          </li>
        </ul>
      </div>
    </div>
  );
};
