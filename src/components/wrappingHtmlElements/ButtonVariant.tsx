type buttonVariantPropsTypes = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<"button">

export const ButtonVariant = ({variant, children, ...rest}: buttonVariantPropsTypes) => {
  return (
    <>
        <div>ButtonVariant</div>
        <button className={`cls-with-${variant}`} {...rest}>{children}</button>
    </>
  )
}
