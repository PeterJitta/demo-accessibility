import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

const SVG = (props: { children: ReactNode, title: string, width: string, height: string }) => {
    const router = useRouter()
    const { altText, all, level } = router.query
    return (
        <svg width={props.width} height={props.height}>
            {(altText || all || Number(level) >= 2) && (
                <title>{props.title}</title>
            )}
            {props.children}
        </svg>
    )
}

export default SVG