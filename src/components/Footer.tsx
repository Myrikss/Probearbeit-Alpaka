import SectionContainer from './layout/SectionContainer';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F2F2F2] pt-16">
      <SectionContainer>
        <div className="flex justify-center mb-16">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95 group"
            aria-label="Scroll to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14L12 10L16 14" stroke="#4B4B4B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
          
          <div className="flex flex-col items-start">
            <h4 className="font-bold text-[15px] mb-6 text-black">Loremipsum GmbH</h4>
            <div className="text-[14px] text-gray-600 space-y-1 leading-relaxed mb-6">
              <p>Musterstraße 16</p>
              <p>1245 Musterstadt</p>
              <p className="pt-2">Telefon: 0123 / 456789-10</p>
              <p>Telefax: 0123 / 456789-11</p>
            </div>
            <button className="px-6 py-2.5 bg-[#4B4B4B] text-white text-[13px] font-bold rounded-lg hover:bg-black transition-colors">
              Zur Kontaktseite
            </button>
          </div>

          <div>
            <h4 className="font-bold text-[15px] mb-6 text-black">Corporate</h4>
            <ul className="text-[14px] text-gray-600 space-y-3">
              <li><a href="#" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Who we are</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[15px] mb-6 text-black">Products</h4>
            <ul className="text-[14px] text-gray-600 space-y-3">
              {['Product-A', 'Product-B', 'Product-C', 'Product-D', 'Product-E', 'Product-F', 'Product-G'].map(item => (
                <li key={item}><a href="#" className="hover:text-black transition-colors">{item}</a></li>
              ))}
              <li className="pt-2 font-bold text-black hover:underline cursor-pointer transition-all">Show all</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[15px] mb-6 text-black">Service</h4>
            <ul className="text-[14px] text-gray-600 space-y-3 mb-10">
              <li><a href="#" className="hover:text-black transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
            <a href="#" className="flex items-center gap-3 text-[14px] text-gray-600 hover:text-black transition-colors">
              <div className="w-6 h-4 bg-[#4B4B4B] rounded-[4px] flex items-center justify-center">
                <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
              Youtube
            </a>
          </div>
        </div>
      </SectionContainer>

      <div className="bg-white py-8 border-t border-gray-100">
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 gap-4">
            <p>© 2023 Loremipsum GmbH</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black transition-colors">Impressum</a>
              <a href="#" className="hover:text-black transition-colors">Datenschutz</a>
            </div>
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
};

export default Footer;