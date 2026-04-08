interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  bgColorClass: string;
}

const ProductCard = ({ title, description, image, bgColorClass }: ProductCardProps) => {
  return (
    <div className={`rounded-3xl overflow-hidden ${bgColorClass} flex flex-col items-center justify-between aspect-[3/4] md:aspect-auto md:min-h-[500px]`}>
      
      <div className="flex-grow flex items-center justify-center p-8 md:p-12 md:pb-6">
        <img 
          src={image} 
          alt={title} 
          className="max-h-[70%] md:max-h-[220px] object-contain"
        />
      </div>

      <div className="hidden md:block w-full bg-white/5 p-8 pt-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center group hover:bg-brand-green transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black group-hover:text-white transition-colors">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  );
};

export default ProductCard;