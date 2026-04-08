"use client";

import Image from 'next/image';
import { useState } from 'react'
import RenderNavItems from './components/renderNavItems';
import ToggleMenu from './components/toggleMenu';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={`bg-secondary p-4 fixed top-0 left-0 right-0 z-50 ${isOpen ? 'shadow-xl' : ''}`}>
            <div className='flex justify-between items-center'>
                <Image src="/images/Logo.png" alt="logo" width={50} height={100} className='object-contain md:hidden' />
                <RenderNavItems isMobile={false} />
                <ToggleMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <RenderNavItems isMobile={true} isOpen={isOpen} />
        </header>
    )
}
