import Image from "next/image";

export default function ToggleMenu({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    return (
        <button onClick={() => setIsOpen(!isOpen)} className='relative h-[40px] w-[40px] acive:outline-none focus:outline-none md:hidden'>
            <Image src="/icons/close.svg" alt="close" width={50} height={20}  className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 rotate-0 scale-75" : "opacity-0 -rotate-90 scale-50"}`} />
            <Image src="/icons/menu.svg" alt="menu" width={50} height={20} className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
        </button>
    )
}
