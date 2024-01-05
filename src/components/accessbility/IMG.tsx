import { useRouter } from 'next/router'
import React from 'react'

const IMG = (props: { url: string, alt: string, style: string }) => {
    const router = useRouter()
    const { altText, all } = router.query
    return (
        <>
            {altText || all ? (
                <img src={props.url} alt={props.alt} className={props.style} />
            ) : (
                <img src={props.url} className={props.style} />
            )}
        </>
    )
}

export default IMG