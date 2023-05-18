type customInputPropsTypes = React.ComponentProps<"input">

export const CustomInput = (props: customInputPropsTypes) => {
  return (
    <>
    <div>CustomInput</div>
    <input type="text" {...props} />
    </>
  )
}
