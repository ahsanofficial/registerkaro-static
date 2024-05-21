import Image from "next/image"
import credibility from "../../../assets/images/icons/private-limited-company-registration/Benefits/credibility.svg"
import funding from "../../../assets/images/icons/private-limited-company-registration/Benefits/funding.svg"
import legal_entity from "../../../assets/images/icons/private-limited-company-registration/Benefits/legal_entity.svg"
import limited_liablity from "../../../assets/images/icons/private-limited-company-registration/Benefits/limited_liablity.svg"
import star from "../../../assets/images/icons/private-limited-company-registration/Benefits/star.svg"



const list_items = [
  {
    "details":"separate legal entity",
    "icon":legal_entity
  },
  {
    "details":"limited liabilty",
    "icon":limited_liablity
    
  },
  {
    "details":"Improves Credibility",
    "icon":credibility
  },
  {
    "details":"attracts funding",
    "icon":funding
  }
]
export default function Benefits() {


  return (
    <div className="p-three-benefits-container">
        <div className="btn-desk"> <button>
            <span>N</span>
            <span>E</span>
            <span>W</span>
            <span>&nbsp;</span>
            <span>R</span>
            <span>E</span>
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
            <span>S</span>
            <span>&nbsp;</span>
            <Image src={star} alt="star"  />
            
        </button></div>
        <div className="btn-tablet">
                <button><span>New reviews</span><Image src={star} alt="star"  /></button>
            </div>
      
       

        <div className="container" >
          <div className="heading">
            <h2 className="desk-font">Why register Pvt Ltd Company  </h2>
           
            <div className="line"></div>
          </div>
          <div className="cards">
           {
            list_items.map((item,index)=>(
              <div className="item" key={index}>
                <div className="item-content">
                    <Image src={item.icon} alt={item.details}  />
                    <p>{item.details}</p>
                </div>
              
              </div>
            ))
          }
          </div>
        </div>
      
    </div>
  );
}
