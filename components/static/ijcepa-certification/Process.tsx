import certificate from '../../../assets/images/static/ijcepa-certification/certificate.svg';
import Image from 'next/image';


export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The India-Japan Comprehensive Economic Partnership Agreement (IJCEPA) is a bilateral trade deal between India and Japan aimed at boosting economic cooperation, improving trade relations, and creating a favourable investment environment. The main purpose of this agreement is to provide preferential tariff treatment to import/export between the two countries. The IJCEPA certificate is a document issued to businesses involved in trade between India and Japan under the terms of the India-Japan Comprehensive Economic Partnership Agreement. It serves as evidence that a specific transaction qualifies for preferential treatment, such as reduced tariffs or other trade benefits outlined in the agreement. In India, the IJCEPA Certificate is issued by the Directorate General of Foreign Trade (DGFT), which confirms that exported goods are entirely made in either India or Japan. Having a Certificate of Origin is crucial for customs clearance, if goods arrive without it they may be subject to taxes by the importing country's customs authorities. Therefore, the certificate of origin ensures that products qualify for preferential treatment and are from countries covered by the free trade agreement.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of the IJCEPA Certificate</li>
                            </a>
                            <a href="#FreeTradeAgreements" className="scrollTo">
                                <li>Other Free Trade Agreements</li>
                            </a>
                            <a href="#EligibilityCriteria" className="scrollTo">
                                <li>Eligibility Criteria for the IJCEPA Certificate</li>
                            </a>
                            <a href="#DocumentReq" className="scrollTo">
                                <li>Documents and Information Required for IJCEPA Certificate</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Obtaining IJCEPA Certificate</li>
                            </a>
                            <a href="#Fees" className="scrollTo">
                                <li>Fees for IJCEPA Registration</li>
                            </a>
                            <a href="#Renewal" className="scrollTo">
                                <li>Import Export Code Validity and Renewal</li>
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
                <p className="small-heading text-center">IJCEPA CERTIFICATION</p>
                <div>
                    <Image alt="IJCEPA CERTIFICATION" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}