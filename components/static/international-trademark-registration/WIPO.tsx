import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/static/international-trademark-registration/two.svg";

export const WIPO = () => {
  return (
    <div id='WIPO'>
      <div className='wipo flex w-80 m-auto mobile-flex-column-reverse'>
        <div className="flex-5">
          <p>The World Intellectual Property Organization (WIPO) offers the registration of a trademark in many jurisdictions with a single application and one upfront fee. As a bundle of national rights, WIPO offers the Madrid System, which enables a trade mark to be filed in many countries worldwide in a single application. To begin with, you must have a national trademark that is registered in a country that has ratified the Madrid Protocol or the Madrid Treaty (a list of these countries can be seen here). Your application for several more territories will be based on this “base registration.”</p>
        </div>
        <div className="flex-5">
          <Image
            alt="WIPO & International Trademark Registration"
            className="MadridProtocol-img w-100"
            height={265}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  )
}
