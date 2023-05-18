type testPropsType = {
    size?: "sm" | "md" | "lg",
    color?: "primary" | "secondary",
    children: React.ReactNode,
    // as?: string
    as?: React.ElementType
}

export const TryingPolymorphism = ({ size, color, children, as }: testPropsType) => {
    const Component = as || "div"
    return (
        <>
            <div>Trying Polymorphism</div>
            {/* <div className={`class-${size}-${color}`}>{children}</div> */}
            <Component className={`class-${size}-${color}`}>{children}</Component>
        </>
    )
}
