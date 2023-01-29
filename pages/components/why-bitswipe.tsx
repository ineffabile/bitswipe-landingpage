import { NextComponentType } from "next"
import Image from "next/image"

const WhyBitswipe: NextComponentType = () => {
    return (
        <div className="w-full grid place-items-center text-white px-12 md:px-0 mb-20">
            <div className="flex flex-col space-y-4">
                <span className="text-light font-semibold text-lg">Why Bitswipe</span>

                <span className="text-2xl md:text-3xl font-bold">
                    A payment <br className="md:hidden"/>processing service<br />that makes your business&nbsp;
                        <span data-text="flo." className="text-2xl md:text-4xl relative overflow-hidden before:mt-1 md:before:mt-2 before:content-[attr(data-text)attr(data-text)] before:underline before:text-lg md:before:text-2xl before:underline-offset-2 before:decoration-wavy before:decoration-dark before:absolute before:text-transparent">flow</span>
                    .
                </span>

                <span className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 pt-6 md:pt-10 md:pb-5">
                    <span className="max-w-xl md:text-justify">
                        We provide everything that&apos;s required to start accepting crypto payments on your website.
                        Bitswipe&apos;s services are designed for <span className="text-dark font-semibold">online and in-person retailers</span>, <span className="text-dark font-semibold">freelancers</span>, <span className="text-dark font-semibold">crypto-related businesses</span> and everything in between.
                    </span>
                    <span className="max-w-sm md:text-justify">
                        We also cover <span className="text-dark font-semibold">anti-fraud algorithms</span>, <span className="text-dark font-semibold">crypto payment terminals</span>, and much more.
                    </span> 
                </span>

                <button className="bg-white text-black w-48 px-4 py-1 rounded-full font-semibold hover:scale-105 transition-transform duration-300 ease-in-out group">
                    <span className="group-hover:drop-shadow-[0_0_0.5px_rgba(0,0,0,0.5)] text-sm">Start with payments &#129066;</span>
                </button>
                <span className="hidden md:block -translate-y-16 -translate-x-6 place-self-end">
                    <Image
                        src="/images/card-transition.png"
                        width="325"
                        height="200"
                        alt="Transition Card"
                    />
                </span>
            </div>
        </div>
    )
}

export default WhyBitswipe