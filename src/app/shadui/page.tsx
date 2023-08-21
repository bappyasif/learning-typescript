import React from 'react'
import { ButtonComp, ButtonLoading, ButtonWithIcon } from './components/UsingButton'
import { AccordionDemo, AccordionDemoThree, AccordionDemoTwo } from './components/UsingAccordion'
import { AlertDialogDemo, AlertDialogDemoTwo } from './components/UsingAlert'

const ShaduiPage = () => {
    return (
        <div className='w-[650px]'>
            <h1>ShaduiPage</h1>
            <ButtonWithIcon />
            <ButtonComp />
            <ButtonLoading />
            <br />
            <AccordionDemo />
            <br />
            <AccordionDemoTwo />
            <br />
            <AccordionDemoThree />
            <br />
            <AlertDialogDemo />
            <br />
            <AlertDialogDemoTwo />
        </div>
    )
}

export default ShaduiPage