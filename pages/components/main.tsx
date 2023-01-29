import { NextComponentType } from "next"
import Image from "next/image"

const Main: NextComponentType = () => {
    const getStarted = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        })
    }

    return (
        <main className="w-full min-h-screen md:min-h-0 mb-2 md:mb-64 space-y-20 grid place-items-center text-white items-start 2xl:items-center bg-contain bg-no-repeat bg-[url('/images/cards-background-overlay.png')] md:bg-none">
            <h1 className="text-4xl lg:text-6xl translate-y-20 md:translate-y-0 drop-shadow-[0_0_6px_rgba(0,0,0,0.75)] font-bold self-center mt-16 3xl:mt-23 md:self-start text-center easeInAnimation">Explore <span className="text-light"><br className="lg:hidden"/>modern world&apos;s</span> <br className="lg:hidden"/>payments<span className="md:text-dark">.</span></h1>
            
            <div className="hidden lg:flex flex-row drop-shadow-[0_15px_35px_rgba(228,180,188,0.25)] cardsDivAnimation z-10">
                <Image
                    src="/images/card-preview-1.png"
                    width="320"
                    height="456"
                    className="absolute translate-x-12 firstCardAnimation"
                    alt="First Card"
                />

                <Image
                    src="/images/card-preview-2.png"
                    width="320"
                    height="456"
                    className="absolute rotate-12 scale-90 -translate-x-20 secondCardAnimation"
                    alt="Second Card"
                />
            </div>

            <div className="flex flex-col space-y-6 items-center easeInAnimation">
                <button className="border-2 border-dark bg-light md:bg-transparent text-black md:text-white px-6 py-2 rounded-full font-semibold md:hover:bg-light hover:text-white md:hover:text-black hover:scale-105 transition-all duration-500" onClick={getStarted}>
                    Get Started
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 opacity-20 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
        </main>
    )
}

export default Main