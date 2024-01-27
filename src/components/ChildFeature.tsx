import React from 'react'
import P from './accessbility/P'
import SVG from './accessbility/SVG'

export const ChildFeature = (props: { title: string, description: string }) => {
    return (
        <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-white mb-4 flex-shrink-0">
                <SVG title="" width={'24px'} height={'24px'}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </SVG>
            </div>
            <div className="flex-grow pl-6">
                <P defaultElement='h3' style="text-gray-900 text-2xl title-font font-medium mb-2">
                    {props.title}
                </P>
                <P defaultElement='p' style="leading-relaxed text-base">
                    {props.description}
                </P>
            </div>
        </div>
    )
}
