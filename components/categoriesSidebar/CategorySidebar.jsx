"use client"
import { MdNewspaper, MdOutlineMoveToInbox } from "react-icons/md"
import {} from "react-icons/io"
import { CiHeart } from "react-icons/ci"
import { BiMessageEdit } from "react-icons/bi"
import { categories } from "../../constants/index"

function CategorySidebar() {
    return (
        <div className="sidebar">
            <div className="border-2 border-solid border-x-0 border-t-0 pb-4 lg:hidden">
                <h3 className="font-fira text-[#002e63] font-semibold text-[14px] mb-3 uppercase">
                    My Konga Account
                </h3>
                <div className="flex flex-col gap-y-[15px]">
                    <Sidebar title={"Orders"} Icon={MdOutlineMoveToInbox} />
                    <Sidebar title={"Pending Reviews"} Icon={BiMessageEdit} />
                    <Sidebar title={"Vouchers"} Icon={MdNewspaper} />
                    <Sidebar title={"Saved Items"} Icon={CiHeart} />
                </div>
            </div>

            <div className="lg:hidden">
                <h3 className="font-fira text-[#002e63] font-semibold text-[14px] uppercase">
                    Categories
                </h3>
            </div>
            <>
                {categories.map((category, index) => (
                    <Categories
                        key={index}
                        title={category.title}
                        Icon={category.Icon}
                    />
                ))}
            </>

            <div className="border-2 border-solid border-x-0 border-b-0 pt-4 lg:hidden">
                <h3 className="font-fira text-[#002e63] font-semibold text-[14px] mb-3 uppercase">
                    Our Services
                </h3>
                <div className="flex flex-col gap-y-[20px]">
                    <Sidebar title={"J-Force"} Icon={MdOutlineMoveToInbox} />
                    <Sidebar
                        title={"Pay Airtime & Bills"}
                        Icon={BiMessageEdit}
                    />
                    <Sidebar
                        title={"Pay Electricity Bills"}
                        Icon={MdNewspaper}
                    />
                    <Sidebar title={"Buy Data"} Icon={CiHeart} />
                </div>
            </div>
        </div>
    )
}

function Categories({ title, Icon }) {
    return (
        <div className="flex items-center gap-x-3 hover:text-[#5577f2]">
            {Icon && <Icon className="h-5 w-5" />}
            <h2 className="font-sans font-normal text-[14px] md:text-[13px] lg:text-[13px] cursor-pointer">
                {title}
            </h2>
        </div>
    )
}

function Sidebar({ title, Icon }) {
    return (
        <div className="flex items-center gap-x-2 hover:text-[#5577f2]">
            <Icon className="h-5 w-5" />
            <h3 className="font-sans font-normal text-[14px] md:text-[13px] lg:text-[15px] cursor-pointer ">
                {title}
            </h3>
        </div>
    )
}

export default CategorySidebar
