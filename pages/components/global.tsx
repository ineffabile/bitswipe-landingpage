import { NextComponentType } from "next"
import Image from "next/image"

const Global: NextComponentType = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#D59FA8"
                    stroke="rgba(0, 0, 0, 0)"
                    d="M1423.099 111.508H2012.444V163.213H1423.099z"
                    transform="rotate(3.8 930.808 -7687.402) skewX(-18.238)"
                ></path>
                <path fill="#E4B4BC" d="M0 96l1440 96v128H0z"></path>
                <path
                    fill="#FA255E"
                    fillOpacity="0.5"
                    stroke="rgba(0, 0, 0, 0)"
                    d="M318.377 71.47H450.226V104.61099999999999H318.377z"
                    transform="rotate(3.8 -76.801 10643.937) skewX(-18.238)"
                ></path>
            </svg>
            
            <div className="flex bg-light px-12 md:px-0 bg-cover bg-no-repeat bg-[url('/images/globe-image.png')] md:bg-none">
                <span className="grid place-items-end items-center flex-auto pb-20">
                    <div className="flex flex-col space-y-4">
                        <span className="text-vivid font-bold text-lg">Global scale</span>

                        <span className="text-3xl md:text-4xl font-bold">
                            Introduce your business<br/>
                            to people around the world.
                        </span>

                        <span className="max-w-lg md:text-justify py-12 font-semibold">
                            For ambitious companies around the world, <span className="text-lg underline underline-offset-2 decoration-vivid">bitswipe</span>
                            &nbsp;makes moving money as simple, borderless and efficient as possible, maintaining low serivce fees and professional support.
                        </span>

                        <div className="flex flex-row space-x-16 md:space-x-20">
                            <div className="flex flex-col space-y-3">
                                <span className="text-2xl font-semibold border-l-2 border-l-vivid pl-4">40+</span>
                                <span className="text-md opacity-90">supported blockchains<br />to receive money on.</span>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <span className="text-2xl font-semibold border-l-2 border-l-vivid pl-4">1%</span>
                                <span className="text-md opacity-90">crypto payment<br />processing fee.</span>
                            </div>
                        </div>
                    </div>
                </span>
                
                <span className="hidden md:grid place-items-center flex-auto">
                    <Image
                        src="/images/globe-render.png"
                        width="480"
                        height="480"
                        className="globeAnimation"
                        alt="Earth Globe Render"
                    />
                </span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E4B4BC" d="M0 96l1440 96V0H0z"></path>
            </svg>
        </div>
    )
}

export default Global