import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

const DIV = (props: { id?: string, style: string, children: ReactNode, label?: string, htmlElement: "aside" | "section" | "main" | "header" | "footer" | "nav" }) => {
    const router = useRouter();
    const { landmark, all, level } = router.query

    return (
        <>
            {(landmark || all || Number(level) >= 1) ? (
                <>
                {props.htmlElement === "section" && (
                    <section aria-label={props.label} id={props.id} className={props.style}>{props.children}</section>
                )}
                {props.htmlElement === "header" && (
                    <header className={props.style}>{props.children}</header>
                )}
                {props.htmlElement === "nav" && (
                    <nav className={props.style}>{props.children}</nav>
                )}
                {props.htmlElement === "main" && (
                    <main id={props.id} className={props.style}>{props.children}</main>
                )}
                {props.htmlElement === "footer" && (
                    <footer className={props.style}>{props.children}</footer>
                )}
                {props.htmlElement === "aside" && (
                    <aside aria-label={props.label} id={props.id} className={props.style}>{props.children}</aside>
                )}
                </>
            ) : (
                <div id={props.id} className={props.style}>{props.children}</div>
            )}
        </>
    )
}

export default DIV