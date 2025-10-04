"use client";

import React, { useEffect, useState } from 'react';
import {Transition} from "motion/react"
import * as motion from "motion/react-client";

const initialOrder = [
    "#ff0088",
    "#dd00ee",
    "#9911ff",
    "#0d63f8",
    "#00bfff",
    "#00ffff",
    "#00ffaa",
]

const Dummy = () => {

    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(rotate(order)), 1000)
        return () => clearTimeout(timeout)
    }, [order])

    // function shuffle([...array]: string[]) {
    //     return array.sort(() => Math.random() - 0.5)
    // }

    function rotate([...array]: string[]) {
        return [...array.slice(1), array[0]!]
    }

    const varients = {
        prev: { opacity: 0.5, x: "-40%", y: "40%", scale: 0.4, zIndex: 1 },
        active: { opacity: 1, x: 0, y: 0, scale: 1, zIndex: 2 },
        next: { opacity: 0.5, x: "40%", y: "-40%", scale: 0.4, zIndex: 1 },
        other: {opacity: 0.5, x: 0, y: 0, scale: 0.4, zIndex: 1},
    }

    const spring: Transition = {
        type: "spring",
        damping: 20,
        stiffness: 150,
    }

    return (
        <section className='h-screen w-full grid place-items-center items-start pt-32 bg-lime-200'>
            
            <div className='relative w-100 aspect-square flex items-center justify-center gap-5 bg-cyan-300'>

                {order.map((backgroundColor, i) => {

                    const role = i === 1 ? "active" : i === 0 ? "prev" : i === 2  ? "next" : "other";

                    return (
                        <motion.div 
                            key={backgroundColor}
                            variants={varients}
                            animate={role}
                            transition={spring}
                            style={{ backgroundColor }} 
                            className='size-[75%] shrink-0 rounded absolute'
                        >
                            {role} {i} 
                        </motion.div>
                    )
                })}
            </div>

        </section>
    );
};

export default Dummy;