import { useState } from 'react';
import SectionContainer from './layout/SectionContainer';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 md:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 md:py-0 md:mb-6 group"
      >
        <h4 className="font-bold text-[15px] text-black text-left">{title}</h4>
        <svg 
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
          className={`text-gray-400 transition-transform md:hidden ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block pb-6 md:pb-0`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F2F2F2] pt-12 md:pt-16">
      <SectionContainer>
        <div className="flex justify-center mb-12 md:mb-16">
          <button onClick={scrollToTop} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14L12 10L16 14" stroke="#4B4B4B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-12 pb-16 md:pb-20">
          
          <FooterColumn title="Loremipsum GmbH">
            <div className="text-[14px] text-gray-600 space-y-1 leading-relaxed mb-6">
              <p>Musterstraße 16</p>
              <p>1245 Musterstadt</p>
              <p className="pt-2">Telefon: 0123 / 456789-10</p>
              <p>Telefax: 0123 / 456789-11</p>
            </div>
            <button className="px-6 py-2.5 bg-[#4B4B4B] text-white text-[13px] font-bold rounded-lg hover:bg-black transition-colors">
              Zur Kontaktseite
            </button>
          </FooterColumn>

          <FooterColumn title="Corporate">
            <ul className="text-[14px] text-gray-600 space-y-3">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Who we are</a></li>
              <li><a href="#" className="hover:text-black">Team</a></li>
              <li><a href="#" className="hover:text-black">Jobs</a></li>
              <li><a href="#" className="hover:text-black">Development</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Products">
            <ul className="text-[14px] text-gray-600 space-y-3">
              {['Product-A', 'Product-B', 'Product-C', 'Product-D', 'Product-E'].map(item => (
                <li key={item}><a href="#" className="hover:text-black">{item}</a></li>
              ))}
              <li className="pt-2 font-bold text-black hover:underline cursor-pointer">Show all</li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Service">
            <ul className="text-[14px] text-gray-600 space-y-3 mb-10 md:mb-8">
              <li><a href="#" className="hover:text-black">Downloads</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
            </ul>
            <a href="#" className="flex items-center gap-3 text-[14px] text-gray-600 hover:text-black">
              <div className="w-6 h-4 bg-[#4B4B4B] rounded-[4px] flex items-center justify-center">
                <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
              Youtube
            </a>
          </FooterColumn>

        </div>
      </SectionContainer>

      <div className="bg-white py-8 border-t border-gray-100">
        <SectionContainer>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center text-[12px] text-gray-500 gap-6 md:gap-4">
            <p>© 2023 Loremipsum GmbH</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black">Impressum</a>
              <a href="#" className="hover:text-black">Datenschutz</a>
            </div>
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
};

export default Footer;