import { testimonials } from "./Portfolio/data"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

export const Additionals = () => {
    return (
        <div
            id="Testimonials"
            className="flex flex-col justify-center items-center gap-20 w-full"
        >
            <RenderTestimonials />
            <ShowRecentBlogs />
            <HireMe />
        </div>
    )
}

type LinksProps = {
    profile?: string,
    twitter?: string
}

type TestimonialProps = {
    text: string,
    user: {
        name: string,
        title: string,
        links: LinksProps
    }
}

const RenderTestimonials = () => {
    const renderTestimonies = () => testimonials.map(item => <ShowTestimony key={item.text} text={item.text} user={item.user} />)

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-4xl">Testimonials</h2>
            <div className="flex flex-col gap-28">{renderTestimonies()}</div>
        </div>
    )
}

const ShowTestimony = ({ ...item }: TestimonialProps) => {
    const { text, user } = item;

    return (
        <div className="flex flex-col gap-4">
            <h2
                className="relative w-1/2 mx-auto text-2xl"
            >
                <span className="quotes__ql" content="“"></span>
                <span className="text-justify">{text}</span>
                <span className="quotes__qr" content="”"></span>
            </h2>

            {/* <h2 className="flex gap-4 text-justify">
                <span><ImQuotesLeft /></span>
                <span className="w-1/2 mx-auto">{text}</span>
                <span className="self-end"><ImQuotesRight /></span>
            </h2> */}
            <ShowUserDetails user={user} />
        </div>
    )
}

type UserProps = Pick<TestimonialProps, "user">

const ShowUserDetails = ({ user }: UserProps) => {
    const { name, title, links } = user;

    return (
        <div className="flex flex-col gap-2 bg-slate-600 opacity-60 text-blue-200 w-fit mx-auto px-6 py-2 rounded-lg">
            <div>
                <h2 className="text-xl">{name}</h2>
                <h3>{title}</h3>
            </div>
            <ShowLinks
                profile={links.profile}
                twitter={links.twitter}
            />
        </div>
    )
}

const ShowLinks = ({ ...items }: LinksProps) => {
    const { profile, twitter } = items

    return (
        <div>
            <p>
                <span>Profile: </span>
                <span>{profile}</span>
            </p>
            <p>
                <span>Twitter: </span>
                <span>{twitter}</span>
            </p>
        </div>
    )
}

const ShowRecentBlogs = () => {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-4xl">Recent Blogs</h2>
            <div
                className="flex gap-4"
            >
                <img
                    className="h-80 w-96"
                    src="https://source.unsplash.com/random/?Cryptocurrency&1"
                    alt=""
                />
                <h3>Work In Progress, Will Go Live Soon....</h3>
            </div>
        </div>
    )
}

const HireMe = () => {
    return (
        <div
                // className="absolute left-1/3 top-4 flex flex-col gap-6 text-blue-900 font-extrabold"
                className="pattern h-60 w-full flex flex-col justify-center items-center gap-6 text-blue-900 font-extrabold text-4xl"
            >
                <h2 className="">Im available for Freelance or Contractual or Fulltime or Valued Internships</h2>
                <button className="bg-slate-400 px-6 py-2 flex items-baseline rounded-full">Hire Me</button>
            </div>
    )
}

// const HireMe = () => {
//     return (
//         <div
//             className="pattern w-full h-60 relative"
//         >
//             <div
//                 // className="absolute left-1/3 top-4 flex flex-col gap-6 text-blue-900 font-extrabold"
//                 className="flex flex-col justify-center items-center gap-6 text-blue-900 font-extrabold"
//             >
//                 <h2>Im available for Freelance or Contractual or Fulltime or Valued Internships</h2>
//                 <button>Hire Me</button>
//             </div>
//             {/* <img
//                 className="w-full h-full"
//                 src="https://source.unsplash.com/random/?Cryptocurrency&1"
//                 alt=""
//             /> */}

//         </div>
//     )
// }