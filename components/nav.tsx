"use client";

import { routes } from '@/lib/routes';
import { usePathname } from 'next/navigation';
import React, { } from 'react';
import {AnimatePresence, motion} from "motion/react"
import NavButtons from './navButtons';

const Nav = () => {

    const pathname = usePathname();

    const curIndex = routes.findIndex((route) => route.path === pathname);
    
    const activeRoute = routes[curIndex];

    if (!activeRoute) return null;

    const {name, description} = activeRoute;

    return (
        <nav className='absolute top-4 left-1/2 -translate-x-1/2 z-20  w-full max-w-3xl h-12 px-5 glass flex items-center justify-between gap-5 rounded-md border border-border'>

            <AnimatePresence mode='wait' initial={false}>

                <motion.div 
                    key={name}
                    className='grow flex items-center justify-between'
                    initial={{
                        y: 14,
                        opacity: 0,
                    }}
                    exit={{
                        y: -14,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear",
                    }}
                >

                    <h1 className='text-xl font-semibold font-plus-jakarta-poppins'>
                        {name}
                    </h1>

                    <p className='ml-auto text-sm font-medium font-mono'>{description}</p>

                </motion.div>

            </AnimatePresence>

            <NavButtons/>

        </nav>
    );
};

export default Nav;