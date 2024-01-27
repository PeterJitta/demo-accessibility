import { useRouter } from 'next/router'
import React from 'react'

const IMG = (props: { url: string, alt: string, style?: string }) => {
    const router = useRouter()
    const { altText, all, bindImage, level } = router.query
    return (
        <>
            {(altText || all || Number(level) >= 2) ? (
                <img src={bindImage ? "https://via.placeholder.com/1000x600" : props.url} alt={props.alt} className={props.style} />
            ) : (
                <img src={bindImage ? "https://via.placeholder.com/1000x400" : props.url} className={props.style} />
            )}
        </>
    )
}

export default IMG