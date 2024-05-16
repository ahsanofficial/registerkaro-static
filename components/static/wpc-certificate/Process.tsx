import certificate from '../../../assets/images/static/wpc-Certificate/Vector Smart Object2 202.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>An authority certificate known as a WPC certificate or WPC license enables Indian importers to purchase radio and wireless equipment from overseas. The Department of Telecommunication (DoT) is the one who issues it. Before being imported into India, any radio equipment—such as walkie-talkies, RC cars, boats, drones, ZigBee, Bluetooth devices, etc.—must receive WPC ETA certification. Customs officers will confiscate radio equipment smuggled into India at the border if they don't have prior WPC approval.
It is not need to have separate WPC permission for routers, laptops, or phones. The product must go through the certification process, which includes application, evaluation, and testing because of the factory inspection; therefore, any approved testing facility outside of India can conduct the testing before the WPC certificate and ETA (Equipment Type Approval) certification number are provided.

</p>

                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>What is WPC certificate?</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>List of products which requires a WPC Certificate for import:</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>What are the types of WPC Certificate?</li>
                            </a>
                            <a href="#advantage" className="scrollTo">
                                <li>Required Documents for WPC Certification</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>How to Apply Certificate or WPC License </li>
                            </a>
                            <a href="#consent" className="scrollTo">
                                <li>Importance of WPC License:</li>
                            </a>
                            <a href="#Fees" className="scrollTo">
                                <li>WPC Certificate Fees</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Franchise Agreement Process?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Wireless planning and coordination </p>
                <div>
                    <Image alt="Overview of Wireless Planning and Coordination" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}