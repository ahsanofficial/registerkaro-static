
interface HeroProps {
  cityName: string;
}

export const NBFCsBasedAsset = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='NBFCsBasedAsset'>
      <div className='flex-5'>
    
        <p><strong>Systematically Important NBFCs [NBFC-ND-SI]:</strong> Systematically important NBFCs or NBFC-SI are those NBFC possessing the net assets of Rs 500 crore or more as per the latest audited balance sheet.</p>
        <p><strong>Non-systematically Important NBFCs:</strong> Non-systematically important NBFCs are such NBFCs which possess the net assets up to Rs 500 crore as  per the latest audited balance sheet.</p> 
      </div>
      
      
    </div>
  )
}