import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

    const cards = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
    ]

    return (
        <div Name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                    <p className='py-6'>Showcasing my technical expertise: A journey through the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm:px-0 text-center'>
                    {
                        cards.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <div className='flex items-center justify-center'>
                                    <p className='mt-4'>{title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience