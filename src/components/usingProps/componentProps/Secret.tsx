export type secretPropType = {
    name: string
}

export const Secret = ({name}: secretPropType) => {
  return (
    <div>Dear {name}, You Are Viewing This Secret Page</div>
  )
}
