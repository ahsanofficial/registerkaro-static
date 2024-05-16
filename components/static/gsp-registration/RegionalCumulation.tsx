import dft from "../../../assets/images/static/gsp-registration/three.svg";
import Image from 'next/image';

export const RegionalCumulation = () => {
    return (
        <div id="RegionalCumulation">
            <p className="main-para">The groups that may benefit from this are:</p>
            <div className='regionalCumulation flex w-80 m-auto mobile-flex-column-reverse'>
                <div className="flex-7">
                    <p><strong>1. </strong>Regional Cumulation refers to grouping beneficiary countries for origin cumulation purposes under GSP.</p>
                    <p><strong>2. </strong>Cumulation allows a product to attain originating status based on the work done in the last processing country, even if it doesn't meet normal origin rules.</p>
                    <p><strong>3. </strong>Products manufactured in one beneficiary country within a regional group can undergo further processing in another beneficiary country within the same group, qualifying them as originating from the country of further manufacture.</p>
                </div>
                <div className='flex-3'>
                    <div>
                        <Image
                            alt="Regional cumulation of origin"
                            className="RegionalCumulation-img w-100 img-h-100"
                            height={250}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
            </div>           
        </div>
    )
}