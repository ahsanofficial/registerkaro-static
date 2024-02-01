import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import logo from '../../assets/images/sitemap.png';
import footerData from '../../assets/data/footer.json';

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", link: "https://in.linkedin.com/company/registerkaro", icon: <LinkedinLogo size={24} /> },
    { name: "Twitter", link: "https://mobile.twitter.com/registerkaro", icon: <TwitterLogo size={24} /> },
    { name: "Instagram", link: "https://www.instagram.com/registerkaro_/", icon: <InstagramLogo size={24} /> },
    { name: "WhatsApp", link: "https://www.wa.me/917836986460", icon: <WhatsappLogo size={24} /> },
    { name: "Facebook", link: "https://m.facebook.com/profile.php?id=100067890646061&_rdr", icon: <FacebookLogo size={24} /> },
  ];
  const { START_A_BUSINESS, Government_Registrations, compliance_tax, BIS_CDSCO } = footerData;

  return (
    <section className="footer-bg footer-new">
      <div className="container text-muted fw-bold pt-5">
        <footer className="text-center text-md-start">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <p className="fw-bold mb-4 text-orange">START A BUSINESS</p>
              <hr />
              {START_A_BUSINESS.map((item, index) => (
                <p key={index} className="mt-2 fs-small">
                  <Link href={item.link} className="text-white">{item.content}</Link>
                </p>
              ))}
            </div>
            <div className="col-md-3 mx-auto text-center">
              <p className="fw-bold mb-4 text-orange">GOVERNMENT REGISTRATION</p>
              <hr />
              {Government_Registrations.map((item, index) => (
                <p key={index} className="mt-2 fs-small">
                  <Link href={item.link} className="text-white">{item.content}</Link>
                </p>
              ))}
            </div>
            <div className="col-md-3 mx-auto text-center">
              <p className="fw-bold mb-4 text-orange">COMPLIANCE & TAX</p>
              <hr />
              {compliance_tax.map((item, index) => (
                <p key={index} className="mt-2 fs-small">
                  <Link href={item.link} className="text-white">{item.content}</Link>
                </p>
              ))}
            </div>
            <div className="col-md-3 mx-auto text-md-end">
              <p className="fw-bold mb-4 text-orange">BIS & CDSCO</p>
              <hr />
              {BIS_CDSCO.map((item, index) => (
                <p key={index} className="mt-2 fs-small">
                  <Link href={item.link} className="text-white">{item.content}</Link>
                </p>
              ))}
            </div>

          </div>

          <div className="services-btn cursor-pointer">
            <Link href="/sitemap" className="text-white">See all the services</Link>
          </div>

          <div className="footer-medium text-white">
            <div>
              <div className="social">
                <Link href="https://www.facebook.com/" target="_blank" className="social-icons1_link w-inline-block">
                  <div className="social-icon-2 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="CurrentColor"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" className="social-icons1_link w-inline-block">
                  <div className="social-icon-2 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://twitter.com/" target="_blank" className="social-icons1_link w-inline-block">
                  <div className="social-icon-2 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.9728 6.7174C20.5084 7.33692 19.947 7.87733 19.3103 8.31776C19.3103 8.47959 19.3103 8.64142 19.3103 8.81225C19.3154 11.7511 18.1415 14.5691 16.0518 16.6345C13.962 18.6999 11.1312 19.8399 8.19405 19.7989C6.49599 19.8046 4.81967 19.4169 3.29642 18.6661C3.21428 18.6302 3.16131 18.549 3.16162 18.4593V18.3604C3.16162 18.2313 3.26623 18.1267 3.39527 18.1267C5.06442 18.0716 6.67402 17.4929 7.99634 16.4724C6.48553 16.4419 5.12619 15.5469 4.5006 14.1707C4.46901 14.0956 4.47884 14.0093 4.52657 13.9432C4.57429 13.8771 4.653 13.8407 4.73425 13.8471C5.19342 13.8932 5.65718 13.8505 6.1002 13.7212C4.43239 13.375 3.17921 11.9904 2.99986 10.2957C2.99349 10.2144 3.02992 10.1357 3.096 10.0879C3.16207 10.0402 3.24824 10.0303 3.32338 10.062C3.77094 10.2595 4.25409 10.3635 4.74324 10.3676C3.28184 9.40846 2.65061 7.58405 3.20655 5.92622C3.26394 5.76513 3.40181 5.64612 3.5695 5.61294C3.73718 5.57975 3.90996 5.63728 4.02432 5.76439C5.99639 7.86325 8.70604 9.11396 11.5819 9.25279C11.5083 8.95885 11.4721 8.65676 11.4741 8.35372C11.501 6.76472 12.4842 5.34921 13.9634 4.76987C15.4425 4.19054 17.1249 4.56203 18.223 5.71044C18.9714 5.56785 19.695 5.31645 20.3707 4.96421C20.4202 4.93331 20.483 4.93331 20.5325 4.96421C20.5634 5.01373 20.5634 5.07652 20.5325 5.12604C20.2052 5.87552 19.6523 6.50412 18.9509 6.92419C19.5651 6.85296 20.1685 6.70807 20.7482 6.49264C20.797 6.45942 20.8611 6.45942 20.9099 6.49264C20.9508 6.51134 20.9814 6.54711 20.9935 6.59042C21.0056 6.63373 20.998 6.68018 20.9728 6.7174Z" fill="CurrentColor"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank" className="social-icons1_link w-inline-block">
                  <div className="social-icon-2 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="CurrentColor"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.youtube.com/" target="_blank" className="social-icons1_link w-inline-block">
                  <div className="social-icon-2 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5399 4.33992L19.9999 4.48992C21.7284 4.68529 23.0264 6.16064 22.9999 7.89992V16.0999C23.0264 17.8392 21.7284 19.3146 19.9999 19.5099L18.5999 19.6599C14.2315 20.1099 9.82835 20.1099 5.45991 19.6599L3.99991 19.5099C2.27143 19.3146 0.973464 17.8392 0.999909 16.0999V7.89992C0.973464 6.16064 2.27143 4.68529 3.99991 4.48992L5.39991 4.33992C9.76835 3.88995 14.1715 3.88995 18.5399 4.33992ZM11.1099 15.2199L14.9999 12.6199H15.0599C15.2695 12.4833 15.3959 12.2501 15.3959 11.9999C15.3959 11.7497 15.2695 11.5165 15.0599 11.3799L11.1699 8.77992C10.9402 8.62469 10.6437 8.60879 10.3987 8.73859C10.1538 8.86839 10.0004 9.12271 9.99991 9.39992V14.5999C10.0128 14.858 10.1576 15.0913 10.3832 15.2173C10.6088 15.3433 10.8834 15.3443 11.1099 15.2199Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="heading-para">
                <h3>Elevate Your Business with RegisterKaro</h3>
                <p>As a leading technology-driven legal services and advisory firm, we empower SMEs and entrepreneurs on their business journey. Our expert team covers business registration, legal compliance, tax filing, IPR registration, and more. With over 200 professionals, we've served 50,000+ satisfied customers, ensuring startup compliance with our country's legal and regulatory systems.</p>
              </div>
              <div className="heading-para">
                <h3>Navigating Regulatory Affairs</h3>
                <p>In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI hold the keys to licenses and registrations for banks, financial institutions, and insurance businesses. We simplify this process by connecting you with our legal professionals. We understand your needs, handle license or registration applications, liaise with authorities, and deliver the licenses you require.</p>
              </div>
              <div className="heading-para">
                <h3>Environmental Solutions</h3>
                <p>RegisterKaro offers a comprehensive range of services to address environmental challenges in business. Our seasoned environmental experts, with over a decade of experience, provide comprehensive solutions for environmental compliance and advisory, including battery waste management, plastic waste management, and e-waste management.</p>
              </div>
              <div className="heading-para">
                <h3>Business Registration Expertise</h3>
                <p>We are renowned for facilitating business registration, whether it's as a private limited company, one-person company, Section 8 company, LLP, public company, or Nidhi company. Our consultancy services extend from business setup from scratch to ongoing compliance.</p>
              </div>
              <div className="heading-para">
                <h3>Safeguarding Intellectual Property</h3>
                <p>Intellectual property protection is vital for modern businesses. Our team excels in IP registration services such as trademark registration, handling objections, managing assignments, copyright registration, and patent registration.</p>
              </div>
              <div className="heading-para">
                <h3>Simplifying Taxation</h3>
                <p>RegisterKaro is your all-in-one solution for tax-related needs. Our dedicated professionals assist with GST registration, professional tax registration, GST return filing, TDS return filing, income tax return filing, and secretarial audits. Your tax matters are in capable hands with RegisterKaro.</p>
              </div>
            </div>
          </div>
          <div className="hr"></div>
          <div className='text-white text-center footer-bottom'>
            <p>By continuing this page, you agree to our <Link href="/terms-and-conditions">Terms & Conditions, Privacy Policy and Refund Policy.</Link></p>
            <p>© 2023 - Safe Ledger Private Limited. All rights reserved.</p>
            <p>Please note that we are a facilitating platform enabling access to reliable professionals. We are not a law firm and do not provide legal services ourselves. The information on this website is for the purpose of knowledge only and should not be relied upon as legal advice or opinion.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;