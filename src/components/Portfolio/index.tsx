import { useState } from "react"
import { Mentions } from "./Mentions"
import { Skills } from "./Skills"
import { designs, projects } from "./data"

export const Portfolio = () => {
    return (
        <div>
            Portfolio
            <Skills />
            <Mentions />
            <Projects />
        </div>
    )
}

const Projects = () => {

    return (
        <h2>
            <ReusableNoteableWorks
                data={projects}
                heading="Some Noteable Works - Fullstack / Frontend"
            />
            <ReusableNoteableWorks
                data={designs}
                heading="Responsive UI Design Prototypes"
            />
        </h2>
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
        <div>
            <h2>{heading}</h2>
            <div>{renderProjects()}</div>
        </div>
    )
}

const RenderWork = ({ ...item }: ProjectProps) => {
    const { name, repo, live, description, imgSrc } = item;
    return (
        <article>
            <ImageView imgSrc={imgSrc} description={description} live={item.live} />
            <h2>{name}</h2>
            <a href="">{repo}</a>
            <a href="">{live}</a>
            <p>{description}</p>
        </article>
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
        >
            <img
                className="w-96 h-80"
                src={imgSrc}
                alt={description}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
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

const ShowImgCard = ({live}:ImgCardProp) => {

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