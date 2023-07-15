"use client"
import React, { useState } from "react"

import PersonIcon from "@mui/icons-material/Person"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import {
    MdOutlineShoppingCart,
    MdOutlineClose,
    MdOutlineMoveToInbox,
} from "react-icons/md"
import NotificationsIcon from "@mui/icons-material/Notifications"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { BiSearchAlt2 } from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { useRouter } from "next/navigation"
import { BsFillPersonFill } from "react-icons/bs"
import { motion } from "framer-motion"
import { CiHeart } from "react-icons/ci"
import CategorySidebar from "../categoriesSidebar/CategorySidebar"
import Link from "next/link"
import NavButtom from "./NavButtom"
import NavComponents from "./NavComponents"


function Navbar() {
    const [toogle, setToogle] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const router = useRouter()
    return (
        <div className="sticky top-0 z-50">
            <div className="w-full bg-[#002e63] hidden md:inline-block lg:px-5">
                <div className="flex flex-row items-center w-full gap-x-10 lg:justify-between">
                    <div className="flex flex-row items-center  text-white ">
                        <Link href={"/"}>
                            <img
                                className="h-14 w-24 object-contain mx-5"
                                src="../images/konga.png"
                                alt="logo"
                            />
                        </Link>

                        <motion.span
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="m1-10 animate-pulse font-Montserrat font-bold md:text-[14px] lg:text-[14px]  xl:text-[18px]"
                        >
                            Guaranteed Same Day Delivery{" "}
                            <span className=" font-extralight">
                                within 1-6 Hours
                            </span>
                            <span className="text-[#9ba3aa]">
                                {" "}
                                + Free Shipping
                            </span>
                        </motion.span>
                    </div>

                    <div className="bg-[#32cd32]/70 text-gray-200 text-center py-2 px-5 lg:py-4 rounded-tl-[100px] md:hidden lg:inline-flex">
                        <span className="lg:text-[10px] xl:text-[20px] font-light">
                            Available in Lagos & Abuja
                        </span>
                    </div>

                    <div className="cursor-pointer bg-[#ffc40c] font-semibold text-white px-3 py-2 md:py-1 animate-bounce ">
                        <h2 className="w-full">Shop Now</h2>
                    </div>
                </div>
            </div>

            {/* top nav */}
            <div className="bg-[#002e63]">
                <div className="flex flex-col  md:flex-row md:items-center justify-between md:px-7 max-w-7xl mx-auto gap-x-6 flex-grow">
                    <div className="px-5 flex flex-row justify-between">
                        <div className="flex space-x-3 items-center">
                            <FiMenu
                                className="h-7 w-7 text-white lg:hidden"
                                onClick={() => setSidebar(true)}
                            />
                            <Link href={"/"}>
                                <img
                                    className="h-14 w-24 object-contain"
                                    src="../images/konga.png"
                                    alt="logo"
                                />
                            </Link>

                            {sidebar && (
                                <div className="animate-slide-right absolute top-[1px] -left-[112px] w-[90%] sm:w-[50%] overflow-y-scroll  h-screen lg:hidden">
                                    <div className="lg:hidden border bg-white flex flex-row justify-between items-center sticky top-0">
                                        <Link href={"/"}>
                                            <img
                                                className="h-14 w-24 object-contain cursor-pointer "
                                                src="../images/R.jpeg"
                                                alt="logo"
                                            />
                                        </Link>
                                        <MdOutlineClose
                                            className="h-7 w-7 text-black"
                                            onClick={() =>
                                                setSidebar((prev) => !prev)
                                            }
                                        />
                                    </div>
                                    <CategorySidebar />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-row items-center space-x-5 md:hidden">
                            <BsFillPersonFill className="h-8 w-8 text-white" />
                            <MdOutlineShoppingCart className="h-8 w-8 text-white " />
                        </div>
                    </div>

                    <div className="flex px-5 flex-1 mt-2 w-full py-2 flex-grow">
                        <div className="flex flex-1 bg-white items-center py-1 rounded-lg flex-grow">
                            <BiSearchAlt2 className="h-7 w-7 px-1 " />
                            <input
                                className="w-full flex-grow flex-shrink outline-none rounded-lg"
                                type="text"
                                placeholder="Search products and categories"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-5 relative">
                        <div onClick={() => setToogle((prev) => !prev)}>
                            <NavbarComponents
                                title={"Account & Lists"}
                                Icon={PersonIcon}
                                Icon2={ArrowDropDownIcon}
                            />
                        </div>
                        {toogle && (
                            <div className="bg-white absolute top-[43px] w-52 rounded-md">
                                <div className="border border-solid py-4 px-4 border-gray-400 flex items-center justify-center border-x-0 border-t-0 mb-3">
                                    <button
                                        type="button"
                                        onClick={() => router.push("/SignIn")}
                                        className="button hover:shadow-xl active:scale-90 transition duration-150"
                                    >
                                        SIGN IN
                                    </button>
                                </div>

                                <div className="flex flex-col gap-y-4 ">
                                    <NavList
                                        title={"My Account"}
                                        Icon={BsFillPersonFill}
                                    />
                                    <NavList
                                        title={"Orders"}
                                        Icon={MdOutlineMoveToInbox}
                                    />
                                    <NavList
                                        title={"Saved Items"}
                                        Icon={CiHeart}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="hidden lg:flex space-x-5">
                            <NavbarComponents
                                title={"Help"}
                                Icon={HelpOutlineIcon}
                            />
                            <NavbarComponents
                                title={"News"}
                                Icon={NotificationsIcon}
                            />
                        </div>
                        <Link href={"/Cart"}>
                            <NavbarComponents
                                title={"Cart"}
                                Icon={MdOutlineShoppingCart}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* buttom */}
            <NavComponents />
            <NavButtom />
        </div>
    )
}

function NavbarComponents({ title, Icon, Icon2 }) {
    return (
        <div className="hidden md:flex cursor-pointer text-white items-center gap-2">
            {Icon && <Icon className="h-5 w-5" />}
            <ul>
                <li className="font-fira font-normal hover:text-[#5577f2]">
                    {title}
                </li>
            </ul>
            {Icon2 && <Icon2 />}
        </div>
    )
}

function NavList({ title, Icon }) {
    return (
        <div className="nav_list">
            <Icon className="h-5 w-5 " />
            <h3 className="font-sans font-normal text-[16px]">{title}</h3>
        </div>
    )
}

export default Navbar

//
