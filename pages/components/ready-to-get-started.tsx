import { NextComponentType } from "next"
import Link from "next/link"

const ReadyToGetStarted: NextComponentType = () => {
    return (
        <div className="grid place-items-center text-white mt-16 mb-40 md:mb-64 px-12 md:px-0">
            <span className="text-4xl mb-10">Ready to get started?</span>
            
            <p className="hidden">BitSwipe | Top Online and Crypto Payment Processor. Explore modern world's payments.</p>

            <span className="max-w-md mb-10 text-justify md:text-start">
                Explore Bitswipe Payments, or create an account instantly
                and start accepting crypto payments.
                You can also contact us to design a custom package for your business or ask any questions if needed.&nbsp;<br />
                <span data-text="We're ..," className="text-lg md:text-xl relative overflow-hidden before:content-[attr(data-text)attr(data-text)] before:underline before:text-[1.35rem] md:before:text-2xl before:underline-offset-2 whitespace-nowrap before:decoration-wavy before:decoration-dark before:absolute before:text-transparent">We&apos;re here for you!</span>
            </span>

            <div className="flex flex-row items-center space-x-5">
                <button className="bg-white text-black px-6 py-1 rounded-full font-semibold hover:scale-105 transition-transform duration-300 ease-in-out group">
                    <span className="group-hover:drop-shadow-[0_0_0.5px_rgba(0,0,0,0.5)] text-sm">Start now &#129066;</span>
                </button>
                
                <Link href="/">
                    <a className="border-b-2 border-b-transparent hover:border-b-light transition-colors duration-300 ease-in-out">Contact us</a>
                </Link>
            </div>
        </div>
    )
}

export default ReadyToGetStarted