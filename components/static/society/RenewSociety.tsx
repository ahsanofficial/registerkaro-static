import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import six from '../../../assets/images/pvt-reg/checklist/six.svg'
import seven from '../../../assets/images/pvt-reg/checklist/seven.svg'

export const RenewSociety = () => {
  return (
    <div className='checklist' id='RenewSociety'>
      <p className='main-para'>Society Registration certificate is subject to renewal depending on the state and sometimes the kind of society you have registered. In order to renew the registration certificate, you need to keep following things in mind.</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Society Registered under the Society Registration Act 1860, is subject to renewal every 5 years."/>
          </div>
          <p>Society Registered under the Society Registration Act 1860, is subject to renewal every 5 years.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Diffusion of political education"/>
          </div>
          <p>The renewal cost of the society registration starts from Rs 200, which varies from state to state.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Grant of charitable assistance"/>
          </div>
          <p>For the renewal process you need more documents than you needed on the registration of the society. These documents include registration certificate, list of existing members, Authenticity certificate, Financial Statement, Audit Reports, Utility bills for address proof, copy of utilized certificate, signature of new members (if any), Bank Account details with passbook, passport size photos, affidavit and renewal fee.</p>
        </div>
      </div>
      
    </div>

  )
}
