import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Make in India Certification ensures that a company and the products associated with it are manufactured in India, this is a compliance that companies have to adhere to while bringing their product into existence, this helps strengthen the Indian Industries and promotes local manufacturing and the local workers in the domestic area of the country.</p>
                <p className="text-justify"><strong>1. Class of certification :</strong>Classification is done based on local suppliers as per the standards of DPIIT(Department for Promotion of Industries and Internal Trade)</p>
                <p className="text-justify"><strong>2. Local Supplier :</strong>Local Supplier is further divided into two classes, class is based on the percentage of the Indian materials used in these products</p>
                <p className="text-justify"><strong>3. Class-I :</strong>Any product or service that has a percentage of Indian Materials in a product is available for procurement which is more than equal to 50%, then it is classified as Class-I.</p>
                <p className="text-justify"><strong>4. Class-II :</strong>Any product or service that has a percentage of Indian Materials that is available for procurement which is less than 50% and more than 20%.</p>
                <p className="text-justify"><strong>5. Non-Local Supplier :</strong>The percentage of Indian Materials, available for procurement is less than 20% or equivalent to 20%.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits</li>
                            </a>
                            <a href="#RegistrationProcess" className="scrollTo">
                             <li>Registration Process</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                             <li>Documents Required</li>
                            </a>
                            <a href="#CostOfCertification" className="scrollTo">
                             <li>Cost of certification</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How does RegisterKaro help?</li>
                            </a>

                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">What is Make in India Certification?</p>
                <div>
                    <Image alt="What is Make in India Certification?" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}