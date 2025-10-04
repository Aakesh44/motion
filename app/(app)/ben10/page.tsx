import AlienActionSection from '@/components/alienActionSection';
import Carousal from '@/components/Carousal';
import React from 'react';

const Ben10Page = async ({searchParams} :{searchParams: Promise<Record<string, string | string[] | undefined>> }) => {

    const {alien} = await searchParams;

    const alienIndex = typeof alien === "string" ? alien : undefined;

    return (
        <div className='h-fit min-h-full w-full space-y-10 flex flex-col items-center justify-center backdrop-blur-xs bg-lime-3000'>
            
            <Carousal/>

            <AlienActionSection alienIndex={alienIndex}/>

        </div>
    );
};

export default Ben10Page;