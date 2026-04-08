import SectionContainer from './layout/SectionContainer';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-70 h-[88px] flex items-center sticky top-0 z-50">
      <SectionContainer className="flex justify-between items-center w-full">
        
        <div className="flex items-center">
          <img 
            src="/src/assets/logo/logo-default-title.svg"
            alt="Logoips" 
            className="h-8 w-auto"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#blog" className="text-caption font-bold hover:text-brand-green transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="#products" className="text-caption font-bold hover:text-brand-green transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#about" className="text-caption font-bold hover:text-brand-green transition-colors">
              About
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button className="text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </SectionContainer>
    </nav>
  );
};

export default Navbar;