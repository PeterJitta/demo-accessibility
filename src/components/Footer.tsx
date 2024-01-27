import React from 'react'
import P from './accessbility/P'
import DIV from './accessbility/DIV'
import Link from 'next/link'
import SVG from './accessbility/SVG'
import { content } from '../utils/const'
import Url from './accessbility/Url'

const Footer = () => {
    return (
        <DIV htmlElement='footer' style="text-gray-600 w-full body-font bg-gray-50">
            {/* <div className="container max-w-[1240px] mx-auto px-5 py-24 mx-auto">
                <div className='container flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <a className="flex  font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">{content.company}</span>
                        </a>
                        <P defaultElement='p' style="mt-2 text-sm text-gray-500"> ผู้บริหารจัดการบัญชีกองทุนส่วนบุคคล {content.company} ที่ได้รับใบอนุญาตบริหารจัดการกองทุน </P>
                    </div>

                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <P defaultElement='h2' style=" font-medium text-gray-900 tracking-widest text-sm mb-3">Menu</P>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <P defaultElement='p' style="text-gray-500 text-sm text-center sm:text-left">
                        © 2025 {content.company}
                    </P>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Url
                            type="external"
                            url="https://facebook.com"
                            label="คลิกเพื่อไปที่ facebook page"
                        >
                            <SVG width='20' height='20' title="click to visit facebook page">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </SVG>
                        </Url>

                        <Url
                            type="external"
                            url="https://instagram.com"
                            label="คลิกเพื่อไปที่ instagram account"
                        >
                            <SVG width='20' height='20' title="click to visit instagram page">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </SVG>
                        </Url>
                    </span>
                </div>
            </div>
        </DIV>
    )
}

export default Footer