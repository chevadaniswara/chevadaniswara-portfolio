import React from 'react'
import { BsArrowRightSquareFill } from "react-icons/bs"

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
            {/* DIV FOR SECTION TITLE */}
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Looking forward to hearing from you!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form className="flex flex-col w-full md:w-1/2" action="https://getform.io/f/041b31f0-813f-488f-9a19-d11dc8b2e068" method='POST'>
                        {/* START OF EMAIL INPUT */}
                        <div>
                            <label for="email" className="block py-3 text-gray-500">
                                Your Email
                            </label>
                            <div className="flex items-center p-2 border rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <input
                                    type="email"
                                    placeholder="youremail@example.com"
                                    name="email"
                                    className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                                />

                            </div>
                            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">I'll never share your details. Your privacy, my promise.</p>
                        </div>
                        {/* START OF NAME */}
                        <div>
                            <label for="name" className="block py-3 text-gray-500">
                                Your Name
                            </label>
                            <div className="flex items-center p-2 border rounded-md">
                                <input
                                    type="text"
                                    placeholder="John Doe Johnson"
                                    name="name"
                                    className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                                />
                            </div>
                        </div>
                        {/* START OF TEXTAREA */}
                        <div className='py-1 d-flex justify-end'>
                            <div className='w-full'>
                                <label for="name" className="block py-3 text-gray-500">
                                    Your Message
                                </label>
                                <textarea name="message" rows="4" className="p-3 w-full text-sm text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            {/* SEND BTN */}
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-r from-cyan-300 to-green-500'>
                                Send
                                <span className='group-hover:scale-125 duration-300'>
                                    <BsArrowRightSquareFill className='ml-3' />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact