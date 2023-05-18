// type restrictiveButtonPropsTypes = {
//     variant: 'primary' | 'secondary',
//     children: string
// } & React.ComponentProps<"button">

// to remove children type to be only "string" type and not React.ReactNode type we are using "Omit"
type restrictiveButtonPropsTypes = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit <React.ComponentProps<"button">, "children">

export const RestrictiveButton = ({ variant, children, ...rest }: restrictiveButtonPropsTypes) => {
    return (
        <>
            <div>RestrictiveButton</div>
            <button className={`cls-${variant}`} {...rest}>{children}</button>
        </>
    )
}
