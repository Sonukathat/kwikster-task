import { IoCall } from "react-icons/io5";

function Keepup() {
  return (
    <div className="px-4 sm:px-8 xl:px-32 py-12 sm:py-16 bg-[#99e54d] flex justify-center">
      <div className="bg-white rounded-3xl sm:rounded-4xl w-full max-w-3xl flex flex-col items-center text-center gap-4 sm:gap-6 py-8 sm:py-10 px-4 sm:px-8 shadow-md">
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Keep up to date with us
        </h2>

        <p className="text-base sm:text-lg font-light text-gray-700">
          Sample text. Click to select the Text Element.
        </p>

        <div className="flex items-center gap-3 sm:gap-4">
          <IoCall className="text-orange-500 text-2xl sm:text-4xl" />
          <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
            +1 (234) 567-8910
          </p>
        </div>
      </div>
    </div>
  );
}

export default Keepup;
