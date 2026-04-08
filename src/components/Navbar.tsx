import { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import Button from './ui/Button';

const Megamenu = () => {
  const productLinks = ["Product-A", "Product-B", "Product-C", "Product-D", "Product-E", "Product-F", "Product-G"];

  return (
    <div className="absolute top-[88px] left-0 w-full bg-white shadow-2xl border-b border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
      <SectionContainer className="py-12 flex gap-20">
        
        <div className="w-1/4">
          <h3 className="text-headline-h3 text-black mb-6">Products</h3>
          <div className="flex flex-wrap gap-2">
            {productLinks.map(link => (
              <button key={link} className="px-4 py-2 bg-gray-50 hover:bg-brand-green hover:text-white rounded-full text-[13px] font-bold transition-colors">
                {link}
              </button>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 mt-8 text-[14px] font-bold text-black hover:text-brand-green uppercase tracking-wider underline">
            <span>Show all</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="bg-prod-e-dark rounded-xl h-48 flex items-center justify-center mb-4 transition-transform hover:scale-[1.02]">
              <img src="/src/assets/product.png" alt="Product A" className="h-32 object-contain" />
            </div>
            <h4 className="text-headline-h4 text-black mb-2">Product A</h4>
            <p className="text-body text-gray-600 mb-4 text-sm line-clamp-2">
              At proin ipsum morbi turpis viverra nisl et. Sapien sed leo mt. Sapien sed leo mt.
            </p>
            <Button label="Read more" variant="outline" className="self-start text-[12px] py-2 px-6" showArrow />
          </div>

          <div className="flex flex-col">
            <div className="bg-prod-g-blue rounded-xl h-48 flex items-center justify-center mb-4 transition-transform hover:scale-[1.02]">
              <img src="/src/assets/product.png" alt="Product B" className="h-32 object-contain" />
            </div>
            <h4 className="text-headline-h4 text-black mb-2">Product B</h4>
            <p className="text-body text-gray-600 mb-4 text-sm line-clamp-2">
              Ante elit congue arcu elementum. Sit diam nisl ultrices cursus. Ante elit congue arcu elementum.
            </p>
            <Button label="Read more" variant="outline" className="self-start text-[12px] py-2 px-6" showArrow />
          </div>
        </div>

      </SectionContainer>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="w-full bg-white border-b border-gray-70 h-[88px] flex items-center sticky top-0 z-50"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <SectionContainer className="flex justify-between items-center w-full relative h-full">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/src/assets/logo/logo-default-title.svg"
            alt="Logoips" 
            className="h-8 w-auto cursor-pointer"
          />
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 h-full">
            {/* Blog */}
            <li className="h-full flex items-center border-b-2 border-transparent">
                <a href="#blog" className="text-caption font-bold hover:text-brand-green">Blog</a>
            </li>
            
            {/* Products - hier wird der Border bei Hover/Menu grün */}
            <li 
                className={`h-full flex items-center cursor-pointer border-b-2 transition-all ${
                isMenuOpen ? 'border-brand-green' : 'border-transparent'
                } hover:border-brand-green`}
                onMouseEnter={() => setIsMenuOpen(true)}
            >
                <span className={`text-caption font-bold ${isMenuOpen ? 'text-brand-green' : 'text-black'}`}>
                Products
                </span>
            </li>

            {/* About */}
            <li className="h-full flex items-center border-b-2 border-transparent">
                <a href="#about" className="text-caption font-bold hover:text-brand-green">About</a>
            </li>
            </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </SectionContainer>

      {/* Das Megamenu */}
      {isMenuOpen && <Megamenu />}
    </nav>
  );
};

export default Navbar;