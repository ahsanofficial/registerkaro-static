import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const RequirementsToFulfil = () => {
  return (
    <div id='RequirementsToFulfil'>
      <div className="requirementsToFulFil flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <ol>
            <li>The applicant must have a legitimate and functioning business or commercial establishment in India, be an Indian national, or have an abode in India.</li>
            <li>The applicant needs to have filed for a national trademark application in India or already have a trademark which is registered with the Indian Trademarks Registry. The international application is based on the national trademark application or registration with the local authority which forwards the application to WIPO.</li>
            <li>In order to get national trademark registration or have their trademark referenced in a national trademark application, the applicant must file an international application for the same trademark.</li>
            <li>The national trademark registration or application and the list of products and services in the international application should match.</li>
            <li>In the international application, the applicant must select one or more member nations of the Madrid Protocol in which they wish to be protected.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Requirements to be fulfilled for International Trademark Registration"
            className="RequirementsToFulfil-img w-100"
            height={450}
            loading="lazy"
            src={bft}
          />
        </div>     
      </div>      
    </div>
  )
}
