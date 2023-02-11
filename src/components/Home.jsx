import React from 'react'
import Asep from "../assets/asep.jpg";
import { BsArrowRightSquareFill } from "react-icons/bs"
import { Link } from 'react-scroll';

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-emerald-900 text-white' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Front-End Developer
                    </h2>
                    <p className='text-gray-500 py-6'>
                        Active student at Universitas Pembangunan Nasional "Veteran" Jawa Timur majoring in Information Systems. Proficient in creating responsive and interactive web designs that provide a positive user experience. Experienced in working on projects in a team environment and collaborating with designers, developers, and stakeholders to achieve project goals. Strong problem-solving abilities and a team player mindset, looking for an opportunity to bring my skills and enthusiasm for a challenge.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-r from-cyan-300 to-green-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <BsArrowRightSquareFill className='ml-3' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={Asep} alt='foto asep buriq' className='rounded-2xl w-2/3 mx-auto md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Home