import {Navbar} from "flowbite-react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useState} from "react";

type DropdownMenu = "development" | "marketing" | "design" | null;

export const Header = () => {
    const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(null);
    const toggleDropdown = (menu: DropdownMenu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };
    return (
        <header className="relative pt-5">
            <Navbar fluid rounded className="container mx-auto bg-white bg-opacity-5 rounded-xl">
                <Navbar.Brand href="#">
                    <Image
                        loading="eager"
                        width={100}
                        height={100}
                        src="/assets/svg/2btech_logo.svg"
                        className="mr-3 h-8 sm:h-11"
                        alt="2BTech Logo"
                    />
                </Navbar.Brand>
                <div className="flex gap-1 md:order-2">
                    <Link
                        href="#"
                        className="bg-gradient-to-r p-2 rounded-md text-white from-blue-500 via-blue-700 to-primary font-bold"
                    >
                        Get Innovate Together
                    </Link>
                    <Navbar.Toggle className="text-white hover:bg-transparent"/>
                </div>
                <Navbar.Collapse className="transition-all duration-500">
                    <div
                        className="flex flex-col menu md:flex-row   items-center justify-center md:justify-start space-y-1 md:space-y-0 md:space-x-6">
                        <Navbar.Link className="text-white border-none font-bold" href="/">
                            Home
                        </Navbar.Link>
                        {["development", "marketing", "design"].map((menu) => (
                            <div key={menu}
                                 className="relative md:ms-0 ms-3  border-none font-bold group md:hover:cursor-pointer"
                                 onMouseEnter={() => setOpenDropdown(menu as DropdownMenu)}
                                 onMouseLeave={() => setOpenDropdown(null)}>
                                <div
                                    className="text-white hover:text-[#0c728e] flex items-center gap-2 cursor-pointer md:hover:text-[#0c728e]"
                                    onClick={() => toggleDropdown(menu as DropdownMenu)}>
                                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                </div>
                                <div
                                    className={`absolute left-0 top-full w-full md:w-72 max-w-md p-4 bg-white shadow-xl rounded-lg z-[99] 
            transition-all duration-300 ease-in-out transform ${
                                        openDropdown === menu
                                            ? "opacity-100 visible translate-y-0 scale-100"
                                            : "opacity-0 invisible -translate-y-4 scale-95"
                                    }`}
                                >
                                    <p className="text-gray-600 text-sm  mb-4 leading-relaxed tracking-wide">
                                        {menu === "development" && "We build secure, user-friendly software tailored to your business and users' needs."}
                                        {menu === "marketing" && "We’ll help your business generate long-term value with our full-stack digital marketing services."}
                                        {menu === "design" && "We design your product, brand & services to enhance visual communication for effective promotion."}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 text-lg font-bold text-gray-800">
                                        {menu === "development" && (
                                            <>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">Website</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">CMS</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">CRM</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">ERP</Link>
                                                </li>
                                            </>
                                        )}
                                        {menu === "marketing" && (
                                            <>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">SMM</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">SEO</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">PPC</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">Email</Link>
                                                </li>
                                            </>
                                        )}
                                        {menu === "design" && (
                                            <>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">UI/UX</Link>
                                                </li>
                                                <li className="hover:text-blue-500 transition-all duration-300">
                                                    <Link href="#">Visual Design</Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <Navbar.Link href="/blog" className="text-white border-none font-bold">
                            Blog
                        </Navbar.Link>
                        <Navbar.Link className="text-white border-none font-bold" href="/about">
                            About
                        </Navbar.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </header>);
};
