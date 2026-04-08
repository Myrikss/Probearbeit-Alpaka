import SectionContainer from './layout/SectionContainer';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center bg-gray-900 text-white overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/bg-img.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <SectionContainer className="relative z-10 flex flex-col items-center">
        <div className="max-w-[800px] text-center">
          <h1 className="text-headline-h1 text-white mb-6">
            The start of a great adventure.
          </h1>
          
          <p className="text-intro text-white mb-10 mx-auto max-w-[600px]">
            Porta dui sed mattis odio cras integer sapien proin diam. 
            Malesuada purus bibendum nulla libero ut etiam ut. 
            Amet odio felis gravida porta accumsan arcu.
          </p>

          <Button 
            label="Read more" 
            variant="white" 
            className="px-10"
          />
        </div>
      </SectionContainer>
    </section>
  );
};

export default Hero;