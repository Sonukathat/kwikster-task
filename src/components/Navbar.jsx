import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-center py-8 gap-2 relative bg-[#f9f6ee]">
            <div className="lg:hidden">
                <GiHamburgerMenu
                    onClick={() => setMenu(true)}
                    className="cursor-pointer text-3xl"
                />
            </div>
            <div className="hidden lg:flex gap-8">
                <a className="hover:text-amber-400 font-light" href="#">HOME</a>
                <a className="hover:text-amber-400 font-light" href="#">LANDING</a>
                <a className="hover:text-amber-400 font-light" href="#">ABOUT</a>
                <a className="hover:text-amber-400 font-light" href="#">MENU</a>
                <a className="hover:text-amber-400 font-light" href="#">TEAM</a>
                <a className="hover:text-amber-400 font-light" href="#">CONTACT</a>
            </div>

            {menu && (
                <div className="absolute top-0 left-0 w-64 h-screen bg-black text-white flex flex-col gap-6 py-12 px-6">
                    <div className="flex justify-end">
                        <RxCross2
                            onClick={() => setMenu(false)}
                            className="cursor-pointer text-3xl"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-3 text-lg">
                        <a href="#">HOME</a>
                        <a href="#">LANDING</a>
                        <a href="#">ABOUT</a>
                        <a href="#">MENU</a>
                        <a href="#">TEAM</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
