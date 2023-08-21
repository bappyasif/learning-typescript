"use client"

import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
    return (
        <Button className="bg-red-800 p-0 px-8 py-2">
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
    )
}

export function ButtonComp() {
    return (
        <>
            <Button variant={"default"}>Click Here!!</Button>
            <Button variant={"destructive"}>Click Here!!</Button>
            <Button variant={"ghost"}>Click Here!!</Button>
            <Button variant={"outline"}>Click Here!!</Button>
            <Button variant={"secondary"}>Click Here!!</Button>
            <Button className="text-slate-400" variant={"link"}>Link Here!!</Button>
        </>
    )
}


import { ReloadIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { TicketIcon } from "@heroicons/react/24/solid"

export function ButtonLoading() {
    const [done, setDone] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDone(true)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <Button disabled={done ? false : true}>
            {
                done
                    ? <TicketIcon className="mr-2 h-4 w-4 animate-pulse" />
                    : <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            }
            <p className="w-fit">{done ? "Claim It" : "Please Wait!!"}</p>
        </Button>
    )
}
