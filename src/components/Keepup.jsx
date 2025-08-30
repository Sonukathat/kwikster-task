import { IoCall } from "react-icons/io5";

function Keepup() {
  return (
    <div className="px-8 xl:px-32 py-18 bg-[#99e54d]">
      <div className="bg-white rounded-4xl flex flex-col items-center gap-6 py-10">
        <div>
            <h2 className="text-xl sm:text-5xl md:text-4xl font-bold">Keep up to date with us</h2>
        </div>
        <div>
            <p className="text-lg text-center font-light">Sample text. Click to select the Text Element.</p>
        </div>
        <div className="flex items-center">
            <IoCall className="text-orange-400" size={20}/>
            <p className="text-xl font-bold sm:text-4xl md:text-4xl"> +1 (234) 567-8910</p>
        </div>
      </div>
    </div>
  )
}

export default Keepup
