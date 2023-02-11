import React from 'react'
import { GoMarkGithub, GoMail } from 'react-icons/go'
import { HiDocumentText } from 'react-icons/hi'

const Social = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    GitHub <GoMarkGithub size={30} />
                </>
            ),
            href: 'https://github.com/chevadaniswara',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Mail <GoMail size={30} />
                </>
            ),
            href: 'mailto:daniswaraasep@gmail.com',
            // style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Resume <HiDocumentText size={30} />
                </>
            ),
            href: '/cheva-resume.pdf',
            download: true,
            style: 'rounded-br-md'
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-slate-600 ${style}`}>

                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Social