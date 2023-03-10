import HeroSection from "./components/HomeSections/Hero";
import FeaturesSection from "./components/HomeSections/features";
import ImgGallery from "./components/HomeSections/gallery";
import Reviews from "./components/HomeSections/reviewsSection";
import FollowSection from "./components/HomeSections/follow";
import Brands from "./components/HomeSections/brands";
import ScrollToTopOnMount from "./components/scrolltoTop";

function App() {
  const data = [
    {
      'heading': 'MODERN NEON SIGNS',
      'para': 'Popular in the 20th century, neon light signs are making a serious comeback thanks to a new, safer, more energy efficient and affordable material - LED neon flex. While vintage neon signs used glass neon tubes, modern neon is allowing a new generation to enjoy a high quality neon experience with a greater range of options while costing significantly less! Thanks to the affordability, energy efficiency, durability and safety of neon LED products, you can now buy neon LED signs and wall decor for a huge variety of uses. Add a stunning addition to your wedding party, create a neon word sign for bedroom or home decor, get a custom personalized name sign for the kids room, add a unique touch with neon bar signs, a neon sculpture, or get a customized neon sign for just about any purpose.'
    },
    {
      'heading': 'CUSTOM NEON SIGNS FOR BUSINESS',
      'para': 'Businesses are finding that modern neon flex products can be used for more than just neon open signs. Hipster neon word lights feature in co-workspaces; neon wall art adorns coffee shops, bars, restaurants, and diners; neon light up signs appear in beauty salons and barber shops; neon quote signs are found in nightclubs and yoga studios. Food trucks, pop ups, boutiques, hair salons, and entrepreneurial businesses that cater for the Instagram generation use neon light up signs to great effect. Want to get people talking about your business? Add a neon wall decoration as a backdrop for those all important selfies! Savvy start-ups and in the know marketing agencies deploy on-trend neon art and quirky signs to generate free advertising via social media shares'
    },
    {
      'heading': 'PERSONALIZED & CUSTOMIZED NEON SIGNS',
      'para': 'All of our signs, lights, lamps,and art are handcrafted from original designs. If you want a personalized neon sign, custom neon word sign, LED bar lights, neon sculpture, or something totally unique we can make it for you! We have designed a wide range of customized neon light signs for wedding party decor, events and birthdays. Need gift ideas? A customized neon sign is a standout present. Design your own personalized neon name signs for the home bar or garage. How about a wall art neon sign for the bedroom, living room or man cave? Take your pick of our freestanding neon lamps.'
    },
    {
      'heading': 'GET LIT WITH CUSTOM NEON LIGHTS',
      'para': 'Browse the store for our most popular neon art, aesthetic sculptures, table lamps, and word signs. Our neon name signs can be personalized for kids rooms and weddings. Or go your own way and create something truly unique with a customized neon sign for home or business. Just tell us your idea and we\'ll light it up! Our customized signs are made from high quality LED flex making them more cost-effective, durable, and safer than real glass neon signs while still providing an incredible visual impact. Click here to find out how our process works, custom options and delivery times.'
    },
  ]
  return (
    <div className="App">
      <ScrollToTopOnMount />
      <HeroSection />
      <FeaturesSection />
      <ImgGallery />
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center w-11/12 mx-auto gap-10 my-20">
        {data.map((item, i) => (
          <div className="w-10/12 md:w-5/12" key={i + 598}>
            <h2 className="text-pink text-2xl font-bold mb-4">
              {item.heading}
            </h2>
            <p className="text-sm">
              {item.para}
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
