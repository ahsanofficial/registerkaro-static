import certificate from '../../../assets/images/static/new-zealand-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>New Zealand is a well-respected country with a contemporary legal system that the World Bank named the most business-friendly country in the world. A variety of organizations, including but not limited to Registered Banks, Finance Companies, Credit Unions, and Building Societies, are able to provide banking services within and from New Zealand. Therefore, It's said that one of the easiest places to establish a foreign firm is New Zealand. Anybody interested in forming a corporation in New Zealand should, therefore, be aware of all of their alternatives so they may weigh the benefits and drawbacks of each option before deciding which one to choose.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyBene" className="scrollTo">
                                <li>Why start a business in New Zealand?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of companies for Company Registration in New Zealand</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Company registration Process in New Zealand</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Prerequisites of Company Registration </li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in New Zealand?</li>
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
                <p className="small-heading text-center">Company Registration in New Zealand</p>
                <div>
                    <Image alt="An Overview of Company Registration in New Zealand" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}