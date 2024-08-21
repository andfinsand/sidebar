"use client"

import { useEffect } from "react";
import Image from "next/image"

export default function About() {
    useEffect(() => {

        // Parallax effect for banner image
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner-about');
            let speed = 0.5;

            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(${scrollPosition * speed}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <main className="flex flex-col text-black">

                {/* Banner section */}
                <div className="flex justify-center text-black w-full h-[280px] lg:h-[450px] mt-[77px]">
                    <div id="banner-about" className="page-banner-image-2 w-full h-full"></div>
                    <h1 className="self-center absolute text-[35px] md:text-[60px] font-bold tracking-tight mt-5 lg:mt-0">About Us</h1>
                </div>

            </main>
        </>
    );
}
