import { testimonials } from "./Portfolio/data"

export const Additionals = () => {
    return (
        <div
            className="flex flex-col justify-center items-center gap-6 w-full"
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
        <div>
            <h2>Testimonials</h2>
            <div>{renderTestimonies()}</div>
        </div>
    )
}

const ShowTestimony = ({ ...item }: TestimonialProps) => {
    const { text, user } = item;

    return (
        <div>
            <h2>{text}</h2>
            <ShowUserDetails user={user} />
        </div>
    )
}

type UserProps = Pick<TestimonialProps, "user">

const ShowUserDetails = ({ user }: UserProps) => {
    const { name, title, links } = user;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{title}</h3>
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
            <p>{profile}</p>
            <p>{twitter}</p>
        </div>
    )
}

const ShowRecentBlogs = () => {
    return (
        <div>
            <h2>Recent Blogs</h2>
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
            className="w-full h-60 relative"
        >
            <div
                className="absolute left-1/3 top-4 flex flex-col gap-6 text-blue-900 font-extrabold"
            >
                <h2>Im available for Freelance or Contractual or Fulltime or Valued Internships</h2>
                <button>Hire Me</button>
            </div>
            <img
                className="w-full h-full"
                src="https://source.unsplash.com/random/?Cryptocurrency&1"
                alt=""
            />
            
        </div>
    )
}