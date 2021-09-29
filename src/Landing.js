import Ac from "./logos/Ac";
import Parking from "./logos/Parking";
import Pool from "./logos/Pool";
import Star from "./logos/Star";
import Tv from "./logos/Tv";
import Wifi from "./logos/Wifi";

function Landing() {
  return (
    <>
      <div>
        <section className="relative bg-hero">
          <div className="mx-10 md:mx-40 py-72 text-center text-gray-100 text-5xl md:text-7xl font-bold">
            <h1>A Luxury Stay</h1>
          </div>
        </section>
        <section className="relative bg-hero2">
          <div className="mx-10 md:mx-40 pt-44 md:pt-72 pb-44 md:pb-72 text-gray-100 font-bold">
            <div className="border-8 border-seasons-primary text-left grid md:grid-cols-2 p-10">
              <div className="grid gap-y-8">
                <h2 className="text-gray-500 uppercase">A memorable holiday</h2>
                <h1 className="text-xl md:text-3xl">
                  A great stay in a lovely hotel.
                </h1>
                <p className="text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas. Donec in sodales dui, a blandit nunc. Pellentesque
                  id eros venenatis, sollicitudin neque sodales, vehicula nibh.
                  Nam massa odio, porttitor vitae efficitur non, ultricies
                  volutpat tellus.
                </p>
              </div>
              <div className="mt-10 md:mt-28 md:ml-10">
                <p className="hidden md:flex mb-10 text-gray-200">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra.
                </p>
                <button
                  type="submit"
                  className="py-2 w-full px-4 shadow-md bg-seasons-primary hover:bg-opacity-80 text-white transition duration-500 ease-in-out"
                >
                  Make a Reservation
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="grid md:grid-cols-2 text-white">
            <div className="bg-luxury pb-24">
              <h2 className="mt-20 ml-8 md:ml-20 text-3xl">
                Luxury Suite Room
              </h2>
              <p className="mt-5 ml-8 md:ml-20">From PKR 13,000</p>
              <div className="ml-8 md:ml-20 mt-72 flex flex-wrap gap-x-8 gap-y-4">
                <div className="grid grid-flow-row text-center gap-y-2">
                  <Tv />
                  <p>TV</p>
                </div>
                <div className="grid grid-flow-row text-center gap-y-2">
                  <Wifi />
                  <p>WiFi</p>
                </div>
                <div className="grid grid-flow-row text-center gap-y-2">
                  <Ac />
                  <p>AC</p>
                </div>
                <div className="grid grid-flow-row text-center gap-y-2">
                  <Parking />
                  <p>Parking</p>
                </div>
                <div className="grid grid-flow-row text-center gap-y-2">
                  <Pool />
                  <p>Pool</p>
                </div>
              </div>
              <div className="ml-8 md:ml-20 mt-5">
                <button
                  type="submit"
                  className="py-4 px-8 shadow-md hover:bg-opacity-20 hover:bg-gray-400 border-2 text-white transition duration-500 ease-in-out"
                >
                  Make a Reservation
                </button>
              </div>
            </div>
            <div className="bg-pool pb-24">
              <h2 className="mt-20 ml-8 md:ml-20 text-3xl">Infinity Pool</h2>
              <p className="mt-5 ml-8 md:ml-20 uppercase">For all our guests</p>
              <div className="ml-8 md:ml-20 mt-72 flex gap-x-8">
                <div className="grid grid-flow-row text-center gap-y-2"></div>
                <div className="grid grid-flow-row text-center gap-y-2">
                  <Pool />
                  <p>Pool</p>
                </div>
              </div>
              <div className="ml-8 md:ml-20 mt-5">
                <button
                  type="submit"
                  className="py-4 px-8 shadow-md hover:bg-opacity-20 hover:bg-gray-400 border-2 text-white transition duration-500 ease-in-out"
                >
                  Make a Reservation
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-seasons-gray">
          <div className="mx-10 md:mx-40 pb-44 pt-24 md:pt-44 text-gray-100 text-lg md:text-xl">
            <h1 className="text-xl md:text-4xl mb-16">Guestbook</h1>
            <div className="grid md:grid-flow-col gap-y-16">
              <div>
                <p>We loved our stay</p>
                <div className="flex gap-x-2 mt-2">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="mt-7 mb-5 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus
                  libero mauris, bibendum eget sapien ac, ultrices rhoncus
                  ipsum. Donec nec sapien in urna fermentum ornare.
                </p>
                <div className="flex gap-x-4">
                  <img src="./imgs/review1.jpg" alt="John" />
                  <div className="grid grid-flow-row">
                    <p className="text-md text-seasons-primary">John Doe</p>
                    <p className="text-sm">Madrid</p>
                  </div>
                </div>
              </div>
              <div>
                <p>I will come back again</p>
                <div className="flex gap-x-2 mt-2">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="mt-7 mb-5 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus
                  libero mauris, bibendum eget sapien ac, ultrices rhoncus
                  ipsum. Donec nec sapien in urna fermentum ornare.
                </p>
                <div className="flex gap-x-4">
                  <img src="./imgs/review2.jpg" alt="Maria" />
                  <div className="grid grid-flow-row">
                    <p className="text-md text-seasons-primary">Maria Smith</p>
                    <p className="text-sm">Madrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing;
