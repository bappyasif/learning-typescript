import ListItem from "./ListItem"

export const ItemsList = () => {
    return (
        <div>
            <h2>ItemsList</h2>
            <ListItem
                extra={[{ id: 1, uName: "jane doe" }]}
                id={22}
                name="user here"
            />
        </div>
    )
}
