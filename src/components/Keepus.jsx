function Keepus() {
  return (
    <div className="px-4 sm:px-8 xl:px-32 py-12 sm:py-16 bg-amber-400 flex justify-center">
      <div className="bg-white rounded-3xl sm:rounded-4xl flex flex-col items-center text-center gap-4 sm:gap-6 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-3xl shadow-md">
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Keep up to date with us
        </h2>

        <p className="text-base sm:text-lg font-light text-gray-600">
          Sample text. Click to select the Text Element.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="border-2 border-gray-300 px-4 py-3 rounded-2xl w-full sm:w-96 md:w-80 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
          />
          <button className="text-black bg-[#99e54d] w-full sm:w-96 md:w-40 px-8 py-3 rounded-3xl font-medium hover:bg-[#8bd644] transition-all">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Keepus;
