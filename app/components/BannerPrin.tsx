
"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
export const BannerPrin = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const settings = {
        customPaging: function (i: number) {
            return (
                <span className={`h-[3px] bg-[#fff] block -m-5 w-[20px] 
                ${i === activeIndex ? "bg-white" : "opacity-[0.5]"}`}></span>
            );
        },
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: (currentSlide: number) => {
            setActiveIndex(currentSlide);
        }
    };

    return (
        <div className="w-screen">
            <Slider {...settings}>
                <div className="bg-blue-500 w-screen h-[500px] ">
                    <h3 className="w-screen">1</h3>
                </div>
                <div className="bg-blue-500 w-screen h-[500px]">
                    <h3 className="w-screen">2</h3>
                </div>
                <div className="bg-blue-500 w-screen h-[500px]">
                    <h3 className="w-screen">3</h3>
                </div>
            </Slider>
        </div>
    )
}
