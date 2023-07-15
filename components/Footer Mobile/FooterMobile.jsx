import React from "react"
import { IoIosArrowUp } from "react-icons/io"

function FooterMobile() {
    return (
        <div className="lg:hidden w-full mt-10">
            <div className="bg-[#3d3e3d] w-full">
                <div className="flex items-center justify-center flex-col gap-y-1 py-2 cursor-pointer">
                    <IoIosArrowUp className="text-white animate-bounce" />
                    <h3 className="text-white text-[10px] font-sans font-normal ">
                        BACK TO TOP
                    </h3>
                </div>
            </div>

            <div className="bg-[#202120] flex flex-col gap-y-2 w-full px-5">
                <div className="pt-2 flex flex-row sm:text-[10px] items-center sm:gap-x-[40px] md:gap-x-[50px] gap-x-[10px] justify-center text-white text-[8px] md:text-[10px]  font-sans font-normal">
                    <h4>HELP CENTER</h4>
                    <h4>CONTACT US</h4>
                    <h4>TERMS & CONDITIONS</h4>
                    <h4>PRIVACY NOTICE</h4>
                </div>

                <div className="flex flex-row sm:text-[10px] items-center sm:gap-x-[40px]  md:gap-x-[60px] gap-x-[10px] justify-center text-white text-[8px] md:text-[10px]  font-sans font-normal">
                    <h4>COOKIE NOTICE</h4>
                    <h4>BECOME A SELLER</h4>
                    <h4>REPORT A PRODUCT</h4>
                </div>

                <div className="flex flex-row  sm:text-[10px] items-center sm:gap-x-[40px]  md:gap-x-[50px] gap-x-[7px] justify-center text-white text-[8px] md:text-[10px] font-sans font-normal">
                    <h4>SHIP YOUR PACKAGE ANYWHERE IN NIGERIA</h4>
                    <h4>KONGA ANNIVERSARY 2023</h4>
                    <h4 className="hidden">NIGERIA</h4>
                </div>

                <div className="flex justify-center sm:text-[10px] sm:gap-x-[40px]  text-[#999797] text-[10px] md:text-[12px] font-sans font-normal border border-x-0 border-b-0 py-2">
                    <h4>© Konga Limited. All rights reserved</h4>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile
