import React from 'react';
import { routes } from '@/lib/routes';
import Link from 'next/link';

const page = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center gap-10'>
            {routes.map((route) => (
                <Link href={route.path} key={route.path} className='text-4xl font-bold hover:text-blue-500 transition-colors duration-300 hover:scale-105 hover:underline hover:underline-offset-4 '>{route.name}</Link>
            ))}
        </div>
    );
};

export default page;