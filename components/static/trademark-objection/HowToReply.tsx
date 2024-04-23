import Image from 'next/image'
import React, { useState } from 'react'
import eight from '../../../assets/images/pvt-reg/HowToRegister/eight.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const HowToReply = () => {
    const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowToReply'>
        <p className="main-para">After that, the applicant has a set amount of time—typically four months for regular applications and three months for expedited applications—to submit a response answering the objections. This response may entail:</p>
        <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
            <div className='flex-6'>
                <p><strong>1. </strong>Presenting justifications and proof for the mark’s uniqueness</p>
                <p><strong>2. </strong>Changing the application to set the mark apart from others that already exist</p>
                <p><strong>3. </strong>Refusing to pursue the application if it doesn’t appear likely to be successful</p>
            </div>
            <div className='flex-4'>
                <Image
                alt="WhenRecieveObjection of companies for Company Registration in Qatar"
                className="WhenRecieveObjection-img w-100 img-h-100"
                height={200}
                loading="lazy"
                src={bft}
                />
            </div>

        </div>
        <p className="main-para">After considering the response, the Trademark Registry makes a determination regarding whether to accept the application, raise additional objections, or set up a hearing. In the end, the objection procedure aims to safeguard the public and current companies by guaranteeing that registered trademarks are actually unique and do not deceive consumers. Or you may follow the following step-by-step process to create an easy journey.</p>
        <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
            <div className='flex-5'>
                <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={one} alt="one" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. File the Counter Statement:</div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={two} alt="two" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Hearing Scheduled:</div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Present your case: </div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={four} alt="four" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Appeal: </div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={five} alt="five" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. File the Counter: </div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={six} alt="six" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6. Avoid delays: </div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={seven} alt="seven" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7. Documents endorsement: </div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
                <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                    <Image src={eight} alt="eight" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8. Avoid delays: </div> 
                    <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                    </div>
                </button>
            </div>
            <div className='flex-5 text-justify fs-20 p-color-black'>
                <div className={`${active === '1' ? 'active' : 'none'}`}>
                    <h3>Step 1. File the Counter Statement:</h3>
                    <p className='mb-0'> The first step comprises filing a counter statement with the registrar against the objection raised for your trademark application. The counter-statement shall be filed within two months from the date of receipt of the objection. 
                    </p>
                </div>
                <div className={`${active === '2' ? 'active' : 'none'}`}>
                    <h3>Step 2. Hearing Scheduled:</h3>
                    <p className='mb-0'> Next comes when the Registrar receives your counter statement. After evaluation, the registrar will schedule the hearing so both parties have an opportunity to be heard.
                    </p>
                </div>
                <div className={`${active === '3' ? 'active' : 'none'}`}>
                    <h3>Step 3: Present your case: </h3>
                    <p className='mb-0'>You have to prepare your case for presentation along with relevant documents and evidence to support your matter, showcasing that the trademark applied for is authentic.
                    </p>
                </div>
                <div className={`${active === '4' ? 'active' : 'none'}`}>
                    <h3>Step 4: Appeal: </h3>
                    <p className='mb-0'>If the registrar has favoured the case for the opposing party and you are not satisfied with the decision, then you may file the appeal with the Intellectual Property Appellate Board (IPAB)
                    </p>
                </div>
                <div className={`${active === '5' ? 'active' : 'none'}`}>
                    <h3>Step 5: File the Counter: </h3>
                    <p className='mb-0'>If you have proceeded with the appeal, you will now have to prepare and file the counter for the same within three months from the date of passing order.
                    </p>
                </div>
                <div className={`${active === '6' ? 'active' : 'none'}`}>
                    <h3>Step 6: Avoid delays: </h3>
                    <p className='mb-0'>If there is any delay in filing the counter application, you will be fined Rs 2500 along with an explanation for such delay. If accepted, your case will be scheduled for hearing.
                    </p>
                </div>
                <div className={`${active === '7' ? 'active' : 'none'}`}>
                    <h3>Step 7: Documents endorsement: </h3>
                    <p className='mb-0'>The proceeding will take place under the IPAB rules. Before proceeding ahead, the documents need to be verified and endorsed by the Deputy Registrar.
                    </p>
                </div>
                <div className={`${active === '8' ? 'active' : 'none'}`}>
                    <h3>Step 8: The results: </h3>
                    <p className='mb-0'>The deputy registrar will notify if any defects are required to be corrected within two months from the date of notice issued. Otherwise, the approval will be granted. Important to note that the application will be tagged as abandoned if there is no response received on the notice.
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}
