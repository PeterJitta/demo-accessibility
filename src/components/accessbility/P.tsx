import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

const P = (props: { style: string, children: ReactNode, defaultElement: "h1" | "h2" | "h3" | "p" }) => {
    const router = useRouter();
    const { heading, all } = router.query

    return (
        <>
            {heading || all ? (
                <>
                {props.defaultElement === "h1" && <h1 className={props.style}>{props.children}</h1>}
                {props.defaultElement === "h2" && <h1 className={props.style}>{props.children}</h1>}
                {props.defaultElement === "h3" && <h1 className={props.style}>{props.children}</h1>}
                {props.defaultElement === "p" && <h1 className={props.style}>{props.children}</h1>}
                </>
            ) : (
                <div className={props.style}>{props.children}</div>
            )}
        </>
    )
}

export default P