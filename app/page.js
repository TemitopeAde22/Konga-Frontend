"use client"
import Aniverssary from "@/components/Aniverssary/Aniverssary"
import Banner from "@/components/Banner/Banner"
import Banner2 from "@/components/Banner2/Banner2"
import Categories from "@/components/Categories/Categories"
import FooterMobile from "@/components/Footer Mobile/FooterMobile"
import Footer from "@/components/Footer/Footer"
import Recommended from "@/components/Recommended/Recommended"
import Sneakers from "@/components/Trending Sneakers/Sneakers"

export default function Home() {
    return (
        <div className="bg-[#F1F1F2]">
            <Banner />
            <Categories />
            <Recommended />
            <Aniverssary />
            <Sneakers />
            <Banner2 />
            <Footer />
            <FooterMobile />
        </div>
    )
}
//background 'style={{ backgroundColor: window.innerWidth < 768 ? '#f1f1f2' : '',
//backgroundImage: window.innerWidth >= 768 ? 'url("../images/image-bg.jpg")' : 'none', }}
