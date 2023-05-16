type propTypes = {
    // status: string // typescript wont complain if its any string
    status: "Loading" | "Success" | "Error" // anything beyond these options will throw an error
}

export const AdvancedPropTypes = (props: propTypes) => {
    let msg = "";

    if(props.status === "Loading") {
        msg = "Data Loading...."
    } else if(props.status === "Success") {
        msg = "Fetched Successfully...."
    } else if(props.status === "Error") {
        msg = "Fetched Failed...."
    }

  return (
    <div>Status: {msg}</div>
  )
}
