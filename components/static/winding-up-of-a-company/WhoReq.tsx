import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/winding-up-of-a-company/what-voluntary.svg'

export const WhoReq = () => {
  return (
    <div id='WhoReq'>
       <div className='flex-5'>
          
            <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={520} loading="lazy" src={bft} />
          </div>
      <p className='main-para mb-2'> The voluntary winding up of a company is the second way to achieve closure. The procedure is often started by the company’s partners or shareholders, who do this by passing a special resolution. When the shareholders believe that the company will become bankrupt and unable to pay its debts, they decide to wind it up voluntarily. By disposing off its assets and paying off any remaining debts, the winding up procedure puts an end to the corporation’s existence.</p>
      <p className='main-para mb-2'>The main objective of the wind-up is to make a profit from the company, which has neither a promising future nor a remaining mission. The court does not require this kind of winding up or liquidation. It is only authorized by the company’s board of directors and shareholders, even under unfavorable market conditions where stakeholders believe the business is having difficulties as a result. They can then enact a resolution to dissolve the business.</p>
    
      </div>
  )
}
