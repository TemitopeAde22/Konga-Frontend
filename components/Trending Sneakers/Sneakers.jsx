import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { sneakers } from "../../constants/index"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Marquee from "react-fast-marquee"
function Sneakers() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" mt-3 md:px-5 px-2 py-3 bg-white md:shadow-lg rounded-md ">
                <h2 className="text_header">Trending Sneakers</h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={6}
                    breakpoints={{
                        375: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                        768: { slidesPerView: 4 },
                    }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {sneakers.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="section_container ">
                                <img
                                    src={item.image}
                                    alt="shoes"
                                    className="md:mb-2 rounded-md h-[200px] w-[200px] object-contain md:h-[190px]  "
                                />
                                <h2 className="text-[12px] md:text-[13px] truncate mb-2 px-2">
                                    {item.title}
                                </h2>
                                <h3 className="font-semibold px-2">
                                    ₦ {item.price}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Marquee className="flex w-full rounded-md mt-5 ">
                <Brands imgSrc={"images/brand-01.png"} />
                <Brands imgSrc={"images/brand-02.png"} />
                <Brands imgSrc={"images/brand-03.png"} />
                <Brands imgSrc={"images/brand-04.png"} />
                <Brands imgSrc={"images/brand-05.png"} />
                <Brands imgSrc={"images/brand-06.png"} />
                <Brands imgSrc={"images/brand-07.png"} />
                <Brands imgSrc={"images/brand-08.png"} />
            </Marquee>
        </div>
    )
}

function Brands({ imgSrc }) {
    return (
        <div className=" mx-7 hidden lg:inline-block ">
            <img
                className="w-20 h-20 object-contain"
                src={imgSrc}
                alt="brand"
            />
        </div>
    )
}

export default Sneakers
