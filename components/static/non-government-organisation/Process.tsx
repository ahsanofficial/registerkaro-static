import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>NGO (Non-Governmental Organisation) is a voluntary group or institution with a social mission, which operates independently from the government. Non-governmental organizations (NGOs) play a pivotal role in India's socio-economic development by addressing various social issues and advocating for change. In this blog, we will explore the legal framework governing NGOs in India, along with the registration process, to provide clarity and guidance for aspiring social entrepreneurs and activists. Establishing and operating an NGO in India involves navigating a multifaceted legal framework and adhering to specific registration procedures.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Legal Framework for NGOs in India:</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Different Types of NGOs:</li>
                            </a>
                            <a href="#eligibility" className="scrollTo">
                                <li>What eligibility criteria should be for the formation of an NGO?</li>
                            </a>
                            <a href="#registration_process" className="scrollTo">
                                <li>Online Registration Process for NGOs:</li>
                            </a>
                            <a href="#Instruction" className="scrollTo">
                                <li>List of Documents Needed for NGO Registration:</li>
                            </a>
                            <a href="#registration_ngo" className="scrollTo">
                                <li>Benefits of Registration NGOs:</li>
                            </a>
                            <a href="#Tablecom" className="scrollTo">
                                <li>Differences between trusts, societies, and Section 8 companies.</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the ISP Licence Registration Process?</li>
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
                <p className="small-heading text-center">Non-government-organisation</p>
                <div>
                    <Image alt="process of company in Ngo Government organisation" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}