import React from 'react'
import P from './accessbility/P'
import { ChildFeature } from './ChildFeature'
import DIV from './accessbility/DIV'

const Feature = () => {
    return (
        <DIV htmlElement="aside" id="feature" style="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <P defaultElement='h2' style="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
                    Raw Denim Heirloom Man Braid Selfies Wayfarers
                </P>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <ChildFeature />
                    <ChildFeature />
                    <ChildFeature />
                </div>
            </div>
        </DIV>
    )
}

export default Feature