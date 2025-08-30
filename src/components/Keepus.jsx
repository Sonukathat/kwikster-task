
function Keepus() {
    return (
        <div className="px-8 xl:px-32 py-18 bg-amber-400">
            <div className="bg-white rounded-4xl flex flex-col items-center gap-6 py-12">
                <div>
                    <h2 className="text-2xl text-center sm:text-5xl font-bold">Keep up to date with us</h2>
                </div>
                <div>
                    <p className="text-lg text-center font-light">Sample text. Click to select the Text Element.</p>
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row">  
                    <input className="border-2 px-2 py-3 w-56 sm:w-96 md:w-96 rounded-2xl" type="text" placeholder="Enter a valid email address" />
                    <button className="text-black bg-[#99e54d] sm:w-96 w-56 md:w-40 px-8 py-3 rounded-4xl font-light">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Keepus
