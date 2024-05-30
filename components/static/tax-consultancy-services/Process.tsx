import certificate from '../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Overview of Tax Consultancy Services for Startups.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Commencing a new business demands strict adherence to local accounting regulations and timely reporting. The taxation and accounting landscape undergoes frequent changes, making it difficult for startups to stay abreast of legislative updates and apply them correctly in tax filing and compliance. The complexity of tax laws often leads to misunderstandings and disagreements, necessitating guidance from experts throughout the tax compliance journey. With tax authorities increasingly scrutinizing businesses, taxpayers face heightened pressure to ensure accurate and compliant tax filings. In this environment, specialized tax consultancy services play a pivotal role in helping startups navigate the intricate tax landscape.</p>
                <p className='text-justify'>These services provide expert guidance on tax planning, compliance, and reporting, ensuring startups remain compliant with tax laws and avoid potential penalties or disputes with tax authorities. By leveraging the expertise of tax consultants, startups can focus on their core business activities while ensuring their tax affairs are in order</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits for Start-ups in {cityName}</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>GST Registration and Advisory Services</li>
                            </a>
                            <a href="#BenefitsGst" className="scrollTo">
                             <li>Benefits of GST Registration</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Eligibility for GST Registration</li>
                            </a>
                            <a href="#ProfessionalTax" className="scrollTo">
                             <li>Professional Tax Registration</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                             <li>Advantages of Professional Tax Registration</li>
                            </a>
                            <a href="#EligibilityProfessional" className="scrollTo">
                             <li>Eligibility for Professional Tax Registration</li>
                            </a>
                            <a href="#TDS" className="scrollTo">
                             <li>TDS Return Filing</li>
                            </a>
                            <a href="#BenefitsTds" className="scrollTo">
                             <li>Benefits of TDS Return Filling</li>
                            </a>
                            <a href="#CriteriaTds" className="scrollTo">
                             <li>Eligibility Criteria for TDS Deduction in {cityName}</li>
                            </a>
                            <a href="#IncomeTaxReturn" className="scrollTo">
                             <li>Income Tax Return Filing</li>
                            </a>
                            <a href="#BenefitsITR" className="scrollTo">
                             <li>Benefits of ITR Filing</li>
                            </a>
                            <a href="#EligibilityFiling" className="scrollTo">
                             <li>Eligibility for Filing Income Tax Returns in {cityName}</li>
                            </a>
                            
                            <a href="#WhyChoose" className="scrollTo">
                                <li>What Tax Consultancy Services for Startups are Being Offered by RegisterKaro?</li>
                            </a>
                            
                           

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Tax consultancy services</p>
                <div>
                    <Image alt="These services provide expert guidance on tax planning, complianc" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}