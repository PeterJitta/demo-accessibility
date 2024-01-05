import React, { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'
import DIV from './accessbility/DIV'

const Layout: React.FC<PropsWithChildren> = (props) => {
    return (
        <>
            <Header />
            <DIV htmlElement='main' id="main" style="container mx-auto max-w-[1240px]">
                {props.children}
            </DIV>
            <Footer />
        </>
    )
}

export default Layout