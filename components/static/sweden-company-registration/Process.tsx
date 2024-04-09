import certificate from '../../../assets/images/static/sweden-company-registration/Why_Sweden_for_Company.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In recent times, Sweden has become one of the most preferred places to start a business. With its forward-thinking policies, strong economy, and lively culture of innovation, Sweden offers numerous benefits for businesses aiming to grow and succeed. Sweden has an economy that is not only steady but also resilient. Despite global economic uncertainties, Sweden remains strong, thanks to its varied economic landscape and robust institutional support. This strength provides a stable foundation for businesses, offering predictability and reducing the risks associated with market changes. Various reasons to register your company in Sweden are:</p>
                <p className='m-1'><strong>1. </strong>Simple to launch a business</p>
                <p className='m-1'><strong>2. </strong>Open market for entrepreneurs</p>
                <p className='m-1'><strong>3. </strong>Gateway to the Nordic and European markets</p>
                <p className='m-1'><strong>4. </strong>Governmental incentives</p>
                <p className='m-1'><strong>5. </strong>Hub for new businesses</p>
                <p className='m-1'><strong>6. </strong>Free Trade Zones</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Company Registration in Sweden</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Business Structures in Sweden</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Eligibility for Company Registration in Sweden</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process of Company Registration in Sweden</li>
                            </a>
                            <a href="#CostInvolved" className="scrollTo">
                                <li>Cost Involved in Company Registration in Sweden</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Design Your Business Future in Sweden with RegisterKaro</li>
                            </a>
                          
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5 align-center '>
                <div className='d-flex justify-content-center m-auto'>
                    <Image alt="An Overview of Company Registration in United Kingdom" className="certificate h-50 w-60" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}