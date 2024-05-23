import certificate from '../../../assets/images/static/change-in-object-clause/Change in Object Clause_.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-6'>
                <p className='text-justify'>A contract contains various clauses, one of the clauses is an object clause. An object clause may be used as a specific clause, as a part of the contract. The following is the purpose of object clauses in a contract:</p>
                <p className='text-justify'><strong>1. </strong>Defining the purpose of the contract</p>
                <p className='text-justify'><strong>2. </strong>Scope, Obligation and the limits of the contract </p>
                <p className='text-justify'><strong>3. </strong>Prevents ambiguity in understanding the purpose of the contract</p>
                <p className='text-justify'><strong>4. </strong>Provides the scope of interpretation in the contract</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#LegalSignificance" className="scrollTo">
                                <li>Legal Significance of Object Clause</li>
                            </a>
                            <a href="#ReasonsForChanging" className="scrollTo">
                                <li>Reasons for changing the object clause</li>
                            </a>
                            <a href="#ProcessOfChanging" className="scrollTo">
                                <li>Process of changing an object clause</li>
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
            <div className='flex-4'>
                <p className="small-heading text-center">Change in Object Clause</p>
                <div>
                    <Image alt="What is an object clause?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}