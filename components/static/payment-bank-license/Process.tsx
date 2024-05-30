import dft from "../../../assets/images/static/payment-bank-license/What is Payment Banks_.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In the banking world, there's been a lot of talk about Payment Banks lately. They're seen as the next big thing, especially for the government's goal of including more people in the financial system. These banks work like regular banks, except they don't give out loans or credit cards. Payment Banks make banking easier by offering various services through safe digital platforms. This special kind of Bank was introduced by RBI, back in 2013. They're almost similar to other banks and perform functions as defined by the Banking Regulation Act, 1949 from sections 5(b) and 6(1)(a) to (o). The idea behind Payment Banks is to make payment services more accessible, especially to citizens with lower incomes and small businesses. The RBI hopes these banks will bring financial services to remote areas where they're needed most. These banks are all about making banking simpler and reaching more people, wherever they are. For eg: Bharti Airtel’s Airtel Payments Bank (first payment bank of India), India Post Payments Bank, Fino Payments Bank, Jio Payments Bank etc.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatisPBL" className="scrollTo">
                             <li>What is a Payment Bank Licence?</li>
                            </a>
                            <a href="#Features" className="scrollTo">
                             <li>Features of a Licensed Payments Bank</li>
                            </a>
                            <a href="#RequirementsToObtain" className="scrollTo">
                             <li>What are the Requirements to Obtain a Payment Bank License?</li>
                            </a>
                            <a href="#WhoCanObtain" className="scrollTo">
                             <li>Who can Obtain a Payment Banks License?</li>
                            </a>
                            <a href="#InformationRequired" className="scrollTo">
                             <li>What Information is Required for Obtaining Payment Bank Licence?</li>
                            </a>
                            <a href="#BusinessPlanReq" className="scrollTo">
                             <li>Business Plan Requirements for Payment Bank</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                             <li>Procedure to Obtain a Payment Bank License</li>
                            </a>
                            <a href="#ScopeOfActivities" className="scrollTo">
                             <li>Scope of Activities After Obtaining Payment Bank License</li>
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
                <p className="small-heading text-center">What is Payment Banks?</p>
                <div>
                    <Image alt="What is Payment Banks?" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}