"use client"

import { CustomButtonProps } from '@/types'
import React from 'react'

// type Props = {
//     title: string,
//     containerStyles: string,
//     handleClick: () => void
// }

export default function CustomButton(props: CustomButtonProps) {

    return (
        <button
            disabled={false}
            type={props.btnType || 'button'}
            className={`custom-btn ${props.containerStyles}`}
            onClick={props.handleClick}
        >
            <span className='flex-1'>{props.title}</span>
        </button>
    )
}