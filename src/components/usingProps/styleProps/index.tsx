type propsTypes = {
    styles: React.CSSProperties
}

export const StyleProps = ({ styles }: propsTypes) => {
    return (
        <div style={styles}>index</div>
    )
}

// export const StyleProps = (props: propsTypes) => {
//   return (
//     <div style={props.styles}>index</div>
//   )
// }
