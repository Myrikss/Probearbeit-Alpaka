import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionContainer from './components/layout/SectionContainer';
import ProductCard from './components/ProductCard';

const productsData = [
  {
    title: "Product G",
    description: "A diam dolor gravida eu et nibh morbi at nullam. Enim urna quis vitae arcu donec purus. Fauclbus iaculis at duis pulvinar eget. Ipsum ut cras magna.",
    bgColorClass: "bg-prod-g-blue",
    image: "/src/assets/product.png"
  },
  {
    title: "Product F",
    description: "Nec eget dui pulvinar ut at neque duis. Integer ligula donec vel risus malesuada sed id faucibus. Sed cursus morbi egestas tincidunt metus ipsum.",
    bgColorClass: "bg-prod-f-dark",
    image: "/src/assets/product.png"
  },
  {
    title: "Product A",
    description: "Tellus tellus nibh duis scelerisque nibh consequat. Volutpat consectetuer maecenas volutpat odio. Vulputate nisl morbi et scelerisque cras. Non et.",
    bgColorClass: "bg-prod-a-dark",
    image: "/src/assets/product.png"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-body-bg text-body-text">
      <Navbar />
      
      <main>
        <Hero />

        <section className="py-20">
          <SectionContainer>
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-headline-h2 text-black">Our Products</h2>
              <a href="#" className="text-link text-black hover:text-brand-green transition-colors underline uppercase">
                Show all
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productsData.map((product, index) => (
                <ProductCard 
                  key={index}
                  title={product.title}
                  description={product.description}
                  bgColorClass={product.bgColorClass}
                  image={product.image}
                />
              ))}
            </div>
          </SectionContainer>
        </section>

      </main>
    </div>
  );
}

export default App;