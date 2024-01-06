import { useRouter } from 'next/router'
import React from 'react'
import P from './accessbility/P';
import IMG from './accessbility/IMG';

const Hero = () => {
    const router = useRouter();
    const { heading } = router.query;
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse gap-5 items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <P defaultElement='h1' style="title-font sm:text-4xl text-3xl !leading-[3rem] mb-4 font-medium text-gray-900">
                        Meta Wealth จัดการพอร์ตให้เติบโต ด้วยสินทรัพย์คุณภาพดีทั่วโลก
                    </P>
                    <P defaultElement='p' style="mb-8 leading-relaxed">
                        ลงทุนได้มากกว่า 1,700 กองทุนจาก 20 บลจ. ตอบโจทย์ทุกเป้าหมายการลงทุน
                    </P>
                    <div className="flex justify-center">
                        <a href='#feature' className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">Feature</a>
                        <a href="#contact-us" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <IMG style="object-cover object-center rounded" alt="hero" url="https://jittawealth.com/_next/image?url=%2Fimg%2Fweb%2Fjitta-money.png&w=1080&q=75" />
                </div>
            </div>
        </section>
    )
}

export default Hero