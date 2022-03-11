import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className="relative z-1 lg:max-w-4xl lg:w-full mx-auto my-20">
                <main className="my-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">Robot jobs</h2>
                        <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl">
                            Find quality remote jobs for your skillset.
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
        )
    }
}