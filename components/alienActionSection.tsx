"use client";

import { ALIENS } from '@/data/ben10';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import {AnimatePresence, motion, Transition} from "motion/react";

const AlienActionSection = ({alienIndex}: {alienIndex?: string}) => {


    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () => setActiveIndex(prev => {
        if (prev === 0) return ALIENS.length - 1;
        return prev - 1;
    });
    const next = () => setActiveIndex(prev => {
        if (prev === ALIENS.length - 1) return 0;
        return prev + 1;
    });

    useEffect(() => {
        if (alienIndex) {
            const index = parseInt(alienIndex);
            if (index < 0 || index > ALIENS.length - 1) return;
            setActiveIndex(index);
        }
    }, [alienIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    })


    const activeAlien = ALIENS[activeIndex];

    console.log(ALIENS.map(a=> a.color))

    if (!activeAlien) return null;

    const prevIndex = (activeIndex - 1 + ALIENS.length) % ALIENS.length;
    const nextIndex = (activeIndex + 1) % ALIENS.length;

    const [previousAlien, nextAlien] = [
        ALIENS[prevIndex],
        ALIENS[nextIndex]
    ];

    if(!previousAlien || !nextAlien) return null;

    const {name, description, bg, color} = activeAlien;


    const alienAnimationss = { 

        prev: { opacity: 0.5, x: "-25%", y: "25%", scale: 0.4, zIndex: 1 },
        active: { opacity: 1, x: 0, y: 0, scale: 0.75, zIndex: 2 },
        next: { opacity: 0.5, x: "25%", y: "-25%", scale: 0.4, zIndex: 1 },
        other: {opacity: 0, x: 0, y: 0, scale: 0.4, zIndex: 1},


    } as const;

    const spring: Transition = {
        type: "spring",
        damping: 20,
        stiffness: 150,
    };



    return (
        <section className='w-full h-[90dvh] relative flex items-center justify-center bg-lime-3000'>

            <div 
                className='absolute inset-0 z-0 bg-pink-3000'
                style={{
                    backgroundImage: `radial-gradient(circle 300px at 25% 300px, ${bg}, transparent)`,
                    opacity: 0.5
                }}
            >
            </div>

            <div 
                className='absolute inset-0 z-0 bg-pink-3000'
                style={{
                    backgroundImage: `radial-gradient(circle 300px at 75% 200px, ${bg}, transparent)`,
                    opacity: 0.2
                }}
            >
            </div>

            <aside className='relative w-3/5 h-full flex items-center justify-center overflow-hidden. bg-pink-3000'>

                {/* <AnimatePresence mode='popLayout'> */}

                    {ALIENS.map((alien, index) => {

                        const role = index === activeIndex ? "active" : index === nextIndex ? "next" : index === prevIndex ? "prev" : "other";

                        return (
                            <motion.div 
                                key={alien.name}
                                variants={alienAnimationss}
                                initial={"other"}
                                animate={role}
                                transition={spring}
                                className={`size-full absolute shrink-0 bg-red-5000`}
                            >
                                
                                <div className='relative w-full h-full'>

                                    {ALIENS[index]?.action_img &&
                                        <Image
                                            src={ALIENS[index]?.action_img}
                                            alt={name}
                                            fill
                                            className='object-contain'
                                        />
                                    }

                                </div>
                            </motion.div>
                        )
                    })}

                {/* </AnimatePresence> */}

            </aside>

            <aside className='w-2/5 h-full z-20 flex flex-col items-start justify-start gap-10 bg-blue-3000'>

                <AnimatePresence mode='wait' initial={false}>

                    <motion.p 
                        key={name}
                        className='text-6xl font-bold font-plus-jakarta-poppins text-emerald-500'
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 0.5,
                            delay: 0.2
                        }}
                        style={{color}}
                    >
                        {name}
                    </motion.p>

                    <motion.p 
                        key={description}
                        className='text-xl font- font-poppins text-emerald-700'
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 0.5,
                            delay: 0.2
                        }}
                        style={{color}}
                    >
                        {description}
                    </motion.p>

                </AnimatePresence>

                <div className='mt-auto mb-10 flex items-center justify-center gap-5'>
                    <Button onClick={prev} variant="outline" size="icon" className='size-16 rounded-full cursor-pointer hover:border-emerald-500'>
                        <CircleChevronLeft className='size-8 text-emerald-500'/>
                    </Button>
                    <Button onClick={next} variant="outline" size="icon" className='size-16 rounded-full cursor-pointer hover:border-emerald-500'>
                        <CircleChevronRight className='size-8 text-emerald-500'/>
                    </Button>
                </div>
            </aside>

        </section>
    );
};

export default AlienActionSection;