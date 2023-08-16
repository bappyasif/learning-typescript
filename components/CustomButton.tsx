"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'
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
            <span className={`flex-1 ${props.textStyles}`}>{props.title}</span>
            {props.rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={props.rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}