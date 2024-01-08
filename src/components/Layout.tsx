import React, { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import DIV from './accessbility/DIV'
import Head from 'next/head'

const Layout: React.FC<PropsWithChildren> = (props) => {
    return (
        <>
            <Head>
                <title>Demo App</title>
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