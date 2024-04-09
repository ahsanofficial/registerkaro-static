import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/revival-of-struck-off-companies/procedure_to_store.svg";

const Restore = () => {
  return (
    <div id="Restore">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Procedure to restore struck- off companies"
            className="Restore-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>File a petition with tribunal in form NCLT-9 along with following documents:</p>
            <p><strong>2. </strong>Affidavit verifying the petition in form no. NCLT-6</p>
            <p><strong>3. </strong> All the documents as mentioned above in support of the petition.</p>
            <p><strong>4. </strong>Copt of application shall also be served to ROC and income tax department not less than 14 days before the date fixed for hearing of application.</p>
            <p><strong>5. </strong>ROC may send his report to NCLT as to his comment and views on the restoration of company.</p>
            <p><strong>6. </strong>NCLT after hearing all the parties may give an order for restoration of company in register of companies.</p>
            <p><strong>7. </strong>Company is required to file order of NCLT to ROC within 30 days from the date of receipt of order.</p>
            <p><strong>8. </strong>Company should file all the order of NCLT to ROC within 30 days from the date of receipt of order.</p>
            <p><strong>9. </strong>Company should file all the pending financial statements and annual returns with ROC within the time prescribed by tribunal, if any</p>
            <p><strong>10. </strong>At the end ROC will restore the company in the Register of Companies.</p>
        </div>
       
      </div>
      <p className="main-para"><strong>Note: </strong>The revival of struck off companies may be done for a period of twenty years following the date of the strike-off as a replacement for winding up business. Any person who feels wronged by a register’s order, the company, a member, a creditor, or a worker may file an appeal or application</p>
    </div>
  );
};

export default Restore;


