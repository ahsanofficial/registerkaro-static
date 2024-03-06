
import Image from 'next/image'
import React from 'react'
import categories_of_trusts_in_india from '../../../assets/images/static/trust-registration/trust_a_comprehensive.svg'

export const TrustsComp = () => {
  return (
  <div id='TrustsComp'> 
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' >
     <div className='flex-7'>
       <p className='main-para'>Trusts are created by individuals to earmark a portion of their assets or property for the advantage of another person. This establishment involves a fiduciary relationship among the trustor, trustee, and beneficiary. The particulars of this relationship are delineated in the trust deed submitted during the trust registration process.</p>
        <p className='main-para'>The establishment of a trust occurs when the trustor transfers a specific asset or property to the trustee for the ultimate benefit of the beneficiary. Typically, the beneficiary, who is a third party, maintains a connection to both the trustor and the trustee.</p>
        <p className='main-para'>Hence, the dynamics among the involved parties play a pivotal role in defining a trust. As per the provisions of the Indian Trusts Act of 1882, a trust is characterized as a “relationship between the trustor and trustee to hold specific benefits for the beneficiary.</p>
        </div>
        <div className='flex-3'>
        <Image alt="Trusts – A Comprehensive Overview
            Trusts are created by individuals to earmark a portion of their assets or property for the advantage of another person. This establishment involves a fiduciary relationship among the trustor, trustee," className="TrustsComp-img w-100" loading="lazy" src={categories_of_trusts_in_india} height={450} />
        </div>
    </div>
    </div>
  )
}