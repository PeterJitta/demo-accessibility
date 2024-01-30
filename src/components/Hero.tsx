import { useRouter } from 'next/router'
import React from 'react'
import P from './accessbility/P';
import IMG from './accessbility/IMG';
import { content } from '../utils/const';
import DIV from './accessbility/DIV';

const Hero = () => {
    const router = useRouter();
    return (
        <DIV htmlElement='section' id="" label="" style="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse gap-5 items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <P defaultElement='h1' style=" text-5xl !leading-[3.25rem] mb-4 font-medium text-gray-900">
                        มองขาดทุกโอกาสการลงทุน กับ <span className='text-primary'>{content.company}</span>
                    </P>
                    <P defaultElement='p' style="mb-8 leading-relaxed">
                        ให้คุณเข้าถึงโอกาสการลงทุนในทุกสถานการณ์ ผ่านการวิเคราะห์เชิงลึก และคำแนะนำที่เป็นกลาง เพื่อเลือกโอกาสที่ดีที่สุดของคุณ ด้วย AI

                    </P>
                    <div className="flex justify-center">
                        <a href='#contact-us' className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">ลงทุนกับเรา</a>
                        <a href="#feature" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">ดูรายละเอียด</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <IMG style="object-cover object-center h-[329px] rounded" alt="" url="https://jittawealth.com/_next/image?url=%2Fimg%2Fweb%2Fjitta-money.png&w=1080&q=75" />
                </div>
            </div>
        </DIV>
    )
}

export default Hero