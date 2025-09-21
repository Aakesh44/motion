import { useCallback, useEffect, useState } from "react";

type ReturnItems = {
    activeIndex: number,
    prev: () => void,
    next: () => void,
    hasPrev: boolean,
    hasNext: boolean
}

function useArrayNavigator<T>(items: T[], curIndex: number = 0): ReturnItems {

    const [index, setIndex] = useState(curIndex);
    const [hasPrev, setHasPrev] = useState(index > 0);
    const [hasNext, setHasNext] = useState(items.length-1 > 0);

    const prev = useCallback(()=>{
        if(hasPrev){
            setIndex(prev=> prev - 1);
        }
    }, [hasPrev]);

    const next = useCallback(() => {
        if(hasNext){
            setIndex(prev => prev + 1)
        }
    }, [hasNext]);

    useEffect(() => {
        setHasPrev(index > 0);
        setHasNext(index < items.length - 1)
    }, [index])

    return {
        activeIndex: index,
        hasPrev: index > 0,
        hasNext: index < items.length - 1,
        prev: prev,
        next: next
    }
}

export default useArrayNavigator;