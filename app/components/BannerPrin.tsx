"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Image from 'next/image';
import { DataPrin } from "./data/dataPrin";

export const BannerPrin = () => {


    const [activeIndex, setActiveIndex] = useState<number>(0);

    const settings = {
        customPaging: function (i: number) {
            return (
                <span className={`h-[3px] bg-[#fff] block -m-5 w-[25px] 
                ${i === activeIndex ? "bg-white" : "opacity-[0.5]"}`}></span>
            );
        },
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        afterChange: (currentSlide: number) => {
            setActiveIndex(currentSlide);
        }
    };


    return (
        <main className="w-full">
            <Slider {...settings}>
                <article className="bg-banner1 w-full h-[500px]">
                    <div className="container mx-auto flex text-white">
                        <div className="flex h-[500px] items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-5">
                                    <Image src="/img/logo-blanco.webp" alt="Desarrollo Global - Banner" width={300} height={74} className="" />
                                    <Image src="/img/Logo-isowebp.webp" alt="Desarrollo Global - Banner" width={196} height={93} className="!hidden lg:!block" />
                                </div>
                                <h1 className="font-bold text-[1.6rem] text-center lg:text-start lg:text-4xl mt-5 w-full lg:w-[80%] ">Centro de Capacitación y Desarrollo Global 🎯</h1>
                                <p className="w-full lg:w-[65%] mt-5 text-center lg:text-start">Mas de 12 años brindando programas virtuales; Somos una empresa educativa que cuenta con certificación de calidad ISO 9001-2015.</p>
                            </div>
                            <div className="w-1/2 hidden lg:block">
                                <Image src="/img/genteIndex.webp" alt="Desarrollo Global - Banner" width={660} height={440} className="mt-[78px]" />
                            </div>
                        </div>

                    </div>
                </article>
                <article className="bg-banner2 w-screen h-[500px]">
                    <div className="container mx-auto flex h-[500px]">
                        <div className="w-full text-center lg:text-start lg:w-1/2 p-10">
                            <h2 className="text-white font-black text-2xl">Tenemos programas enfocados al desarrollo de tus capacidades.</h2>
                            <div className="grid grid-cols-3 gap-5 mt-7">
                                {
                                    DataPrin.map((dat) => (
                                        <div className="bg-white p-2 gap-2 w-auto lg:w-[210px] h-[61px] rounded-md flex items-center justify-between" key={dat.id} >
                                            <Image src={dat.img} alt={dat.title} width={45} height={45} className="mx-auto lg:mx-auto" />
                                            <p className="text-[11px] hidden lg:block">{dat.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className="text-white text-center font-bold text-lg mt-5">Aprende y Certifícate en mas de 90 programas</p>

                        </div>
                        <div className="w-1/2 hidden lg:block">
                            <Image src="/img/hombreIndex.webp" alt="Desarrollo Global - Banner" width={603} height={633} className="h-[633px] mx-auto" />
                        </div>
                    </div>
                </article>
            </Slider>
        </main>
    )
}
