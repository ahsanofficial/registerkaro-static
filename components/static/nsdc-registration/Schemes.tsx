import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsdc-registration/NSDC’s Schemes and Initiatives.svg";


export const Schemes = () => {
  return (
    <div id="Schemes">
        <p className="main-para">Once you register with NSDC, you can apply for various schemes based on your eligibility and needs. These schemes and initiatives are as follows:</p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="NSDC’s Schemes and Initiatives"
            className="Importance-img-h-100 w-100"
            height={980}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li><strong>Pradhan Mantri Kaushal Vikas Yojana (PMKVY): </strong>Managed by NSDC, this government initiative, under the Minister of Skill Development and Entrepreneurship (MSDE), offers skill training to Indian youths in industries to help them secure employment and earn a living.</li>
            <li><strong>Pradhan Mantri Kaushal Kendra: </strong>This scheme encourages vocational training to enhance the skills of Indian youths. The MSDE plans to establish Model Training Centres (MTCs) in cities and districts as part of this initiative.</li>
            <li><strong>India International Skill Centre (IISC) Network: </strong>This platform facilitates international workforce opportunities for Indians. It includes Member Organizations operating through various fixed centres known as IISC.</li>
            <li><strong>Technical Training Intern Program (TITP): </strong>Initiated in 2017 through a memorandum of cooperation between Japan's Welfare, the Indian government, MSDE, the Ministry of Foreign Affairs, and the Ministry of Health. NSDC selects organizations and sends skilled youths to Japan for technical internships.</li>
            <li><strong>Skill Impact Bond: </strong>This initiative has supported over 50,000 young people in India for more than 4 years, with 60% being women and girls. They receive training for skills needed in various sectors for COVID-19 recovery.</li>
            <li><strong>Seekho Aur Kamao: </strong>Implemented in the Union Territories of Jammu and Kashmir, and Ladakh, this scheme focuses on skill development for minorities in these areas.</li>
            <li><strong>SWADES: </strong>Through the Vande Bharat Mission, the Indian government is mapping the skills of overseas returning citizens. They are required to fill out the SWADES skill card to connect with Indian and foreign companies for opportunities.</li>
            <li><strong>Udaan: </strong>A project initiated by the Ministry of Housing under NSDC, Udaan targets the educated and unemployed youth of Jammu and Kashmir, enhancing their skills and providing exposure to practical industry conditions.</li>
          </ol>
        </div>
      </div>
        <p className="main-para">Now that you have comprehensive knowledge about NSDC, its courses, schemes, and initiatives, you can easily choose to register. Whether you opt for NSDC registration as a partner or a training provider, NSDC acts as a nurturer for India’s youth, aiding in the growth of their skills. It offers a diverse range of courses, supports various skill development schemes, and collaborates with numerous institutions and individuals to achieve its objectives.<br />
        Whether you're a young individual aiming to enhance your skills, an institution seeking affiliation, or someone interested in partnering with NSDC, there are ample opportunities available and the expert team of professionals at RegisterKaro can ensure you a streamlined registration process that too at affordable rates. Feel free to contact us for any queries.</p>
    </div>
  );
};
