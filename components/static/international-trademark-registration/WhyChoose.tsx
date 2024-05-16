import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/static/international-trademark-registration/Why choose Internationa.svg";

export const WhyChoose = () => {
  return (
    <div id='WhyChoose'>
      <p className='main-para'>You can directly opt for the International Trademark Registration rather than registering your Trademark within India only as you can enjoy a wide range of benefits such as:</p>
      <div className="whychoose flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Why choose International Trademark Registration?"
            className="WhyChoose-img w-100"
            height={450}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. International Recognition : </strong>When an applicant registers his Trademark in the international realm rather than the country itself, then the Trademark receives international recognition under the Madrid Protocol, which offers International trademark registration and recognition in 97 countries that are signatories to the protocol.</p>
          <p><strong>2. Legal Protection : </strong>International trademark registration offers legal protection to the applicant in many different countries at once. This brings international legal protection to the Trademark in the international malpractices.</p>
          <p><strong>3. International market access : </strong>The international market is accessible for the business if the Trademark has been registered as International. You may enter the market and operate the business as your mark is protected against malpractices.</p>
          <p><strong>4. Universal Brand Protection : </strong>The international Trademark Protection opens the portal for the Trademark in the International Market by offering universal brand protection. This enhances the business’s goodwill and strengthens the market repo, which is an advantage when it comes to building consumer trust.</p>
        </div>
      </div>        
    </div>
  )
}
