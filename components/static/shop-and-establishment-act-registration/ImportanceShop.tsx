import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/shop-and-establishment-act-registration/Importance_of_Shop.svg'

export const ImportanceShop = () => {
  return (
    <div className="checklist" id="ImportanceShop">
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
        <div className='flex-7 mt-5'>
        <p><strong>1 : </strong>To stop child labour;</p>
        <p><strong>2 : </strong>To convert unorganised sector into organised;</p>
        <p><strong>3 : </strong>To impose rules based on local culture & empower states;</p>
        <p><strong>4 : </strong>To regulate employees’ wages;</p>
        <p><strong>5 : </strong>Maintain a healthy working environment.</p>
        </div>
        <div className='flex-4'>
          <Image alt="Importance of Shop and Establishment Act License" className="ImportanceShop-img w-100" height={350} loading="lazy" src={bft} />
      </div>
      </div>
    </div>
  );
};
