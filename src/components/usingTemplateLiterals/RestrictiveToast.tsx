type horizontalPosition = 'left' | 'center' | 'right'

type verticalPosition = 'top' | 'center' | 'bottom'

type restrictiveToastProps = {
    position: Exclude<`${horizontalPosition}-${verticalPosition}`, 'center-center'> | 'center'
}

export const RestrictiveToast = ({position}: restrictiveToastProps) => {
  return (
    <>
    <div>RestrictiveToast</div>
    <h2>Notification Toast Positioin is : {position}</h2>
    </>
  )
}
