import { ReactNode } from "react"

interface ListProps<T> {
  items: T[],
  render: (item: T) => ReactNode
}

// equally works
// export const List = <T extends {}> ({items, render}: ListProps<T>) => {
export const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div>
      <h1>Rendering List</h1>
      <ul>
        {
          items.map((item, idx) => {
            return (
              <li key={idx}>
                {render(item)}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
