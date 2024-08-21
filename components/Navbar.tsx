"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar";
import HamburgerButton from "./buttons/HamburgerButton"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const currentPath = usePathname()

    // Toggle side bar for mobile viewport
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    // Animate navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 90; // Adjust when animation activates
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Close sidebar if viewport width is greater than 1024px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(false);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="flex justify-center fixed w-full z-50">
                <div className="bg-[#EEEEEE] bg-opacity-85 backdrop-blur-lg ios-backdrop-blur shadow-lg absolute inset-0 "
                    >
                </div>
                <div className="flex w-full max-w-screen-xl z-10">

                    {/* Logo */}
                    <Link href="/" className="flex justify-center w-[170px] 2xl:w-[200px] min-w-[120px] min-h-[77px] ml-4">
                        <Image
                            src="/logo-example-dark.png"
                            alt="Company logo"
                            width={446}
                            height={91}
                            priority={true}
                            className="self-center"
                        />
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex justify-center self-center w-[70%] gap-12 ml-4 xl:ml-4">
                        <Link href="/" className={`group flex flex-col ${currentPath === "/" ? "active" : ""}`}>
                            <div>Home</div>
                            <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                        <Link href="/about" className={`group flex flex-col ${currentPath === "/about" ? "active" : ""}`}>
                            <div>About Us</div>
                            <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                        <Link href="/contact" className={`group flex flex-col ${currentPath === "/contact" ? "active" : ""}`}>
                            <div>Contact Us</div>
                            <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                    </div>

                    {/* CALL NOW button */}
                    <Link href="/contact" aria-label="Call now button" className="hidden self-center lg:flex">
                        <button className="btn-hover-effect rounded-lg font-semibold w-[230px] text-white m-4 py-2 2xl:py-2.5 hover:text-black">CALL NOW: <span className="font-normal">555-555-5555</span></button>
                    </Link>

                    {/* Mobile menu */}
                    <div
                        className="flex lg:hidden justify-end w-full"
                        aria-label="mobile menu toggle"
                    >
                        <HamburgerButton
                            isOpen={isOpen}
                            toggleSideBar={toggleSideBar}
                        />
                    </div>

                </div>
            </nav>

            {/* Mobile menu side bar */}
            <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />

        </>
    );
}
