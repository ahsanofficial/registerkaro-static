import certificate from '../../../assets/images/static/canada-company-reg/certificate.svg';
import Image from 'next/image';


export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Setting up a subsidiary company in India is a strategic avenue for international companies which aspire to establish a foothold in the Indian market. However, these subsidiary companies first need to gain the needed legitimacy to operate within India's vibrant economy. To do so registering the foreign subsidiary company is required, the process of registration involves the creation of a separate legal entity in India as per the established procedure by acquiring a Permanent Account Number (PAN) and Director Identification Number (DIN).</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Understanding" className="scrollTo">
                                <li>Understanding Foreign Subsidiary Company Registration</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Registering a Foreign Subsidiary in India</li>
                            </a>
                            <a href="#Examples" className="scrollTo">
                                <li>Examples of Some Foreign Subsidiary Companies in India</li>
                            </a>
                            <a href="#Difference" className="scrollTo">
                                <li>Difference between Foreign Branch and Subsidiary</li>
                            </a>
                            <a href="#DocumentReq" className="scrollTo">
                                <li>Essential Documents for Registration</li>
                            </a>
                            <a href="#RegistrationProcess" className="scrollTo">
                                <li>Registration Process</li>
                            </a>
                            <a href="#ComplianceReq" className="scrollTo">
                                <li>Compliance Requirements for Foreign Subsidiary</li>
                            </a>
                            <a href="#ApplicableTaxes" className="scrollTo">
                                <li>Applicable Taxes on Foreign Subsidiary in India</li>
                            </a>
                            <a href="#CostsInclude" className="scrollTo">
                                <li>Costs included in Registering a Subsidiary in India</li>
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
                <p className="small-heading text-center">Foreign Subsidiary Company Registration</p>
                <div>
                    <Image alt="Foreign Subsidiary Company Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}