type GenericsListProps<T> = {
    items: T[],
    render: (item: T) => React.ReactNode
}

// T extends {}
export const GenericsList = <T,>({ items, render }: GenericsListProps<T>) => {
    return (
        <>
            <h2><div>Generics List</div></h2>
            <ul>
                {
                    items.map((item, idx) => (
                        <li key={idx}>{render(item)}</li>
                    ))
                }
            </ul>
        </>
    )
}
