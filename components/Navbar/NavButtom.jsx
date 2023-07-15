"use client"
import { MdOutlineCardTravel, MdOutlineHealthAndSafety } from "react-icons/md"
import { BsTruck } from "react-icons/bs"
function NavButtom() {
    return (
        <div className="w-full bg-[#C0C0C0] py-2 h-12  hidden md:inline-block md:px-3">
            <div className="mt-1 max-w-7xl mx-auto flex flex-row md:space-x-10 lg:space-x-16 justify-center items-center w-full">
                <NavBarButtom title={"Travel"} Icon={MdOutlineCardTravel} />
                <NavBarButtom
                    title={"HealthCare"}
                    Icon={MdOutlineHealthAndSafety}
                />
                <NavBarButtom title={"Logistics"} Icon={BsTruck} />
                <NavBarButtom title={"Groceries"} Icon={MdOutlineCardTravel} />
                <NavBarButtom title={"Groceries"} Icon={BsTruck} />
                <NavBarButtom title={"Groceries"} Icon={BsTruck} />
            </div>
        </div>
    )
}

function NavBarButtom({ title, Icon }) {
    return (
        <div className="flex flex-row items-center space-x-3 cursor-pointer">
            {Icon && <Icon className="h-5 w-5" />}
            <h2 className="font-sans font-normal text-[15px]">{title}</h2>
        </div>
    )
}

export default NavButtom
