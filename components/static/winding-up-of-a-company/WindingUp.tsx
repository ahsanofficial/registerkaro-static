import Image from 'next/image'
import React from 'react'
import orderTrubunal from '../../../assets/images/winding-up-of-a-company/order-trubunal.svg'


export const WindingUp = () => {
 return (
    <div id='WindingUp'>
      <p className='main-para mb-1'>According to Section 271 of the Companies Act, a Tribunal has complete authority to make a winding-up order, but only in the following conditions. The circumstances are as follows: </p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      
     
       <div className='flex-7 pt-5'>
          <p><strong>1: </strong>Bypassing of special resolution for winding up;</p>
          <p><strong>2: </strong>Inability to pay debts;</p>
          <p><strong>3: </strong>Deadlock in management;</p>
          <p><strong>4: </strong>Sick Company; </p>
          <p><strong>5: </strong>Acts against the State;</p>
          <p><strong>6: </strong>Fraudulent Conduct of Business;</p>
          <p><strong>7: </strong>In case the company fails to file financial statements with the Registrar;</p>
          <p><strong>8: </strong>If it seems just, reasonable and equitable to wind up.</p>
           </div>
           <div className='flex-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="DifferentTypes-img w-100" height={520} loading="lazy" src={orderTrubunal} />
          </div>
        </div>
      </div>
  )
}