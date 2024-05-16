import dft from "../../../assets/images/static/petrol-pump-license/The licenses and certificates required to open a Petrol Pump.svg";
import Image from 'next/image';

export const LicenseCertificatedRequired = () => {
    return (
        <div id="LicenseCertificatedRequired">
            <p className="main-para">An application needs to be granted specific certifications and permission in order to operate a gas station successfully. Below are a few instances:</p>
            <div className='licenseCertificatedRequired flex w-80 m-auto mobile-flex-column-reverse'>
                
                <div className="flex-7">
                    <p><strong>1. </strong>Certificate of No Objection From The Governing Body</p>
                    <p><strong>2. </strong>Authorization From The MCA</p>
                    <p><strong>3. </strong>Certification of the Fire Safety Office and No Objection Certificate from Associated Authorities</p>
                </div>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="The licenses and certificates required to open a Petrol Pump"
                            className="LicenseCertificatedRequired-img w-100 Importance-img-h-100"
                            height={150}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>      
            </div>
        </div>
    )
}