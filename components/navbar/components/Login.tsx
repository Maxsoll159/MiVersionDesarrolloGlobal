"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ModalLogin } from './components/ModalLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export const Ingresar = ({ tipo }: { tipo: string }) => {
    let [isOpen, setIsOpen] = useState<boolean>(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            {tipo === "desktop" ? 
            (<button type="button" onClick={openModal} className="text-blue-600 bg-[#c2c8f9] font-bold p-3 rounded-md shadow-xl hidden lg:block">Ingreso al Aula Virtual</button>) 
            : 
            (<button onClick={openModal}  className='bg-[#5317fa] text-white py-2 lg:hidden font-normal rounded-md px-3 mr-2 flex items-center gap-2'><FontAwesomeIcon icon={faLaptopCode} />Aula Virtual</button>)}

            <ModalLogin isOpen={isOpen} closeModal={closeModal} />

        </>
    )
}
