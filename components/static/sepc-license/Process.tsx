import certificate from '../../../assets/images/static/sepc-license/certificate.svg';
import Image from 'next/image';
 
interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                
            <p> <strong>1. </strong>The Government of India's Ministry of Commerce and Industry established the Services Export Promotion Council to acknowledge and support the importance of the Services Sector. Since starting in 2006, SEPC has been crucial in enabling the export of services. The council has a variety of functions and duties focused on advancing the development of the services sector.</p>
           
            <p> <strong>2. </strong>Promoting business opportunities for both new and established exporters of services. Serving as a medium to connect the government and the industry. Giving guidance on policies and dealing with challenges in the industry. Providing information on worldwide markets, encompassing prospects, obstacles, and regulatory structures. Creating tools for businesses, like rewards, to increase the amount of exports. </p>
            
            <p> <strong>3. </strong>Creating promotional events and activities that are focused on the market. Granting access to different grants and programs introduced by the Ministry of Commerce, other ministries, and state governments. Gain access to genuine business opportunities and market entry prospects in established and developing markets. </p>
           
           
            <p><strong>4. </strong>Display their company profile on the website www.servicesepc.org in the section labeled MY SEPC. Use online tools to attract the attention of international buyers. Obtain assistance from Indian Embassies/Missions for global business opportunities. Simplify visa procedures for business trips.</p>
           
            <p><strong>5. </strong>Developing policies to establish a conducive atmosphere for business operations. Utilize benefits offered by the Market Access Initiative Scheme from the Ministry of Commerce and Industry. Gain access to upcoming export incentives established in the Foreign Trade Policy. Qualify for programs offered by the Ministry of Micro, Small, and Medium Enterprises. Obtain certificates for export achievement or duty/GST payment to qualify for Bank Guarantee exemption for Advance Authorisation (AA)/DFIA/EPCG approval.</p>
           
          
            <p><strong>6. </strong>Getting a Services Export Promotion Council (SEPC) license in {cityName} offers various advantages for service exporters. SEPC, formed under the Ministry of Commerce and Industry, Government of {cityName}, is committed to supporting and easing the process of exporting services. Listed below are the advantages of acquiring an SEPC license, an SEPC license effectively generates business prospects for services exporters, whether they are new or already established.</p>
           
            <p><strong>7. </strong>Acts as a bridge connecting the government and industry by offering policy advice and tackling industry concerns. Provides information on worldwide markets, encompassing current and developing chances, obstacles, and regulatory structures. Develops mechanisms, such as rewards, to enhance and ease the process of exporting goods. Creates promotional events and activities focused on the market to improve visibility.</p>
            
           <p><strong>8. </strong>Gives individuals access to different grants and programs offered by the Ministry of Commerce, as well as other Ministries and State Governments. Gain legitimate business opportunities and entry into current and developing markets. Enables online networking to help businesses attract attention from international buyers. </p>
           
            <p><strong>9. </strong>Indian Embassies/Missions offer essential assistance for business opportunities abroad. They also encourage involvement in policy creation to support a conducive business climate. Allows attendance at global trade shows, Reverse Buyer-Sellers Meets, and other export promotion events with financial support. Utilizes benefits within the Market Access Initiative Scheme offered by the Ministry of Commerce and Industry. </p>
           
            <p><strong>10. </strong>Provides partial assistance with airfare expenses (based on set criteria) when attending international exhibitions with the SEPC pavilion. Utilize Export Incentives established by the Foreign Trade Policy. Qualifies for programs offered by the Ministry of Micro, Small, and Medium Enterprises.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Why" className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process to get SEPC License</li>
                            </a>
                            <a href="#table" className="scrollTo">
                                <li>Fees for New Membership</li>
                            </a>
                            <a href="#renewal" className="scrollTo">
                                <li>Fees for Renewal of Membership</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li> How RegisterKaro helps you in the Registration process?</li>
                            </a> 
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">SEPC License</p>
                <div>
                    <Image alt="SEPC License" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}