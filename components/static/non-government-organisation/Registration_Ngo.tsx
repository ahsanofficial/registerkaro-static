import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/non-government-organisation/Benefits_of_Registration_NGO.svg";

export const Registration_Ngo = () => {
  return (
    <div id="registration_ngo">
 <p className='main-para mb-2'>They can experiment freely with innovative approaches and, if necessary, to take risks.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
       
        <div className="flex-7 pt-3 ">
          
            <p className="ps-5">
           <strong>1.</strong> They are flexible in adapting to local situations and responding to local needs and therefore able to develop integrated projects, as well as sectoral projects.
          </p>
          <p className="ps-5">
           <strong>2.</strong>They enjoy a good rapport with people and can render micro-assistance to underprivileged people as they can identify the most in need and tailor assistance to their needs.
          </p>
          <p className="ps-5">
           <strong>3.</strong>They can communicate at all levels, from the neighbourhood to the top levels of government.
          </p>
          <p className="ps-5">
           <strong>4.</strong>They can recruit both experts and highly motivated staff with fewer restrictions than the government.
          </p>
          <p className="ps-5">
           <strong>5.</strong>Other advantages include Tax benefits, Personal liability protection, No Minimum capital requirement, ownership transfer, the right to acquire assets, credit acceptance, and legal protection.
          </p>
          
        </div>
        <div className="flex-3">
          <Image
            alt="Benefits of Registration NGOs:"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
