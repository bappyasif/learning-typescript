import { useEffect, useState } from "react";
import { skills } from "../data"
import { useHandlePercentileCount } from "../../../hooks";

export const Skills = () => {
    const highPercentiles = skills.filter(item => item.percentile >= 85);
    const regularPercentiles = skills.filter(item => item.percentile < 85);

    return (
        <div
            id="Skills"
            className="flex flex-row justify-between gap-0 w-full"
        >
            <ShowHighPercentilesSkills data={highPercentiles} />
            <ShowRegulars data={regularPercentiles} />
        </div>
    )
}

type MetricProps = {
    name: string,
    text: string,
    percentile: number
}

type MetricsData = {
    data: MetricProps[]
}

const ShowHighPercentilesSkills = ({ data }: MetricsData) => {
    const renderMetrics = () => data?.map(item => <ShowMetric name={item.name} percentile={item.percentile} text={item.text} key={item.name} />)
    return (
        <div className="flex gap-1 flex-wrap w-1/2">
            {renderMetrics()}
        </div>
    )
}

const ShowMetric = ({ ...item }: MetricProps) => {
    const { name, text, percentile } = item;

    const {currPercentile, handleBegin, handleStop} = useHandlePercentileCount(percentile)
    
    return (
        <div
            className="w-1/4 mx-auto bg-slate-600 rounded-2xl py-4"
            // onClick={handleToggle}
            onMouseEnter={handleBegin}
            onMouseLeave={handleStop}
        >
            <h2 className="text-2xl">{name}</h2>
            {/* <RadialProgressBar percentile={percentile} /> */}
            <RadialProgressBar percentile={ currPercentile || percentile} />
            <p>{text} *</p>
        </div>
    )
}

/**
 * 
 * Inside an <svg> element we place a <circle> tag, where we declare the radius of the ring with the r attribute, its position from the center in the SVG viewBox with cx and cy and the width of the circle stroke
 * 
 * stroke-dasharray
This property is like border-style: dashed but it lets you define the width of the dashes and the gap between them.
* 
*stroke-dashoffset
The second one allows you to move the starting point of this dash-gap sequence along the path of the SVG element.
*
* stroke-dasharray lets you specify the length of the rendered part of the line, then the length of the gap. stroke-dashoffset lets you change where the dasharray starts.
 */
const RadialProgressBar = ({ percentile }: ProgressProps) => {

    const radius = 60;
    const stroke = 8

    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset = circumference - percentile / 100 * circumference;

    return (
        <svg
            className="mx-auto"
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke="white"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                // stroke-width={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <text className="text-2xl"
                x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em">{percentile}%
            </text>
        </svg>
    )
}

const ShowRegulars = ({ data }: MetricsData) => {
    const showMetrics = () => data.map(item => <ShowSkillProgress name={item.name} percentile={item.percentile} text={item.text} key={item.name} />)

    return (
        <div
            className="flex justify-center w-1/2 flex-wrap gap-16 text-2xl"
        >
            {showMetrics()}
        </div>
    )
}

const ShowSkillProgress = ({ ...item }: MetricProps) => {
    const { name, text, percentile } = item;

    const {currPercentile, handleBegin, handleStop} = useHandlePercentileCount(percentile)

    return (
        <div 
            className={`w-1/3`}
            onMouseEnter={handleBegin}
            onMouseLeave={handleStop}
        >
            <h2 className="text-xl">{name}</h2>
            {/* <LinearProgressBar percentile={percentile} /> */}
            <LinearProgressBar percentile={ currPercentile || percentile} />
            <p className="text-sm">Current {text} *</p>
        </div>
    )
}

type ProgressProps = {
    percentile: number
}

const LinearProgressBar = ({ percentile }: ProgressProps) => {
    return (
        <div className='h-2 w-full bg-gray-300 rounded overflow-hidden'>
            <div
                style={{ width: `${percentile}%` }}
                className={`h-full ${percentile < 70 ? 'bg-red-600' : 'bg-green-600'
                    }`}
            ></div>
        </div>
    );
};