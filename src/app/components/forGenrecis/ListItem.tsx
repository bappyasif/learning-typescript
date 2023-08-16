import React from 'react'

type Props <T> = {
    id: number,
    name: string,
    extra: T[]
}

export default function ListItem(prop: Props<object>) {
  return (
    <div>ListItem</div>
  )
}
