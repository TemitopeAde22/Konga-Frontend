"use client"

import { MdOutlineComputer } from "react-icons/md"
import { BiSolidTShirt } from "react-icons/bi"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import { AiOutlineTag } from "react-icons/ai"

function NavComponents() {
    return (
        <div className="flex flex-row justify-evenly md:hidden bg-[#1c325f] border border-solid border-x-0 border-b-0">
            <NavComponent title={"Fashion"} Icon={BiSolidTShirt} />
            <NavComponent title={"Computer"} Icon={MdOutlineComputer} />
            <NavComponent title={"Phones"} Icon={PhoneIphoneIcon} />
            <NavComponent title={"All Deals"} Icon={AiOutlineTag} />
        </div>
    )
}

function NavComponent({ title, Icon }) {
    return (
        <div className="flex flex-col items-center text-white  mt-1">
            {Icon && <Icon className="h-5 w-5" />}
            <h2 className="font-sans font-normal text-[15px]">{title}</h2>
        </div>
    )
}

export default NavComponents
