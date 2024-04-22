import Image from 'next/image'
import { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessStep = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessStep'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>You may follow the given step by step instructions for Company Registration in Oman:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Choose Company Structure  </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Draft a Joint Venture Agreement</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Register the Business</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Start your Joint Venture Operation</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Choose Company Structure </h3>
            <p className='mb-0'>Choose a suitable legal structure for your joint venture, such as a partnership, a limited liability partnership, a private limited company, or a public limited company. Each structure has its own advantages and disadvantages, depending on the nature and size of your joint venture. You can consult a legal expert to help you decide the best option for your joint venture.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Draft a Joint Venture Agreement</h3>
            <p className='mb-0'>Draft a joint venture agreement that covers all the essential aspects of your joint venture, such as the name, objectives, duration, capital contribution, profit and loss sharing, management and control, intellectual property rights, confidentiality, dispute resolution, and termination clauses. You can use a standard template or customize it according to your specific needs. You can also seek professional assistance from RegisterKaro to draft a comprehensive and legally valid joint venture agreement.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Register the Business</h3>
            <p className='mb-0'> Register your joint venture agreement with the relevant authorities, such as the Registrar of Companies, the Registrar of Firms, the Income Tax Department, the Goods and Services Tax Department, and the Foreign Exchange Management Act. The registration process and requirements may vary depending on the legal structure and nature of your joint venture. You can also avail the services of RegisterKaro to handle the registration process smoothly and efficiently.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Start your Joint Venture Operation</h3>
            <p className='mb-0'> Start your joint venture operations and comply with the applicable laws and regulations, such as the Companies Act, the Partnership Act, the Income Tax Act, the Goods and Services Tax Act, the Foreign Exchange Management Act, and the Contract Act. You should also maintain proper records and accounts of your joint venture activities and file the necessary returns and reports with the authorities. You can also rely on RegisterKaro to take care of your accounting and compliance needs.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}
