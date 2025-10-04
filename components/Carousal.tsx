"use client";

import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ALIENS } from "@/data/ben10";
import Link from "next/link";

const Carousal = () => {

    const [emblaRef] = useEmblaCarousel({ 
        loop: true, 
        dragFree: true, 
        align: "start", 
    });

    return (
        
        <div className="w-full h-screen grid place-items-center">

            <div className="overflow-hidden w-full" ref={emblaRef}>
                
                <div className="flex">

                    {ALIENS.map((alien, index) => (

                        <Link
                            href={{search: `?alien=${index}`}}
                            scroll={false}
                            key={index}
                            className="relative shrink-0 h-100 aspect-[2/3] mr-10 group select-none"
                        >
                            <Image
                                src={alien.profile_img}
                                alt={alien.name}
                                fill
                                className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
                            />
                        </Link>

                    ))}

                </div>
            </div>

        </div>
    );
};

export default Carousal;
