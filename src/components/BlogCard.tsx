import Link from 'next/link'
import React from 'react'
import P from './accessbility/P'
import SVG from './accessbility/SVG'
import { useRouter } from 'next/router'

const BlogCard = (props: { title: string, body: string }) => {
    const router = useRouter();
    const {ariaLabel, all} = router.query
    // source: https://www.visionaustralia.org/business-consulting/digital-access/blog/how-to-make-read-more-links-accessible
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold  text-gray-700">Highlight</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2024</span>
            </div>
            <div className="md:flex-grow">
                <P defaultElement='h3' style="text-2xl font-medium text-gray-900  mb-2">
                    {props.title}
                </P>
                <P defaultElement='p' style="leading-relaxed">
                    {props.body}
                </P>
                <Link aria-label={ariaLabel || all ? `อ่าน ${props.title} ต่อ` : ""} href="/blog" className="text-primary inline-flex items-center mt-4">
                    อ่านต่อ
                    <SVG width='16' height='16' title=''>
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </SVG>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard