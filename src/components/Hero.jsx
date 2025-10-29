import heroimg from "../assets/pexels-ella-olsson-572949-1640777.jpg";

function Hero() {
  return (
    <div className="px-4 sm:px-8 xl:px-32 pt-8 bg-[#f9f6ee] flex justify-center">
      <div className="relative w-full max-w-6xl">
        <img
          className="w-full rounded-4xl h-[25rem] sm:h-[35rem] lg:h-[40rem] object-cover"
          src={heroimg}
          alt="heroimg"
        />
        <button className="bg-amber-400 py-4 px-8 text-white font-medium rounded-4xl absolute bottom-6 left-4 md:left-8">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default Hero;
