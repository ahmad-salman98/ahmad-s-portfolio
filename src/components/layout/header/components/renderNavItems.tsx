import { useActiveSection } from '@/hooks/useActiveSection';
import Image from 'next/image';

export default function RenderNavItems({ isMobile, isOpen=false }: { isMobile: boolean, isOpen?: boolean }) {
    const navItems = [{ label: "Home", href: "home" }, { label: "About", href: "about" }, { label: "Projects", href: "projects" }, { label: "Contact", href: "contact" }];
    const sectionIds = ["home", "about", "projects", "contact"];
    const activeSection = useActiveSection(sectionIds);
    const navMobileClasses = `overflow-hidden transition-all duration-300 flex-col gap-4 ${isOpen ? 'max-h-screen mt-8' : 'max-h-0'}`
    const navDesktopClasses = `hidden md:flex justify-between w-full gap-16 container mx-auto`

    return (
        <nav className={`flex  ${isMobile ? navMobileClasses : navDesktopClasses}`}>
            {
                navItems.map((item, index) => {
                    return (
                        <>
                            {index == 2 && !isMobile && (
                                <Image src="/images/Logo.png" alt="logo" width={50} height={100} className='object-contain' />
                            )}
                            <a href={`#${item.href}`} key={index} className={`${activeSection === item.href ? 'bg-primary font-bold' : ''} text-center text-white py-4 w-full rounded-full`}>{item.label}</a>
                        </>
                    )
                })
            }
        </nav>

    )
}
