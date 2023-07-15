"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const images = [
    "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/oraimo/2023/March/1168x384_3.jpg",
    "https://ng.jumia.is/cms/0-1-initiatives/official-stores/2023/Updated-creative/Desktop_MLP_Slider__1168x384.jpg",
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/0-1-Adv-triple-banner/may/1168x384_dfc.jpg",
    "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/nivea/2023/june/radient-mlp.jpg",
]
function Banner2() {
    return (
        <div className="max-w-7xl mx-auto md:flex flex-row gap-x-3 md:px-5 px-2 mt-7">
            <div className="bg-white lg:w-[100%] md:w-[100%] rounded-md">
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
                                className="w-full h-[150px] xl:h-[410px] sm:h-[230px] md:h-[250px] lg:h-[300px]  object-cover rounded-md"
                                src={image}
                                alt="banner"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Banner2
