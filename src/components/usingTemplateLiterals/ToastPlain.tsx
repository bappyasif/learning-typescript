type horizontalPosition = 'left' | 'center' | "right";
type verticalPosition = 'top' | 'center' | 'bottom';

type toastPlainProps = {
    position: `${horizontalPosition} - ${verticalPosition}`
}

export const ToastPlain = ({position}: toastPlainProps) => {
  return (
    <>
    <div>ToastPlain</div>
    <h2>Toast Notification Position - {position}</h2>
    </>
  )
}
