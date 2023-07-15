import { categoryData } from "../../constants/index"
import React from "react"

function Categories() {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto mt-3 px-2 md:px-5 ">
                <div className="bg-white grid grid-cols-4 lg:grid-cols-6 md:grid-cols-6 md:shadow-sm sm:grid-cols-6 gap-y-4 gap-x-2 border-2 border-solid py-2 px-2 rounded-md ">
                    {categoryData.map((category, index) => (
                        <CategoryFeed
                            key={index}
                            title={category.title}
                            imgSrc={category.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function CategoryFeed({ imgSrc, title }) {
    return (
        <div className="cursor-pointer py-2  h-[100px] w-[70px] md:w-full md:h-full sm:h-full sm:w-full">
            <img src={imgSrc} alt="category" className="mb-2 rounded-md" />
            <h2 className="text-[10px] lg:text-[15px] md:text-[13px] text-center font-sans">
                {title}
            </h2>
        </div>
    )
}

export default Categories
