import React, { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import DIV from './accessbility/DIV'
import Head from 'next/head'
import { content } from '../utils/const'

const Layout: React.FC<PropsWithChildren> = (props) => {
    return (
        <>
            <Head>
                <title>{content.company} การลงทุนแห่งอนาคต</title>
                <meta content={`ทำกำไรระยะยาวอย่างยั่งยืน ลงทุนในหุ้นตามหลักการระดับโลกด้วยเทคโนโลยี บริหารปรับพอร์ตอัตโนมัติ ${content.company} ดูแลให้ครบวงจรด้วยค่าธรรมเนียมต่ำมาก เปิดบัญชีวันนี้`} name="description" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <DIV htmlElement='main' id="main" style="container mx-auto max-w-[1240px]">
                {props.children}
            </DIV>
            <Footer />
        </>
    )
}

export default Layout