"use client"
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const Notificacion = () => {
    return (
        <div className='hidden lg:block'>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="py-3 px-4 shadow-xl rounded-md transition-all ease-linear duration-300 focus:bg-blue-300">
                            <FontAwesomeIcon icon={faBell} className='text-xl' />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[350px] -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                        saasd
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <a
                                            href="##"
                                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <span className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900">
                                                    Documentation
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">
                                                Start integrating products and tools
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}
