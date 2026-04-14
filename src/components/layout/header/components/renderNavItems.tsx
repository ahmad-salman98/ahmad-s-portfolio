import { useActiveSection } from '../hooks/useActiveSection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NAV_ITEMS, SECTION_IDS } from '../constants';

interface RenderNavItemsProps {
    isMobile: boolean;
    isOpen?: boolean;
}

export default function RenderNavItems({ isMobile, isOpen = false }: RenderNavItemsProps) {
    const activeSection = useActiveSection(SECTION_IDS);
    const navMobileClasses = `overflow-hidden transition-all duration-300 flex-col gap-4 ${isOpen ? 'max-h-screen mt-8' : 'max-h-0'}`
    const navDesktopClasses = `hidden justify-between w-full gap-16 container mx-auto md:flex`

    return (
        <nav className={`flex  ${isMobile ? navMobileClasses : navDesktopClasses}`}>
            {
                NAV_ITEMS.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {index === 2 && !isMobile && (
                                <Image src="/images/Logo.png" alt="logo" width={50} height={100} className='object-contain' />
                            )}
                            <Link href={`#${item.href}`} className={`${activeSection === item.href ? 'bg-primary font-bold' : ''} text-center text-white py-4 w-full rounded-full`}>{item.label}</Link>
                        </React.Fragment>
                    )
                })
            }
        </nav>
    )
}
