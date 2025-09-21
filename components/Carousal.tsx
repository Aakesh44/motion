import Image from 'next/image';
import React from 'react';
import bg from "@/assets/images/common/bg.jpg"

const Carousal = () => {
    return (
        <div className='w-full h-120 p-4 flex items-center justify-start gap-10 overflow-x-auto scrollbar-none backdrop-blur-xs'>
            
            {new Array(10).fill(0).map((_, index) => (
                <div key={index} className='relative shrink-0 h-full aspect-[2/3] drop-shadow-2xl bg-red-5000'>

                    <Image
                        src={bg}
                        alt="bg"
                        fill
                        className='object-cover'
                    />
                        
                </div>
            ))}
        </div>
    );
};

export default Carousal;