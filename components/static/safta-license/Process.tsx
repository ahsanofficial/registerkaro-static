import certificate from '../../../assets/images/static/safta-license/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-7'>
                <p className='text-justify'>The South Asian Free Trade Area (SAFTA) is the free trade arrangement of the South Asian Association for Regional Cooperation (SAARC). The license refers to the rules and regulations that businesses must follow when operating within the SAFTA region. The license is a requirement for businesses that plan to engage in cross-border trade within the region.  Rules of Determination of Origin of Goods under the Agreement on South Asian Free Trade Area (SAFTA).</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ApplicableGovernments" className="scrollTo">
                                <li>Applicable Governments</li>
                            </a>
                            <a href="#Definition" className="scrollTo">
                                <li>What is SAFTA Registration?</li>
                            </a>
                            <a href="#ProcessDuration" className="scrollTo">
                                <li>Process and Duration</li>
                            </a>
                            <a href="#WhyApply" className="scrollTo">
                                <li>Why one should apply for SAFTA License?</li>
                            </a>
                            <a href="#ProcessStep" className="scrollTo">
                                <li>Process for obtaining SAFTA License</li>
                            </a>
                            <a href="#DocumentReq" className="scrollTo">
                                <li>List of documents required for SAFTA Licence registration.</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Franchise Agreement Process?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-3'>
                <p className="small-heading text-center">The South Asian Free Trade Agreement (SAFTA) License</p>
                <div>
                    <Image alt="The South Asian Free Trade Agreement (SAFTA) License" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
