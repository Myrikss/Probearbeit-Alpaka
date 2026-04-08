import SectionContainer from '../layout/SectionContainer';

const HighlightCard = () => {
  return (
    <section className="py-12 bg-white">
      <SectionContainer>
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden min-h-[480px] shadow-sm border border-gray-100">
          
          <div className="w-full md:w-[38%] bg-[#0099C2] p-10 md:p-14 flex flex-col justify-between text-white">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1]">
                Enim nulla facilisis <br /> viverra lobortis
              </h2>
              <p className="text-[15px] md:text-base opacity-90 leading-relaxed font-light max-w-sm">
                Lectus orci lectus in leo vel a. Venenatis sagittis nunc fermentum urna morbi. 
                Sed luctus mi vulputate posuere quis. 
                Amet dolor rhoncus tincidunt porta faucibus lorem in integer et.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="px-9 py-3.5 bg-white text-black font-bold rounded-full text-[14px] hover:bg-gray-100 transition-all active:scale-95">
                Read more
              </button>
            </div>
          </div>

          <div className="w-full md:w-[62%] relative bg-gray-200">
            <img 
              src="/src/assets/highlight.jpg"
              alt="Highlight Visual"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
        </div>
      </SectionContainer>
    </section>
  );
};

export default HighlightCard;