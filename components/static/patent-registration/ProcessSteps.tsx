
import Image from 'next/image'
import { useState } from 'react'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {
    cityName: string;
}

export const ProcessSteps = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessSteps'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>You may follow the given step by step process for Patent Registration:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Patent Search</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Drafting Patent Application</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Filing Application</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Publication for opposition</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. Patent examination</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6. Grant of a Patent</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Patent Search</h3>
            <p className='mb-0'>To ascertain whether an invention is novel, the first step in the Indian patent filing process is called a patent search, which is carried out globally. It is generally accepted that doing patent searches prior to filing a patent application is safe. The Indian Patent Office may contest the novelty of an invention and object to an application if it is discovered to be in the previous art or to be substantially similar to prior art. To determine the likelihood that the invention Office will approve your invention, it is crucial to carry out previous patent searches.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Drafting Patent Application</h3>
            <p className='mb-0'>Following extensive global searches, the invention’s specification—which may or may not include the inventor’s claims—is drafted in a techno-legal language. The tentative specification is those without claims, and the full specification is those with claims. The specification describes the invention’s field of application, provides a thorough explanation of the invention together with practical examples, and suggests the best way to use it so that an individual with appropriate technical expertise can utilize it with ease. When the specification is completed and drafted with the inventor’s claim, the patent is granted legal protection.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Filing Application</h3>
            <p className='mb-0'>You can start the process of filing a patent application in {cityName} after creating the patent specification. As we previously covered, depending on the written specifications, patent applications might be either provisional or full. According to the Indian Patent Act, the completed or prepared provisional specification is filed in Form-2, whereas the patent application is filed in Form 1. If a provisional patent specification is filed, the inventor’s claims must be included in a complete specification within a year of the provisional specification’s filing. Depending on their intended use, six distinct types of patent application forms can be submitted.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Publication for opposition</h3>
            <p className='mb-0'>Following the completion of the application process, the patent is published in an official journal and made available for public viewing and inspection after the elapse of eighteen months from the date of priority or patent filing, whichever comes first. The entire public now has the chance to oppose the patent on legitimate grounds.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. Patent examination</h3>
            <p className='mb-0'>Only once a request for inspection has been submitted is the patent application examined. Within 48 months following the date of the priority or patent filing, the request for examination must be submitted. A patent application is examined by the patent examiner, who then provides an examination report. An examiner’s list of objections is included in the examination report. A response to an examination report must be sent within a year after the report’s publication. To address the objections, the examiner may, if necessary, summon the applicant or his representative for a show-cause hearing. For this reason, patent prosecution is another name for this stage.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6. Grant of a Patent</h3>
            <p className='mb-0'>Once the applicant has addressed all objections to the examination report and the examiner is pleased with the response, the application is processed for patent registration grant. The process of registering a patent has now come to an end. However, the examiner has the option to reject the patent application if they are not pleased with the applicant’s response and supporting documentation. To obtain patent protection in this scenario, the applicant will need to go through the complete patent process in {cityName} once more.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}
