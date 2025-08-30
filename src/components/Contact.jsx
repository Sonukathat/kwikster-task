import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

function Contact() {
    return (
        <div className="px-8 xl:px-32 bg-[#f9f6ee] py-12">
            <div className="flex flex-col gap-8 bg-white rounded-4xl px-2 py-8 md:px-8 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <div className="flex flex-col justify-center items-center gap-2 bg-green-500 w-52 h-52 p-6 rounded-[50%]">
                        <h2 className="text-5xl font-bold">40%</h2>
                        <p className="font-bold text-lg text-center">BUSSINESS LAUNCH</p>
                    </div>
                    <div>
                        <p className="text-lg font-light">Image from <span className="text-green-400">Freepik</span></p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold sm:text-5xl">Our Contact</h2>
                    </div>
                    <div>
                        <button className="bg-amber-400 px-6 py-3 rounded-4xl">READ MORE</button>
                    </div>
                </div>
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="h-16 w-16 flex justify-center items-center bg-green-400 rounded-[50%]">
                            <MdMailOutline className="" size={44} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold">CHART TO US</h3>
                            <p className="font-medium">Our friendly team is here to help.</p>
                            <a className="text-yellow-500 font-medium text-md" href="#">hi@ourcompany.com</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="h-16 w-16 flex justify-center items-center bg-green-400 rounded-[50%]">
                            <IoLocationOutline className="" size={44} />
                        </div>
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <h3 className="text-lg font-bold">OFFICE</h3>
                            <p className="font-medium">Come say hello at our office HQ. 121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:mt-10 lg:mt-0">
                        <div className="h-16 w-16 flex justify-center items-center bg-green-400 rounded-[50%]">
                            <LuPhone className="" size={44} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold">PHONE</h3>
                            <p className="font-medium">Mon-Fri from 8am to 5am</p>
                            <a className="text-yellow-500 font-medium text-md" href="#">+1(555) 000-000</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
