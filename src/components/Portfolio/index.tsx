import { useState } from "react"
import { Mentions } from "./Mentions"
import { Skills } from "./Skills"
import { designs, projects } from "./data"
import { useForAccordionSlides } from "../../hooks"

export const Portfolio = () => {
    return (
        <div
            className="flex flex-col gap-20"
        >
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl">Some Noteable Skills</h2>
                <Skills />
            </div>
            <Mentions />
            <Projects />
        </div>
    )
}

const Projects = () => {

    return (
        <div
            id="Portfolio"
            className="flex flex-col justify-center items-center gap-20"
        >
            <ReusableNoteableWorks
                data={projects}
                heading="Some Noteable Works - Fullstack / Frontend"
            />
            {/* <ReusableNoteableWorks
                data={designs}
                heading="Responsive UI Design Prototypes"
            /> */}
            <AccordionView
                data={designs}
                heading="Responsive UI Design Prototypes"
            />
        </div>
    )
}

const AccordionView = ({ data, heading }: ReusableProps) => {
    const { cnInfo, handleNext, handlePrev } = useForAccordionSlides()

    // const renderData = () => data.map((item: ProjectProps, idx: number) =>
    //     // idx >= cnInfo.currSilde && idx <= cnInfo.nextSlide && 
    //     (idx === cnInfo.currSilde || idx === cnInfo.nextSlide) &&
    //     <RenderAccordionCardView key={item.name} description={item.description} imgSrc={item.imgSrc} live={item.live} name={item.name} repo={item.repo} />)

    // console.log(cnInfo, "cnInfo")

    const item1 = data[cnInfo.currSilde]
    const item2 = data[cnInfo.nextSlide]

    return (
        <div className="flex flex-col gap-20">
            <h2 className="text-4xl">{heading}</h2>
            <div className="flex gap-4 items-center">
                <button className="bg-slate-800 px-4" onClick={handlePrev}>Prev</button>
                {/* <div className="flex justify-around gap-20 flex-wrap">{renderData()}</div> */}
                <div className="flex justify-around gap-20 flex-wrap">
                    <RenderAccordionCardView key={item1.name} description={item1.description} imgSrc={item1.imgSrc} live={item1.live} name={item1.name} repo={item1.repo} />
                    <RenderAccordionCardView key={item2.name} description={item2.description} imgSrc={item2.imgSrc} live={item2.live} name={item2.name} repo={item2.repo} />
                </div>
                <button className="bg-slate-800 px-4" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

const RenderAccordionCardView = ({ ...item }: ProjectProps) => {
    const { description, imgSrc, live, name, repo } = item;

    return (
        <article className="flex flex-col justify-center items-center gap-6 w-1/3">
            <ImageView
                description={description} imgSrc={imgSrc} live={live}
            />
            <RenderProjectDetailInfo
                description={description} live={live}
                name={name} repo={repo}
            />
        </article>
    )
}

type ProjectProps = {
    name: string,
    repo: string,
    live: string,
    description: string,
    imgSrc: string
}

// const NoteableWorks = () => {
//     const renderProjects = () => projects.map(item => <RenderWork key={item.name} description={item.description} live={item.live} name={item.name} repo={item.repo} imgSrc={item.imgSrc} />)

//     return (
//         <div>
//             <h2>Some Noteable Works</h2>
//             <div>{renderProjects()}</div>
//         </div>
//     )
// }

type ReusableProps = {
    data: ProjectProps[],
    heading: string
}

const ReusableNoteableWorks = ({ data, heading }: ReusableProps) => {
    const renderProjects = () => data.map((item: ProjectProps) => <RenderWork key={item.name} description={item.description} live={item.live} name={item.name} repo={item.repo} imgSrc={item.imgSrc} />)

    return (
        <div
            className="flex flex-col justify-center items-center gap-20"
        >
            <h2 className="text-4xl">{heading}</h2>
            <div
                className="flex flex-col justify-center items-center gap-6 "
            >
                {renderProjects()}
            </div>
        </div>
    )
}

const RenderWork = ({ ...item }: ProjectProps) => {
    const { name, repo, live, description, imgSrc } = item;

    const check = () => {
        let reverse = false;
        if (["OdBo", "Myth Busters", "Animations Saavy", "Product Review Page"].includes(name)) {
            reverse = true
        }
        return reverse
    }

    return (
        <article
            className={`flex ${check() ? "flex-row-reverse" : "flex-row"} gap-4 items-center justify-center`}
        >
            <ImageView imgSrc={imgSrc} description={description} live={live} />
            <RenderProjectDetailInfo
                description={description} live={live}
                name={name} repo={repo}
            />
        </article>
    )
}

type DetailProps = Omit<ProjectProps, "imgSrc">

const RenderProjectDetailInfo = ({ ...item }: DetailProps) => {
    const { description, live, name, repo } = item;
    return (
        <div className="w-3/4 text-xl flex flex-col gap-4">
            <h2 className="text-4xl">{name}</h2>
            <a href="">Repo: {repo}</a>
            <a href="">Live: {live}</a>
            <p className="text-2xl">{description}</p>
        </div>
    )
}

type ImageProps = Omit<ProjectProps, "repo" | "name">

const ImageView = ({ imgSrc, description, live }: ImageProps) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const handleMouseOver = () => setHovered(true)
    const handleMouseOut = () => setHovered(false)

    return (
        <figure
            className="relative"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
        >
            {/* <video width="320" height="240" controls autoPlay>
                <source src={imgSrc} type="video/mp4">
                </source>
            </video> */}

            <img
                className="w-96 h-80"
                src={imgSrc}
                alt={description}
            // onMouseEnter={handleMouseOver}
            // onMouseLeave={handleMouseOut}
            />
            {
                hovered
                    ? <ShowImgCard live={live} />
                    : null
            }
        </figure >
    )
}

type ImgCardProp = Pick<ProjectProps, "live">

const ShowImgCard = ({ live }: ImgCardProp) => {

    return (
        <div
            className="absolute top-0 bg-blue-900 h-full w-full opacity-80"
        >
            <h2>Some Text is here about this project</h2>
            <p>
                <span>Care to See it Live?</span>
                <a href={live}>Click Here</a>
            </p>
        </div>
    )
}