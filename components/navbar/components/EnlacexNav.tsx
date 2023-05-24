"use client"
import Link from "next/link"
import { SubMenu } from "./SubMenu"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Ingresar } from "./Login"


export const EnlacexNav = () => {
    const [abrir, setAbrir] = useState<boolean>(false)
    return (
        <>
            <div className="flex items-center">
                <Ingresar tipo={"movil"} />
                <button className="block lg:hidden h-[44px] py-3 px-4 border rounded-md space-y-1" onClick={() => setAbrir(true)}>
                    <div className="h-[2px] w-[20px] bg-black"></div>
                    <div className="h-[2px] w-full bg-black"></div>
                    <div className="h-[2px] w-full bg-black"></div>
                </button>
            </div>
            <div className={`flex flex-col top-0 absolute left-0 p-5 ${abrir && "translate-x-0"} -translate-x-full transition-all duration-300 ease-in-out bg-white z-[999] w-full lg:p-0 h-screen lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent lg:relative lg:items-center gap-5 space-x-2 lg:translate-x-0`}>
                <div className="flex items-center w-full justify-between">
                    <Image src="/img/logo.webp" alt='Desarrollo Global' width={200} height={45} className="block lg:hidden" />
                    <button className="lg:hidden block" onClick={() => setAbrir(false)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <Link href="/" >Inicio</Link>
                <SubMenu title='Cursos' />
                <SubMenu title='Diplomas' />
                <Link href="/" >Diplomados</Link>
                <Link href="/" >InHouse</Link>
                <Link href="/" >Seminarios</Link>
            </div>
        </>
    )
}
