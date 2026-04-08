import { useRef, useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import BlogCard from './ui/BlogCard';

const blogPosts = [
  { id: 1, title: "Lorem Ipsum", image: "/src/assets/blog/blog-1.jpg" },
  { id: 2, title: "Lorem Ipsum", image: "/src/assets/blog/blog-2.jpg" },
  { id: 3, title: "Lorem Ipsum", image: "/src/assets/blog/blog-3.jpg" },
  { id: 4, title: "Lorem Ipsum", image: "/src/assets/blog/blog-4.jpg" },
  { id: 5, title: "Lorem Ipsum", image: "/src/assets/blog/blog-5.jpg" },
  { id: 6, title: "Lorem Ipsum", image: "/src/assets/blog/blog-6.jpg" },
  { id: 7, title: "Lorem Ipsum", image: "/src/assets/blog/blog-7.jpg" },
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      const progress = scrollLeft / totalScroll;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-headline-h2 mb-6">Blog</h2>
          <p className="text-body text-gray-600">
            Diam enim suscipit habitant ac nunc arcu commodo pulvinar massa. 
            Odio pellentesque fusce elit facilisi risus blandit dictum turpis erat.
          </p>
        </div>

        <div className="mb-10 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex justify-start gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0 md:flex-wrap">
            {['Show All', 'City', 'Forest', 'Water'].map((tag, index) => (
              <button 
                key={tag}
                className={`flex-shrink-0 px-5 py-2 rounded-full border text-[13px] font-bold transition-all
                  ${index === 2 ? 'bg-black text-white border-black' : 'bg-gray-50 border-transparent text-gray-600 hover:border-gray-300'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </SectionContainer>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-20 pointer-events-none">
          <button onClick={() => scroll('left')} className={`w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center pointer-events-auto transition-opacity ${scrollProgress <= 0 ? 'opacity-0' : 'opacity-100'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={() => scroll('right')} className={`w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center pointer-events-auto transition-opacity ${scrollProgress >= 0.99 ? 'opacity-0' : 'opacity-100'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
          style={{ 
            paddingLeft: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
            paddingRight: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
            WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
          }}
        >
          {blogPosts.map((post) => (
            <div key={post.id} className="flex-shrink-0 w-[280px] md:w-[350px]">
              <BlogCard title={post.title} image={post.image} />
            </div>
          ))}
        </div>
      </div>
      
      <SectionContainer>
        <div 
          ref={barRef}
          className="mt-12 relative w-full h-[2px] bg-gray-100 overflow-hidden"
        >
          <div 
            className="absolute top-0 h-full bg-gray-400 transition-transform duration-150 ease-out"
            style={{ 
              width: '200px', 
              transform: `translateX(${
                scrollProgress * (barRef.current ? barRef.current.offsetWidth - 200 : 0)
              }px)` 
            }}
          ></div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default BlogSection;