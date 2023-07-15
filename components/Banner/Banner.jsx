"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import React from "react"
import CategorySidebar from "../categoriesSidebar/CategorySidebar"

const images = [
    "../images/shop.jpg",
    "../images/car.jpeg",
    "../images/delivery.jpeg",
    "../images/KNow3.png",
]
function Banner() {
    return (
        <div className=" md:mb-10 mt-5">
            <div className="max-w-7xl mx-auto lg:flex flex-row gap-x-3 hidden md:px-5 md:hidden">
                <CategorySidebar />
                <div className="bg-white lg:w-[64%] md:w-[60%] rounded-md ">
                    <Carousel
                        className="relative z-10"
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicator={false}
                        showThumbs={false}
                        interval={5000}
                    >
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    loading="lazy"
                                    className="w-full xl:h-[453px] md:h-[540px] lg:h-[473px] object-cover rounded-md"
                                    src={image}
                                    alt="banner"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className=" text-black  lg:w-[18%] md:w-[20%] h-full  lg:flex flex-col gap-y-[15px] rounded-md sm:hidden">
                    <div className="rounded-md">
                        <img
                            className="xl:h-[217px] lg:h-[229px] md:h-[262px] w-full object-cover rounded-md"
                            src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>

                    <div className="rounded-md">
                        <img
                            className="xl:h-[217px] lg:h-[229px] md:h-[262px] w-full object-cover rounded-md"
                            src="https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
