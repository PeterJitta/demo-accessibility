import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'

const Url = (props: { type: "internal" | "external", url: string, label: string } & PropsWithChildren) => {
    const router = useRouter();
    const { ariaLabel, all, level } = router.query
    const isReadableLink = (ariaLabel || all || Number(level) >= 2)

    return (
        <>
            {props.type === "internal" && (
                <Link
                    aria-label={isReadableLink ? props.label : ''}
                    href={props.url}
                    className='flex gap-1 items-center text-primary mt-5 w-fit'
                    >
                    {props.children}
                </Link>
            )}
            {props.type === "external" && (
                <a aria-label={isReadableLink ? props.label : ''} href={props.url}>{props.children}</a>
            )}
        </>
    )
}

export default Url