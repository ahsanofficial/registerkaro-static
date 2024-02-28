import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import benefits_of_startup_india_registration from '../../../assets/images/static/startup_india_registration/benefits_of_startup_india_registration.svg'

export const Benefits = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
       <div className='flex-3'>
        <Image alt="Benefits of Startup India Registration, Easy Access of Funds,Tax Savings for Investors, Income Tax Exemption,Easily apply for Government Tenders,Rebate in Trademark & Patent Filing,Easy Winding Up" className="Benefits-img w-100" loading="lazy" src={benefits_of_startup_india_registration} height={500} />
        </div>
      <p className='main-para'>Following are the benefits of Startup India Registration:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Easy Access of Funds</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Tax Savings for Investors</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Income Tax Exemption</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Easily apply for Government Tenders</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Rebate in Trademark & Patent Filing</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Easy Winding Up</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
      </div>

      <div className='flex-6 text-justify fs-20 p-color-black'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <h3>1: Easy Access of Funds</h3>
          <p>Rs. 10,000 crores fund is set-up by the Indian Government to provide funds to the startups as Venture Capital. The Government is also giving guarantees to the lenders to encourage banks & other financial institutions to provide Venture Capital.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <h3>2: Tax Savings for Investors</h3>
          <p>Individual investing their capital gains in the venture funds set-up by the Government will get exemption from Capital Gains and this will help all the Startups to attract more investors.</p>
        </div>
        <div className={`${active === '3' ? 'active' : 'none'}`}>
          <h3>3: Income Tax Exemption</h3>
          <p>Eligible startups can be exempted from paying Income Tax for 3 Consecutive F.Y. (Financial Years) out of their first 10 years since Incorporation.</p>
        </div>
        <div className={`${active === '4' ? 'active' : 'none'}`}>
          <h3>4: Easily apply for Government Tenders</h3>
          <p>Startups in India can easily apply for Government Tenders and they are exempted from the prior experience or turnover criteria applicable for normal companies answering to Government Tenders.</p>
        </div>
        <div className={`${active === '5' ? 'active' : 'none'}`}>
          <h3>5: Rebate in Trademark & Patent Filing</h3>
          <p>Startups working under Startup India Registration Scheme will get 50% rebate on Trademark Filing and 80% rebate on Patent filing.</p>
        </div>
        <div className={`${active === '6' ? 'active' : 'none'}`}>
          <h3>6: Easy Winding Up</h3>
          <p>The process of winding up of Company becomes very easy & it takes 90 days to wind up under IBC, 2016.</p>
        </div>
      </div>

      </div>
    </div>
  )
}
