import React from 'react'
import { SampleEen } from './componenets/SampleEen'
import { SampleTwee } from './componenets/SampleTwee'
import { SampleDrie } from './componenets/SampleDrie'

const CardsDemoPage = () => {
    return (
        <div>
            <h1>CardsDemoPage</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <SampleEen />
                    <SampleTwee />
                </div>
                <SampleDrie />
            </div>
        </div>
    )
}

export default CardsDemoPage