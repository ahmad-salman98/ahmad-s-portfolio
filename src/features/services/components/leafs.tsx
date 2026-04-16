import Image from "next/image";

export default function Leafs() {
    return (
        <div className="absolute inset-0">
            <Image src="/images/leaf.png" alt="leaf" width={135} height={135} className=" absolute top-[-20px] left-1/2 lg:top-1/5 lg:left-[35%] rotate-220"  style={{ filter: "blur(1.5px)" }} />
            <Image src="/images/leaf.png" alt="leaf" width={350} height={350} className=" absolute top-1/4 left-[-80px] rotate-150"  style={{ filter: "blur(1px)" }} />
            <Image src="/images/leaf.png" alt="leaf" width={600} height={600} className=" absolute bottom-[-50px] right-[-250px]"/>
        </div>
    )
}
