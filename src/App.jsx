import HeroSection from "./components/HomeSections/Hero";
import FeaturesSection from "./components/HomeSections/features";
import ImgGallery from "./components/HomeSections/gallery";
import Reviews from "./components/HomeSections/reviewsSection";
import FollowSection from "./components/HomeSections/follow";
import Brands from "./components/HomeSections/brands";
import ScrollToTopOnMount from "./components/scrolltoTop";

function App() {
  return (
    <div className="App">
      <ScrollToTopOnMount />
      <HeroSection />
      <FeaturesSection />
      <ImgGallery />
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center w-11/12 mx-auto gap-10 my-20">
        {[0, 1, 2, 4].map((item, i) => (
          <div className="w-10/12 md:w-5/12" key={i + 598}>
            <h2 className="text-pink text-2xl font-bold mb-4">
              Modern Neon Signs
            </h2>
            <p className="text-sm">
              Popular in the 20th century, neon light signs are making a serious
              comeback thanks to a new, safer, more energy efficient and
              affordable material - LED neon flex. While vintage neon signs used
              glass neon tubes, modern neon is allowing a new generation to
              enjoy a high quality neon experience with a greater range of
              options while costing significantly less!
              <br />
              Thanks to the affordability, energy efficiency, durability and
              safety of neon LED products, you can now buy neon LED signs and
              wall decor for a huge variety of uses. Add a stunning addition to
              your wedding party, create a neon word sign for bedroom or home
              decor, get a custom personalized name sign for the kids room, add
              a unique touch with neon bar signs, a neon sculpture, or get a
              customized neon sign for just about any purpose.
            </p>
          </div>
        ))}
      </div>
      <Reviews />
      {/* Best Seller Section */}
      <FollowSection />
      <Brands />
    </div>
  );
}

export default App;
