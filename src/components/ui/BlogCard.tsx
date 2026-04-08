interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard = ({ image, title }: BlogCardProps) => {
  return (
    <div className="min-w-[280px] md:min-w-[320px] aspect-[3/4] relative rounded-[20px] overflow-hidden group cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%]">
        <div className="bg-white py-3 px-6 rounded-full text-center shadow-lg">
          <span className="text-black font-bold text-[14px] whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;