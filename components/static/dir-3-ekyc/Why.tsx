import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dir-3-ekyc/one.svg";

export const Why = () => {
  return (
    <div id="Instruction">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 ">
          <p >
            <strong>1. Director Identification Number (DIN):</strong>
            </p>
            <p className="ps-5">
            This field will be automatically populated based on the director's
            login ID. If not available, the user can manually enter it.
          <p/>

          <p >
            <strong>2 (a) Personal Mobile Number:</strong>
            </p >
            <p >
              1. The country code and mobile number will be prefilled based on
              the entered DIN.
              <br />
              2. Mobile number will be masked, displaying only the country code
              and last 2 digits.
            </p>
          </p>

          <p >
            <strong>Send OTP: </strong>
          </p>
          <p className="ps-5 ">
            
            1. This button will activate after entering the DIN.
            <br />
            2. Click to send OTP for mobile number verification, valid for 2
            hours.
            <br />
            Enter OTP for Mobile Number:
            <br />
            1. This field activates after requesting OTP by clicking 'Send OTP'.
            <br />
            2. Enter the OTP received on the user's mobile number.
          </p>

          <p >
            <strong>Verify OTP:</strong>
          </p>
          <p className="ps-5">
            
            1. Validates OTP upon clicking
            <br />
            2.The director’s master data fields will be displayed upon
            successful validation.
          </p>
          <p className="ps-5 pt-2">
            <strong>2(b) Personal Email ID:</strong>
          </p>
          <p className="ps-5">
            {" "}
            1. Automatically filled based on the entered DIN.
            <br />
            2. Ensure the entered email ID is valid. 3. Email ID will be masked.
          </p>
          <p >
            <strong>
              2. Director’s Name: Prefilled based on DIN from Director’s Master
              data.
            </strong>
           
            <p className="ps-5 pt-2"> 1. Father’s Name
            <br />
            2. Citizen of India
            <br />
            3. Nationality
            <br />
            4. Resident of India
            <br />
            5. Date of Birth
            <br />
            6. Gender
            <br />
            7. Income Tax PAN
            <br />
            8. Aadhaar Number
            <br />
            9. Voter’s Identity Card Number
            <br />
            10. Passport Number
            <br />
            11. Driving License Number
            <br />
            12. Permanent Residential Address
            <br />
            13. Present Residential Address
            <br />
            </p>
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Instructions for Form No. DIR-3 KYC (Web) "
            className="Importance-img-h-100 w-100"
            height={700}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
