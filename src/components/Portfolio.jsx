import React from 'react'
import pdam from '../assets/portfolio/pdam.png'
import figma from '../assets/portfolio/figma.jpg'
import discord from '../assets/portfolio/discord.png'

const Portfolio = () => {

    const cards = [
        {
            id: 1,
            title: 'Survey Kepuasan Pelanggan PDAM',
            src: pdam,
            href: 'https://github.com/chevadaniswara/pdam-survey-react'
        },
        {
            id: 2,
            title: 'Pottery App UI/UX',
            src: figma,
            href: 'https://www.figma.com/file/CURVe287rNPTkqHj4NQkU7/Rumah-Gerabah?node-id=1%3A429&t=GfOdsZxnftxiZ1lo-1'
        },
        {
            id: 3,
            title: 'Discord Bot',
            src: discord,
            href: 'https://github.com/chevadaniswara/edun-dc-bot'
        },
    ]

    return (
        <div Name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                    <p className='py-6'>Explore my technical skills: A showcase of my front-end web development projects.</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        cards.map(({ id, src, title, href }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                        <button className=' px-6 py-3 m-4 duration-200 hover:scale-125'>{title}</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio