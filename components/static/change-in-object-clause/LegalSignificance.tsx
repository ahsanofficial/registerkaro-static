import dft from "../../../assets/images/static/change-in-object-clause/pre-incorporation.svg";
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const LegalSignificance = ({ cityName }: HeroProps) => {
    return (
        <div id="LegalSignificance">
            <p className="main-para">Following are the legal significances of the object clause in a contract:</p>
            <div className='legalSignificance flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Legal Significance of Object Clause"
                            className="LegalSignificance-img w-100 Importance-img-h-100"
                            height={325}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p><strong>1. </strong>Defines the scope of the company’s work</p>
                    <p><strong>2. </strong>Limits the unlimited corporate power</p>
                    <p><strong>3. </strong>Determines the legal validity</p>
                    <p><strong>4. </strong>Protects the interest of the shareholders</p>
                    <p><strong>5. </strong>Prevents unauthorised activities of anyone related to the company by making them liable</p>
                    <p><strong>6. </strong>Helps in defining the legal intent of the parties involved</p>
                    <p><strong>7. </strong>Gives clarity for legal regulatory</p>
                </div>                
            </div>
        </div>
    )
}