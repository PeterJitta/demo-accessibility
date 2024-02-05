import { useRouter } from 'next/router';
import React from 'react'

type TInput = {
    requiredField?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const INPUT: React.FC<TInput> = (props) => {
    const router = useRouter();
    const { level } = router.query;
    const isLevelThree = Number(level) >= 3;

    return (
        <>
            {props.requiredField && isLevelThree ? (
                <input aria-required="true" {...props} />
            ) : (
                <input {...props} />
            )}
        </>
    )
}

export default INPUT