
import React from 'react'
import Image from 'next/image'
import bft from '../../../assets/images/winding-up-of-a-company/whatIsComp.svg'

export const WhatIsComp = () => {
  return (
    <div id='WhatIsComp'>
        <div className='flex-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={520} loading="lazy" src={bft} />
        </div>
        <p className='main-para mb-2'id='WhatIsComp'>When a company is required by law to wind up its operations, this is referred to as compulsory winding up or winding up by a Tribunal. The Tribunal refers to the National Company Law Tribunal in this context. This can be decided in a court of law or in the form of a court order.</p>
        <p className='main-para mb-0'id='WhatIsComp'>In the above instance, the company is compelled to appoint a liquidator. The liquidator will be in charge of managing the sales of the company and all of its assets, as well as distributing all assets following the liquidation among all creditors.</p>
    </div>
  )
}