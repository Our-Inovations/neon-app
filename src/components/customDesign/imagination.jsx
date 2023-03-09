import { imagination } from "../data/custom";
import FeatureCustomCard from "./customFeatureCard";

export default function Imagination() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-pink text-center">
        Bring your imagination to life
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center w-11/12 mx-auto gap-10 my-20">
        {[0, 1].map((item, i) => (
          <div key={i} className="md:w-5/12">
            <h2 className=" text-2xl font-bold mb-4">Modern Neon Signs</h2>
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
      <div
        className="flex gap-6 py-10 flex-wrap justify-center"
        style={{
          background:
            "radial-gradient(circle, rgba(255,136,220,1) 0%, rgba(255,136,220,1) 0%, rgba(255,136,220,1) 2%, rgba(255,136,220,0.9374124649859944) 3%, rgba(255,136,220,1) 22%, rgba(255,136,220,1) 40%, rgba(255,166,229,1) 52%, rgba(255,255,255,1) 82%)",
        }}
      >
        {imagination.map((item, i) => (
          <FeatureCustomCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
