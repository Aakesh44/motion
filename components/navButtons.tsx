import useArrayNavigator from '@/hooks/useNavigateRoute';
import { routes } from '@/lib/routes';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

const NavButtons = () => {

    const pathname = usePathname();
    const router = useRouter();

    const curIndex = routes.findIndex((route) => route.path === pathname);
    
    const {activeIndex, next, prev, hasPrev, hasNext} = useArrayNavigator(routes, curIndex);

    const activeRoute = routes[activeIndex];

    useEffect(() => {
        const target = activeRoute?.path ?? routes[0]?.path;
        if (!target) return;                        // no routes yet
        if (target === pathname) return;            // already there, do nothing
        router.push(target);                        // or router.replace(target)
      }, [activeIndex, activeRoute?.path, pathname, router, routes]);

    return (
        <div className='h-full flex items-center justify-center gap-2'>
            <Button onClick={prev} variant="outline" size="icon" disabled={!hasPrev} className='rounded-full cursor-pointer'>
                <CircleChevronLeft className='text-ring'/>
            </Button>
            <Button onClick={next} variant="outline" size="icon" disabled={!hasNext} className='rounded-full cursor-pointer'>
                <CircleChevronRight className='text-ring'/>
            </Button>
    </div>
    );
};

export default NavButtons;