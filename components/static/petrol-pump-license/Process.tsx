import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>To increase the number of locations where Oil Marketing Companies can grant licenses for gas pumps, a new dealer selection process has been established. The candidate is first evaluated in accordance with the new process in comparison to pre-established qualifying conditions. All applicants who satisfy the eligibility requirements move on to the next round, when dealers are selected by drawing lots. These days, choosing a gasoline pump dealer or gasoline pump dealer is heavily influenced by eligibility requirements.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Eligibility" className="scrollTo">
                             <li>Eligibility for a license to operate a Petrol Pump</li>
                            </a>
                            <a href="#HowToApply" className="scrollTo">
                             <li>How to apply for Petrol Pump License?</li>
                            </a>
                            <a href="#RequiredInvestment" className="scrollTo">
                             <li>Required Investment for the Procurement of a Fuel Pump License</li>
                            </a>
                            <a href="#NeedForLand" className="scrollTo">
                             <li>Need for Land to Begin a Petrol Pump</li>
                            </a>
                            <a href="#LicenseCertificatedRequired" className="scrollTo">
                             <li>The licenses and certificates required to open a Petrol Pump</li>
                            </a>
                            <a href="#Summary" className="scrollTo">
                             <li>Summary</li>
                            </a>

                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro helps you in getting Petrol Pump License?</li>
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
            <div className='flex-5'>
                <p className="small-heading text-center">Overview on Petrol Pump License</p>
                <div>
                    <Image alt="Overview on Petrol Pump License" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}