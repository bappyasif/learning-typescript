type HeadingProps = {
    title: string
}
const Heading = ({title}: HeadingProps) : React.ReactElement => {
  return (
    <div>{title}</div>
  )
}

export default Heading