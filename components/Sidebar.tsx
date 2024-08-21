import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SidebarProps = {
    isOpen: boolean;
    toggleSideBar: () => void;
};

export default function Sidebar({ isOpen, toggleSideBar }: SidebarProps) {
    const currentPath = usePathname()

    // Disable scrolling when sidebar is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Instantly close the sidebar when re-routing
    const handleLinkClick = () => {
        toggleSideBar();
    };

    return (
        <>

            {/* Background blur layer */}
            <div
                className={`fixed top-[77px] right-0 h-screen bg-black/60 transition-all duration-300 ease-in-out transform ${
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 duration-100"
                } w-full z-30 ios-backdrop-blur lg:hidden`}>
            </div>

            {/* Sidebar menu */}
            <div
                className={`fixed top-[77px] right-0 h-screen bg-white transition-transform duration-300 ease-in-out transform ${
                    isOpen ? "translate-x-0" : "translate-x-full duration-100"
                } w-[270px] z-40 lg:hidden`}
            >
                <div className="flex flex-col gap-10 text-lg mt-12 mr-5">
                    <Link
                        href="/"
                        className={`group flex flex-col self-end ${currentPath === "/" ? "active" : ""}`}
                        onClick={handleLinkClick}
                    >
                        <div>Home</div>
                        <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                    </Link>
                    <Link
                        href="/about"
                        className={`group flex flex-col self-end  ${currentPath === "/about" ? "active" : ""}`}
                        onClick={handleLinkClick}
                    >
                        <div>About Us</div>
                        <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                    </Link>
                    <Link
                        href="/contact"
                        className={`group flex flex-col self-end  ${currentPath === "/contact" ? "active" : ""}`}
                        onClick={handleLinkClick}
                    >
                        <div>Contact Us</div>
                        <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                    </Link>
                </div>

                {/* CALL NOW button */}
                <Link
                    href="/contact"
                    className="flex lg:hidden absolute bottom-24 left-[35px]"
                    onClick={handleLinkClick}
                    aria-label="Call now button"
                >
                    <button className="btn-hover-effect rounded-md lg:rounded-lg font-semibold w-[200px] text-white text-sm py-2 2xl:py-2.5 hover:text-black">CALL NOW: <span className="font-normal">555-555-5555</span></button>
                </Link>

            </div>
        </>
    );
}
