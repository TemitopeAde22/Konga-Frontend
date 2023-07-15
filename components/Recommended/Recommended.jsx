import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { recommended } from "../../constants/index"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
function Recommended() {
    return (
        <div className="max-w-7xl mx-auto mt-3 md:px-5 sm:px-4 px-2 py-3 md:shadow-lg  bg-white rounded-md ">
            <h2 className="text_header">Recommended For You</h2>
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
                {recommended.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="section_container ">
                            <img
                                src={item.image}
                                alt="items"
                                className="md:mb-2 rounded-md h-[200px] w-[200px] object-contain md:h-[190px]"
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
    )
}

export default Recommended
