function Landing() {
  return (
    <>
      <div>
        <section className="relative bg-hero">
          <div className="mx-10 md:mx-40 py-72 text-center text-white text-5xl md:text-7xl font-bold">
            <h1>A Luxury Stay</h1>
          </div>
        </section>
        <section className="relative bg-hero2">
          <div className="mx-10 md:mx-40 py-72 text-white font-bold">
            <div className="border-8 border-seasons-primary text-left grid md:grid-cols-2 p-10">
              <div className="grid gap-y-8">
                <h2 className="text-gray-500">A MEMORABLE HOLIDAY</h2>
                <h1 className="text-3xl">A great stay in a lovely hotel.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas. Donec in sodales dui, a blandit nunc. Pellentesque
                  id eros venenatis, sollicitudin neque sodales, vehicula nibh.
                  Nam massa odio, porttitor vitae efficitur non, ultricies
                  volutpat tellus.
                </p>
              </div>
              <div className="mt-28 md:ml-10">
                <p className="mb-10">
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
      </div>
    </>
  );
}

export default Landing;
