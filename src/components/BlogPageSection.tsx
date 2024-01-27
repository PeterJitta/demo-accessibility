import React, { PropsWithChildren } from 'react'
import { content } from '../utils/const'
import P from './accessbility/P'

const BlogPageSection = (props: { title: string } & PropsWithChildren) => {
    
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-5 pb-10">
                <div className="mx-auto max-w-3xl mt-14">
                    <span className="text-primary uppercase tracking-wider text-sm font-medium"> Hilight </span>
                    <P defaultElement='h1' style="text-4xl lg:text-4xl font-bold lg:tracking-tight mt-1 lg:leading-tight">  {props.title} </P>
                    <div className="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
                        <span className="text-gray-400"> Peter Workarn </span>
                        <span className="text-gray-400">•</span> <time className="text-gray-400" dateTime="2022-11-09T16:39:00.000Z"> Wed Nov 09 2022 </time>
                        <span className="text-gray-400 hidden md:block">•</span> <div className="w-full md:w-auto flex flex-wrap gap-3">
                            <span className="text-sm text-gray-500">#{content.company}</span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto blog-content prose prose-lg mt-6 max-w-3xl">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default BlogPageSection