import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { DropdownMenuDemo, DropdownMenuShadUi } from '@/components/DropdownMenuShadUi'

const ShadUiTestPage = () => {
  return (
    <div>
        <h1>Shad Ui Test Page</h1>
        <Button variant={"outline"} className='rounded'>
            Click Here
        </Button>
        <Badge variant={"outline"} className='bg-slate-400 rounded-full'>Badge</Badge>
        <Button variant={"link"}>Link</Button>
        <DropdownMenuShadUi />
        <DropdownMenuDemo />
    </div>
  )
}

export default ShadUiTestPage