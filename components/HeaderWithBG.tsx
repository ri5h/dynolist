import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

type HeaderProps = {
    settings: SiteSettings
}

export default function HeaderWithBG({ settings }: HeaderProps) {

    return (
        // <div className="relative overflow-hidden bg-header-image backdrop-opacity-75 bg-cover backdrop-filter backdrop-grayscale backdrop-blur">
        <div className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <Popover>
                    {({ open }) => (
                        <>
                            <div className="relative px-4 sm:px-6 lg:px-">
                                <nav
                                    className="relative flex items-center justify-between sm:h-10 py-0 lg:py-10"
                                    aria-label="Global"
                                >
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <a href="#">
                                                <span className="sr-only">Workflow</span>
                                                <img
                                                    className="lg:h-14 w-auto h-10 mx-auto"
                                                    src="http://localhost:3000/img/logo.svg"
                                                />
                                                <span className="font-extrabold text-lg text-indigo-600">DinoList</span>
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        {settings.navigation.map((item: NavItem) => (
                                            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        ))}
                                        <a href="#" className="font-bold text-xl text-white">
                                            Log in
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
                                                    src="http://localhost:3000/img/logo.svg"
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
                                            {settings.navigation?.map((item: NavItem) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <a
                                            href="#"
                                            className="block w-full px-5 py-3 text-center font-medium text-white"
                                        >
                                            Log in
                      </a>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <div className="relative z-10 bg-red-200 lg:max-w-4xl mx-auto">
                    <main className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">{settings.heading.titleHead}</span>{' '}
                                <span className="block text-indigo-600 xl:inline">{settings.heading.titleTail}</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                                {settings.description}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Get started
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                    >
                                        Live demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}