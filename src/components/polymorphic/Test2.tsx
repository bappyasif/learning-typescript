type tryingPolymorphismOwnProps<E extends React.ElementType> = {
    size?: "sm" | "md" | "lg",
    color?: "primary" | "secondary",
    children: React.ReactNode,
    as?: E
}

type tryingPolymorphismPropsTypes<E extends React.ElementType> = tryingPolymorphismOwnProps<E>
    & Omit<React.ComponentProps<E>, keyof tryingPolymorphismOwnProps<E>>

export const TryingMoreRefinedPolymorphism = <E extends React.ElementType = "div">({ size, color, children, as }: tryingPolymorphismPropsTypes<E>) => {
    const Component = as || "div"
    return (
        <Component className={`class-${size}-${color}`}>{children}</Component>
    )
}
