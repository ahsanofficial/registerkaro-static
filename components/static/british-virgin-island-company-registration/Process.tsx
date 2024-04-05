import certificate from '../../../assets/images/static/british-virgin-island-company-reg/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The British Virgin Islands (BVI), which are located about 80 kilometers off the coast of Puerto Rico, are now a well-known location for offshore company setups and corporate trusts. Currently, the BVI is home to over 500,000 foreign companies that have been incorporated. With the passage of the International Business Companies Act of 1984, which allowed for the establishment of International Business Companies (IBCs) within its borders, the BVI gained prominence as an offshore financial hub. Currently, IBCs serve as the de facto business unit for foreign corporations and individuals looking to incorporate in the BVI. The BVI is a semi-autonomous territory. The UK, a reputable and well-established business hub, is in charge of overseeing BVI business and common laws; however, the BVI has extra latitude to construct its own corporate tax and incorporation rules.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Starting a Business in British Virgin Island</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies for Company Registration in British Virgin Island</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Prerequisites of Company Registration in British Virgin Island</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process for Company Registration in British Virgin Island</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in British Virgin Island</li>
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
                <p className="small-heading text-center">Company Registration in British Virgin Island</p>
                <div>
                    <Image alt="An Overview of An Overview of Company Registration in British Virgin Island" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}