import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Changing = () => {
  return (
    <div id="Changing">
        <p className="main-para">The step by step process to change LLP agreement is as follows : </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong> Step 1:</strong> The partners must meet to pass a resolution for the required changes in the draft LLP agreement. This may be to change capital contribution, for example.</p>
            <p><strong> Step 2:</strong> Within 30 days of the passing of the resolution, Form-3 needs to be filed with the Registrar.</p>
            <h3>The details to be submitted in Form 3 are : </h3>
            <div className="ps-5">
                <p><strong>1. </strong>Date of LLP agreement modification</p>
                <p><strong>2. </strong>Reason of the modification in the LLP agreement sample– whether it is due to:</p>
                  <ol className="ms-3">
                     <li>Change in a partner(s)</li>
                     <li>Change in business activities</li>
                     <li>Change in contribution and profit sharing percentage of any of the partners</li>
                     <li>Any other change in matters</li>
                  </ol>
                <p><strong>3. </strong>Duties & rights of partners</p>
                <p><strong>4. </strong>Restrictions imposed on the authority of any or all of the partners</p>
                <p><strong>5. </strong>Administration and management of the LLP</p>
                    <ol className="ms-3">
                        <li> The procedure of calling and conducting meetings</li>
                        <li> Acts that can be made only with the approval of all or a specific number of the partners</li>
                    </ol>
                <p><strong>6. </strong>Contents of the indemnity clause</p>
                    <ol className="ms-3">
                        <li>The partners’</li>
                        <li>Inclusion</li>
                        <li>Retirement</li>
                        <li>Cessation</li>
                        <li>Resignation and</li>
                        <li>Expulsion</li>
                    </ol>
                
                <p><strong>7. </strong>Disputes and resolution of issues related to</p>
                    <ol className="ms-3">
                        <li>The partners</li>
                        <li>The partner and the LLP</li>
                        <li>Possible activities of the business after the change</li>
                        <li>The division of industrial activity after the change in the LLP agreement format.</li>
                        <li>The details of contribution and profit sharing percentage of the partners after the change in the LLP agreement</li>
                    </ol>
                    </div>
           <p><strong>Step 3: </strong> Form-4 needs to be filed with the Registrar (along with the Form-3),</p>
                <ol className="ps-3">
                    <li>If the change in the LLP agreement format is due to the change in a partner(s) or designated partner(s).</li>
                    <li>In case of the appointment, cessation or change in designation/name/address of partner(s) or designated partner(s).</li>
                </ol>
               </div>
           
       
      </div>
    </div>
  );
};

export default Changing;


