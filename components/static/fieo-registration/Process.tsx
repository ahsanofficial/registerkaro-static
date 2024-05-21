import certificate from '../../../assets/images/static/fieo-registration/certificate.svg';
import Image from 'next/image';
 
export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>  
            <p>FIEO offers a weekly e-bulletin to update traders on national and international trade news and global developments. The Indian trade portal gives access to a complimentary internet platform that supplies details on 65 nations' MFN tariffs, preferential tariffs, SPS/TBT, and rules of origin, along with import statistics from 87 countries and India's portion of those imports.</p>
            <p>The FIEO registration website offers two extra chat services to assist with questions about quality standards, business legal issues, arbitration, international agreements, technology transfer, patent filings, trademarks, product promotion, and related subjects.</p>
            <p>The Federation of Indian Export Organisations website contains news articles related to international trade. Among the services offered by FIEO are spot rates, forward rates, a tool for calculating forward rates, a matrix for analysing FOREX, pivot points, the LIBOR rate, historical data, a source for currency information, and a chart.</p>
            <p>Concessions in trade under the foreign trade policy. FIEO distributes MAI grants to qualified members who are taking part in overseas exhibitions/trade fairs/delegations organized by the association.</p>
            <p>Additionally, FIEO offers subsidized booths to its members at international exhibitions. FIEO is involved in approximately 50 prestigious exhibitions around the world every year.</p>
            <p>FIEO website hosting - Members can upload product pictures on the FIEO website for free. FIEO members have the option to display their profile on the FIEO website, making it accessible through a search function.</p>
            <p>Use FIEO's search engine on their website to find Indian exporters offering various products.Only FIEO Member names are shown and buyers can directly reach out to exporter members.</p>
            <p>Forum for members to engage in conversations with different government authorities such as excise, customs, DGFT, etc. Routine meetings are scheduled with key decision-makers in order to address and resolve the challenges encountered by exporters.</p>
            <p>FIEO certificate of origin and Visa recommendation letters provided to assist members with their international trips. Online chatting service available for obtaining clarification on international trade matters, including policy inquiries.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Why" className="scrollTo">
                                <li>Documents Required</li>
                            </a>

                            <a href="#WhyChoose" className="scrollTo">
                                <li> How RegisterKaro helps you in the Registration process?</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process For FIEO Registration  </li>
                            </a>
                           
                            <a href="#Fieo" className="scrollTo">
                                <li>Know More FIEO</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">FIEO Registration</p>
                <div>
                    <Image alt="FIEO Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}