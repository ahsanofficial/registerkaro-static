import certificate from '../../../assets/images/static/rubber-board-registration/What is Rubber Board Registration_.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'> Rubber Board Board of India was set up, to develop the rubber industry in the country, under the Union of Rubber Industry under the Ministry of Commerce and Industry. It was established in 1947, immediately after independence. The primary goal of this board is to encourage sustainable development and foster the growth of natural rubber and products related to rubber.</p>
              
              <p>Purpose:</p>
              <p>1. Development of Rubber Industry</p>
              <p>2. Research and Development related to Rubber</p>
              <p>3. Development in Rubber production technology</p>
              <p>4. Provides Quality Assurance with the products</p>
              <p>5. Regulatory Functions for compliance with the laws</p>
              <p>6. Helps in preparing Market strategy</p>
              <p>7. Promoting Export in the country</p>
              <p>8. Creating consumer awareness</p>
              <p>9. Collect important and helpful information in the form of statistics from rubber-using industries in India</p>
              <p>10. Encourage and promote participation in international trade and conferences related to rubber.</p>

                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Eligibility</li>
                            </a>
                            <a href="#ProcessRegistration" className="scrollTo">
                                <li>process</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                            <a href="#CapitalRequirement" className="scrollTo">
                                <li>Types</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits</li>
                            </a>
                            
                            
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How does Register Karo help ?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Rubber Board Registration</p>
                <div>
                    <Image alt=" Rubber Board Board of India was set up, to develop the rubber industry in the country" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}