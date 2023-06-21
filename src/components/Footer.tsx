import { ReactElement } from "react"

export const Footer = () => {
    return (
        <div
            className="flex flex-col gap-6"
        >
            <RenderNavs
                learningSites={footers.learningSites}
                recruitingSites={footers.recrutingSites}
                socials={footers.socials}
            />
            <ShowCopyrights />
        </div>
    )
}

const ShowCopyrights = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <div>This portfolio is developed by a.b. &copy; {getYear()} and this design is inspired from <a href="#">colorlib</a> templates</div>
    )
}

type NavProps = {
    name: string,
    url: string,
    icon?: ReactElement | null
}

type NavsProps = {
    learningSites?: NavProps[],
    recruitingSites?: NavProps[],
    socials?: NavProps[],
}

type NavSectionProps = {
    items: NavProps[] | undefined,
    heading: string
}

const RenderNavs = ({ ...items }: NavsProps) => {
    const { learningSites, recruitingSites, socials } = items;

    return (
        <div
            className="flex justify-between gap-6 w-full "
        >
            <RenderNavSection
                items={learningSites}
                heading="Learnign Sites"
            />
            <RenderNavSection
                items={recruitingSites}
                heading="Recruiting Sites"
            />
            <RenderNavSection
                items={socials}
                heading="Social Sites"
            />
        </div>
    )
}

const RenderNavSection = ({ items, heading }: NavSectionProps) => {

    const renderItems = () => items?.map(item => <RenderNav key={item.name} name={item.name} url={item.url} icon={item.icon} />)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl">{heading}</h2>
            <div className="flex flex-col gap-2">{renderItems()}</div>
        </div>
    )
}

const RenderNav = ({ ...item }: NavProps) => {
    const { name, url, icon } = item;

    return (
        <div className="text-justify">
            <span>{icon}</span>
            <a target="_blank" href={url}>{name}</a>
        </div>
    )
}

const footers = {
    learningSites: [
        { name: "Free Code Camp", url: "www.freecodecamp.org" },
        { name: "The Odin Project", url: "www.theodinproject.org" },
        { name: "MDN", url: "www.mdn.org" },
        { name: "Edx", url: "www.edx.org" },
        { name: "Code Security", url: "www.owasp.org" },
        { name: "Accessibility", url: "www.accessility.org" },
        { name: "MongodbUniversity", url: "www.mongodb.org" }
    ],
    recrutingSites: [
        { name: "Wellfound", url: "wellfound.org" },
        { name: "YCombinator", url: "ycombinator.org" }
    ],
    socials: [
        { name: "Github", url: "github.com", icon: null },
        { name: "Twitter", url: "twirtter.com", icon: null },
        { name: "HackerRank", url: "hackerrank.com", icon: null },
    ]
}


// const RenderNavSection = ({ ...items }: NavsProps, { heading }: HeadingType) => {
//     const { learningSites, recruitingSites, socials } = items;

//     const renderItems = () => (learningSites || recruitingSites || socials)?.map(item => <RenderNav key={item.name} name={item.name} url={item.url} icon={item.icon} />)

//     return (
//         <div>
//             <h2>{heading}</h2>
//             <div>{renderItems()}</div>
//         </div>
//     )
// }

// const RenderNavs = ({ ...items }: NavsProps) => {
//     const { learningSites, recruitingSites, socials } = items;

//     return (
//         <div>
//             <RenderNavSection 
//                 learningSites={learningSites}
//             />
//             <RenderNavSection 
//                 recruitingSites={recruitingSites}
//             />
//             <RenderNavSection 
//                 socials={socials}
//             />
//         </div>
//     )
// }