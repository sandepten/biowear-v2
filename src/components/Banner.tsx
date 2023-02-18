import type { NextComponentType } from "next";
import Image from "next/image";

const Banner: NextComponentType = () => {
  //todo Create the auto slide show, and add the dots below the button
  return (
    <div>
      <div>
        <Image
          src="/black-net-dress.jpg"
          alt="Black net dress"
          width={1000}
          height={1000}
          className="min-h-[50vh] object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl font-medium">New Arrivals</p>
        <p className="mt-2 text-3xl font-medium">Autumn Collection</p>
        <button>
          <p className="mt-4 rounded-lg border border-black py-1.5 px-3 text-lg font-medium">
            Shop Now
          </p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
