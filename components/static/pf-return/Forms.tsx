import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/pf-return/Forms_to_be_familiar.svg";

const Forms = () => {
  return (
    <div id="Forms">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Forms to be familiar with for PF Return"
            className="Forms-img w-100"
            height={750}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Form 2: </strong>Under the Employment Provident Fund and Employment Family Pension Scheme Flagship scheme, it is filed as a declaration and nomination. When an employee joins the company, they must file Form 2. This form must be turned in along with Form 5. Form 2 is separated into two sections, Part A and Part B. Nominating the beneficiaries of an account holder’s EPF balance in the case of their death is covered in Part A of Form 2. Furthermore, the nominee’s details from Part A should be provided in Part B as well.. Once more, this part needs to be properly signed, or a thumb impression needs to be produced at the conclusion.</p>
            <p><strong>Form 5: </strong>The information on newly enlisted employees in the provident fund program is included in Form 5, a monthly report. Details like the name of the organization, its address, its code, the employee’s account number, their name, their middle name (husband or father), their date of birth, their joining date, and their work history must all be included in Form 5.</p>
            <p><strong>Form 10: </strong>The information about the employees who have stopped participating in the program for that particular month is included in a monthly report. Details like the account number, the employee’s name, the name of the spouse or father, the date of service termination, and the reason for service termination are all included in Form 10.</p>
            <p><strong>Form 12 A: </strong>The payment information that was contributed to each employee’s account for a specific month is listed in this Form 12 A report.</p>
            <p><strong>Form 3A: </strong>The Employee Provident Fund and Employee Pension Fund contributions made by subscribers, members, and employers over the course of a year are shown on Form 3A, month by month. Every person involved in the scheme calculates the data. </p>
            <p><strong>Form 6A: </strong>Another form for consolidated annual contribution statements that contains information about each establishment member’s yearly contribution is Form 6A.</p>

        </div>
       
      </div>
    </div>
  );
};

export default Forms;


