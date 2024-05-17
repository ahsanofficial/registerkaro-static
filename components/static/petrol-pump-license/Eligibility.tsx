import dft from "../../../assets/images/static/petrol-pump-license/eligibilityForLicense.svg";
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Eligibility = ({ cityName }: HeroProps) => {
    return (
        <div id="Eligibility">
            <p className="main-para">The following qualifying requirements must be fulfilled in order to obtain a fuel pump license:</p>
            <div className='eligibility flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Eligibility for a license to operate a Petrol Pump"
                            className="Importance-img-h-100 w-100"
                            height={300}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p><strong>1. </strong>The candidate needs to be an Indian citizen.</p>
                    <p><strong>2. </strong>The candidate must be an Indian resident or have spent more than 182 days in {cityName} during the previous fiscal year.</p>
                    <p><strong>3. </strong>The applicant's age must fall between 21 and 58 years old.</p>
                    <p><strong>4. </strong>You Must Present Documentation of Your Identity.</p>
                    <p><strong>5. </strong>The applicant's age must be confirmed by providing copies of their birth certificate, passport, secondary school leaving certificate, matriculation certificate, etc.</p>
                </div>            
            </div>
        </div>
    )
}