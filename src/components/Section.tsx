type SectionProps = {
    title?: string,
    children: React.ReactNode
}

export const Section = ({ children, title="Default Prop As its made Optional in Type" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}


// old way of defining a Functrional Component
// const Section: React.FC<{ title: string }> = ({ children, title }) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             {children}
//         </section>
//     )
// }