import { NextComponentType } from "next"
import Link from "next/link"
import { useState } from "react"

const Navbar: NextComponentType = () => {
    const [SidebarVisibily, openSidebar] = useState(true)
    const defaultSidebarStyling = "h-full top-0 left-0 fixed md:hidden pt-20 bg-grey text-start overflow-x-hidden z-10 transition-all duration-500 ease-out"

    return (
        <nav className="top-0 sticky flex items-center justify-between px-14 py-8 text-white bg-grey z-20 opacity-[.99] easeInAnimation">
            <div id="mySidenav" className={SidebarVisibily ? `w-0 ${defaultSidebarStyling}` : `w-full ${defaultSidebarStyling}`}>
                <a className="text-4xl absolute top-7 right-[60px]" onClick={() => openSidebar(!SidebarVisibily)}>&times;</a>

                <Link href="/">
                    <a className="w-fit block py-2 pr-2 pl-8 text-2xl link link-underline link-underline-black">Products</a>
                </Link>

                <Link href="/">
                    <a className="w-fit block py-2 pr-2 pl-8 text-2xl link link-underline link-underline-black whitespace-nowrap">How it works</a>
                </Link>

                <Link href="/">
                    <a className="w-fit block py-2 pr-2 pl-8 text-2xl link link-underline link-underline-black">Pricing</a>
                </Link>

                <Link href="/">
                    <a className="w-fit block py-2 pr-2 pl-8 text-2xl link link-underline link-underline-black">Contact</a>
                </Link>

                <button className="block ml-8 mt-4 bg-white text-black px-6 py-1 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out group">
                    <span className="group-hover:drop-shadow-[0_0_0.5px_rgba(0,0,0,0.5)] whitespace-nowrap font-bold text-sm">Get started</span>
                </button>
            </div>

            <Link href="/">
                <a className="font-Noopla text-xl border-b-2 border-b-transparent hover:scale-105 transition-transform duration-300 group">
                    <span className="group-hover:text-light transition-colors duration-300">b</span>its<span className="font-Questrial font-bold text-[19px]">w</span>ipe<span className="group-hover:text-light transition-colors duration-300">.</span>
                </a>
            </Link>

            <ul className="hidden md:flex flex-row space-x-4 lg:space-x-8 opacity-95 font-semibold">
                <li>
                    <Link href="/">
                        <a className="link link-underline link-underline-black">Products</a>   
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <a className="link link-underline link-underline-black">How it works</a>
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <a className="link link-underline-part link-underline-black">Pricing</a>
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <a className="link link-underline link-underline-black">Contact</a>
                    </Link>
                </li>
            </ul>

            <button className="bg-white text-black hidden md:block px-4 py-1 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out group">
                <span className="group-hover:drop-shadow-[0_0_0.5px_rgba(0,0,0,0.5)] font-bold text-sm">Get started</span>
            </button>

            <button className="md:hidden" onClick={() => openSidebar(!SidebarVisibily)}>
                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
            </button>
        </nav>
    )
}

export default Navbar