import certificate from '../../../assets/images/static/liquor-license/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Obtaining a liquor license is essential in order to sell alcohol in India lawfully. A valid liquor license is a requirement for liquor stores, pubs, clubs, discos, bars, hotels, and restaurants. Alcohol sales are forbidden and considered unlawful without this authorization. In the regulatory framework, liquor licenses are essential because they handle the complex socio-legal aspects of the distribution and use of alcoholic beverages. </p>
                <p className='text-justify'>Beyond just a drink, liquor has cultural, legal, and societal ramifications. Owing to its possible associations with criminal activity and aggression, state governments closely oversee every aspect of the liquor industry, including production, sales, and manufacturing. Liquor licenses are issued by each state government to fully oversee and control these activities. Legally speaking, a liquor license is the permission given by the state excise department to people or organizations that are involved in the production, distribution, import, export, transportation, possession, and sale of alcoholic beverages.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Liquor License</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents required for Liquor License</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process for Liquor License approval</li>
                            </a>
                            <a href="#Estimated" className="scrollTo">
                                <li>Estimated Costs for the license</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Validation, Revocation & Renewal of Liquor License</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro helps you in obtaining the liquor license?</li>
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
                <p className="small-heading text-center">Liquor License</p>
                <div>
                    <Image alt="Why do you need Liquor License?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}