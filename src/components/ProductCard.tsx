interface ProductCardProps {
  title: string;
  description: string;
  bgColorClass: string;
  image: string;
}

const ProductCard = ({ title, description, bgColorClass, image }: ProductCardProps) => {
  return (
    <div className={`${bgColorClass} rounded-[20px] p-8 flex flex-col h-full text-white transition-transform hover:scale-[1.02] duration-300 group`}>
      <div className="flex-1 flex items-center justify-center mb-8">
        <img 
          src={image} 
          alt={title} 
          className="max-w-full h-auto object-contain"
        />
      </div>

      <div className="mt-auto">
        <h3 className="text-headline-h3 mb-3">{title}</h3>
        <p className="text-body opacity-90 line-clamp-3 mb-6">
          {description}
        </p>

        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-colors hover:bg-brand-green-light">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#4B4B4B]"
          >
            <path 
              d="M2 12H22" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeMiterlimit="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M15 5L22 12L15 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeMiterlimit="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;