import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>FSSAI Product Approval is basically a procedure in which FSSAI, The food safety and standards Authority of India deems products fit for consumption / use in future food production capacity. The product approval by FSSAI is needed when the ingredients of the product do not comply with the regulation of the Food Safety and Standards Act.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#System" className="scrollTo">
                                <li>FSSAI Product Approval Online System</li>
                            </a>
                            <a href="#Require" className="scrollTo">
                                <li>Which Food products require product approval?</li>
                            </a>
                            <a href="#EarlierRules" className="scrollTo">
                                <li>Earlier Rules and Regulations for FSSAI Product Approval</li>
                            </a>
                            <a href="#Approval" className="scrollTo">
                                <li>When do you need product approval in India?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of getting product approval</li>
                            </a>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who can apply?</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents required for obtaining FSSAI Product Approval</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for getting Product Approval in India</li>
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
                <p className="small-heading text-center">Company Registration in United Kingdom</p>
                <div>
                    <Image alt="An Overview of Company Registration in United Kingdom" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}