import React, { useState } from "react"
import { BiSolidPhone } from "react-icons/bi"
import { MdEmail, MdFacebook } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"
import { LiaWhatsapp } from "react-icons/lia"
import { PiInstagramLogo, PiYoutubeLogoFill } from "react-icons/pi"
import { useForm } from "react-hook-form"
import { footerLinks } from "../../constants/index"
import AppleIcon from "@mui/icons-material/Apple"
import Link from "next/link"
function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [email, setEmail] = useState("")
    return (
        <div className="w-full">
            <div className="bg-[#1c1d1f] mt-10 hidden md:hidden lg:inline-block w-full">
                <div className="mx-10 flex flex-row items-center lg:gap-x-20 py-4 xl:gap-x-20 xl:justify-between 2xl:gap-x-32">
                    <div className="flex flex-row items-center lg:gap-x-7 xl:gap-x-10">
                        <FooterComponents
                            Icon={MdEmail}
                            title={"EMAIL SUPPORT"}
                            details={"Help@Konga.com"}
                            url={
                                "https://mail.google.com/mail/u/0/#inbox?compose=new"
                            }
                        />
                        <FooterComponents
                            Icon={BiSolidPhone}
                            title={"PHONE SUPPORT"}
                            details={"07059195123, 07059195123"}
                        />
                        <FooterComponents
                            Icon={LiaWhatsapp}
                            title={"WHATSAPP"}
                            details={"07059195123, 07059195123"}
                            url={"https://wa.me/qr/3RPF6QQB7U7FM1"}
                        />

                        <div className="lg:hidden flex-col gap-y-4 md:hidden xl:flex ml-3">
                            <h2 className="font-roboto font-semibold text-[#f2f2f2] text-[13px]">
                                GET LATEST DEALS
                            </h2>
                            <h2 className="font-roboto font-semibold text-[#f2f2f2] text-[13px]">
                                Our best promotions sent to your inbox.
                            </h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className="md:hidden lg:flex ml-10">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-1 px-3 lg:w-[160px] outline-none border-none rounded-l-md text-[12px]"
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                {...register("Email Address", {
                                    required: true,
                                })}
                            />
                            {errors.email && (
                                <p className="">Email Address is Required</p>
                            )}
                            <button
                                type="submit"
                                className="bg-[#002e63] border-none py-1 px-3 text-white rounded-r-md"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-[#0c0c0c] hidden lg:flex flex-row  xl:gap-x-[60px] lg:gap-x-[50px] px-10 py-3 w-full">
                {footerLinks.map((column) => (
                    <FooterColumn
                        key={column.title}
                        title={column.title}
                        links={column.links}
                    />
                ))}

                <div className="text-white">
                    <h4 className="uppercase font-semibold font-sans lg:text-[12px] xl:stext-[15px] text-[#b5b5b5] hover:text-white mb-3">
                        Download & Connect with us
                    </h4>

                    <div className="w-full flex items-center gap-x-3 mb-10">
                        <div className="flex items-center gap-x-2 border border-solid bg-[#000] border-black rounded-md w-[50%] py-1 px-2">
                            <AppleIcon sx={{ width: "40px", height: "40px" }} />
                        </div>

                        <div className="flex items-center gap-x-2 border border-solid bg-[#000] border-black rounded-md w-[50%] py-1 px-2">
                            <img
                                className="bg-white h-[40px] w-[40px]"
                                src="images/andriod.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="uppercase font-semibold font-sans lg:text-[12px] xl:text-[15px] text-[#b5b5b5] hover:text-white mb-3">
                            CONNECT WITH US
                        </h3>

                        <div className="flex gap-x-5">
                            <PiInstagramLogo className="h-6 w-6 cursor-pointer" />
                            <PiYoutubeLogoFill className="h-6 w-6 cursor-pointer" />
                            <BsTwitter className="h-6 w-6 cursor-pointer" />
                            <MdFacebook className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FooterComponents({ title, Icon, details, url }) {
    return (
        <div className="flex flex-row gap-x-3">
            <Icon className="h-6 w-6 object-contain bg-[#f2f2f2] rounded-full p-1" />
            <div className="flex flex-col gap-y-4 text-[#bcb9b9]  hover:text-white">
                <h2 className="font-roboto font-semibold lg:text-[10px] xl:text-[13px]">
                    {title}
                </h2>
                <h2 className="font-roboto font-semibold lg:text-[10px] xl:text-[13px] cursor-pointer">
                    <a href={url}>{details}</a>
                </h2>
            </div>
        </div>
    )
}

const FooterColumn = ({ title, links }) => (
    <div className="text-white w-full flex flex-col gap-y-5">
        <h4 className="font-semibold font-sans lg:text-[10px] xl:text-[15px] text-[#b5b5b5] hover:text-white">
            {title}
        </h4>
        <ul className="flex flex-col gap-2 font-sans text-[#b5b5b5] lg:text-[10px] font-thin xl:text-[13px] cursor-pointer">
            {links.map((link) => (
                <Link className="hover:text-white" href="/" key={link}>
                    {link}
                </Link>
            ))}
        </ul>
    </div>
)

export default Footer
