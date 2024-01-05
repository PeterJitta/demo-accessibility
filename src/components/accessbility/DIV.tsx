import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

const DIV = (props: { id?: string, style: string, children: ReactNode, htmlElement: "aside" | "section" | "main" | "header" | "footer" }) => {
    const router = useRouter();
    const { landmark, all } = router.query

    return (
        <>
            {landmark || all ? (
                <>
                {props.htmlElement === "section" && (
                    <section aria-label={props.id} id={props.id} className={props.style}>{props.children}</section>
                )}
                {props.htmlElement === "header" && (
                    <header className={props.style}>{props.children}</header>
                )}
                {props.htmlElement === "main" && (
                    <main id={props.id} className={props.style}>{props.children}</main>
                )}
                {props.htmlElement === "footer" && (
                    <footer className={props.style}>{props.children}</footer>
                )}
                {props.htmlElement === "aside" && (
                    <aside id={props.id} className={props.style}>{props.children}</aside>
                )}
                </>
            ) : (
                <div id={props.id} className={props.style}>{props.children}</div>
            )}
        </>
    )
}

export default DIV