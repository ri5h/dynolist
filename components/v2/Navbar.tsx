import React, { Component } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default class Navbar extends Component {
    render() {
        return (
            <Popover>
                {({ open }) => (
                    <>
                        <div className="relative my-2 px-4 sm:px-6 lg:px-8">
                            <nav
                                className="relative flex items-center justify-between sm:h-10 py-0 lg:py-10"
                                aria-label="Global"
                            >
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 py-4">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#">
                                            <img
                                                className="w-auto h-14 mx-auto"
                                                src="img/logo.svg"
                                            />
                                        </a>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    <a href="#" className="font-bold text-xl text-indigo-600 hover:text-indigo-500 hover:underline">
                                        Post A Job
                                    </a>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                static
                                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
                            >
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="img/logo.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        <a
                                            href="#"
                                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                        >
                                            Post A Job
                                        </a>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        )
    }
}
