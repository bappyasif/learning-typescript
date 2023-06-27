import testImg from "../../assets/react.svg"
import just_news_gif from "../../assets/just_news_rec.gif"
import odbo_live_gif from "../../assets/odbo_live_rec.gif"
import twitter_prototype_gif from "../../assets/twitter_prototype_rec.gif"
import myth_busters_gif from "../../assets/myth_busters_rec.gif"

export const skills = [
    { name: "CSS", text: "Profeciency", percentile: 94 },
    { name: "HTML", text: "Profeciency", percentile: 94 },
    { name: "TailwindCss", text: "Profeciency", percentile: 87 },
    { name: "MUI", text: "Profeciency", percentile: 87 },
    { name: "Javascript", text: "Profeciency", percentile: 85 },
    { name: "React", text: "Profeciency", percentile: 85 },
    { name: "ExpressJS", text: "Profeciency", percentile: 80 },
    { name: "NextJS", text: "Profeciency", percentile: 80 },
    { name: "MongoDB", text: "Profeciency", percentile: 80 },
    { name: "Authentications", text: "Profeciency", percentile: 80 },
    { name: "MERN Stack", text: "Profeciency", percentile: 86 },
    { name: "Typescript", text: "Profeciency", percentile: 72 },
    { name: "Firebase", text: "Profeciency", percentile: 72 },
    { name: "React Queries", text: "Profeciency", percentile: 72 },
    { name: "Axios", text: "Profeciency", percentile: 72 },
    { name: "Next Auth", text: "Profeciency", percentile: 72 }
];

export const figs = [
    { name: "Github Repos", count: 127, text: "and more" },
    { name: "HackerRank", count: 4, text: "Stars and more" },
    { name: "OSP Contributions", count: 24, text: "Merges and more" },
    { name: "FCC Forum", count: 58, text: "Solutions and more" },
];

export const projects = [
    { name: "Just News", repo: "https://github.com/bappyasif/just-news", live: "https://just-news-eta.vercel.app/", description: "this web app used NewsCatcher Api, to display news snippets and list of all available providers from everywhere. This is a Fullstack app which uses MongoDB for storing persistents data by user and shows it on app as intended. This app also shows live search capability but for Logged In User Only. This app also provides option to store news search filters or news provider filters to access those information from a dashboard view experience from just a click of a button. This Fullstack web app is built on NextJs ecosystem with various authentication for users to choose from. I hope you will find this useful for your news snippet skims as well.", imgSrc: just_news_gif },
    { name: "OdBo", repo: "https://github.com/bappyasif/odbo-live", live: "https://vercel.com/bappyasif/odbo-live", description: "This is a Fullstack web app made with pure MERN Stack. This is a final project for The Odin Project FullStack Path curriculum. This web app is made use of MUI for CSS. This web app is a social media site which will allow user to login, logout, create, edit, update posts and comments in a post. For its server ExpressJs, api and authen tication is done through them. This was indeed was a project where all of my acquired and new knowledge were involved to complete this project.", imgSrc: odbo_live_gif },
    { name: "Standalone Twitter - Prototype", repo: "https://github.com/bappyasif/prototype-attempt-for-a-basic-twitter", live: "https://prototyping-a-basic-twitter.web.app/", description: "This was another final project for Frontend Path of The Odin Project. This project was asked to make a frontend only functionlaity for any of our favorite web app. I chose to go with twitter, and also included backend servic es with Firebase. This project onnly uses plain css for its styling. Also Firebase was extensively used for data storing, authentication and hosting. After completing this web app my knowledge on React and its usage was more clear and fluent.", imgSrc: twitter_prototype_gif },
    { name: "Myth Busters", repo: "https://github.com/bappyasif/edutainment_game_based_on_animal_trivia", live: "https://myth-buster-game-jam.web.app/", description: "This is a project that i and along with a team member completed and competed for an international game jam organized by The Odin Project for its students and learners. This is an education based game for middleschool and above grade students or individuals. This game uses only Vanilla Javascript and css for its styling. Also useed Figma and notion for keepinbg track of its progress anbd UI. This initiative was done in a 3-4 weeks and was in mid level standing among all of its contestents. This was really a fun experience where i got to collaborate and see it through this project from ideatrion to deployment.", imgSrc: myth_busters_gif }
];

export const designs = [
    { name: "Landing Page", repo: "github.com", live: "some.site", description: "some news some news some news some news", imgSrc: testImg },
    { name: "Animations Saavy", repo: "github.com", live: "some.site", description: "some news some news some news some news", imgSrc: testImg },
    { name: "Self-driving Corp", repo: "github.com", live: "some.site", description: "some news some news some news some news", imgSrc: testImg },
    { name: "Product Review Page", repo: "github.com", live: "some.site", description: "some news some news some news some news", imgSrc: testImg }
]

export const testimonials = [
    { text: "here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more", user: { name: "Hoxie", title: "none of your business", links: { profile: "github.com", twitter: "@handle" } } },
    { text: "here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more", user: { name: "Skyler", title: "none of your business", links: { profile: "github.com", twitter: "@handle" } } }
];