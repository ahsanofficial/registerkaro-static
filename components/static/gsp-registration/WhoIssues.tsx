import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const WhoIssues = () => {
    return (
        <div id="WhoIssues">
            <p className="main-para">The Government of India has launched various agencies to issue Certificate of Origin. To issue CoO under GSP following agencies have been nominated and are available to accept the application online on the common portal to issue the Certificate.</p>
            <div className='whoIssues flex w-80 m-auto mobile-flex-column-reverse'>
                <div className="flex-7">
                    <p><strong>1. </strong>Export Inspection Council</p>
                    <p><strong>2. </strong>Textiles Committee</p>
                    <p><strong>3. </strong>Marine Products Export Development Authority</p>
                    <p><strong>4. </strong>Directorate General of Foreign Trade</p>
                    <p><strong>5. </strong>Tobacco Board</p>
                    <p><strong>6. </strong>Noida Special Economic Zone</p>
                    <p><strong>7. </strong>Kandla Special Economic Zone etc.</p>
                </div>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Who issues GSP Certificate of Origin in India?"
                            className="WhoIssues-img w-100 img-h-100"
                            height={300}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}