// type listPropsTypes = {
//     // this way we are restrincting our lists to be either this or that but we want somethign generic
//     items: string[] | number[],
//     clickHandler: (value: string | number) => void
// }

type listPropsTypes<T> = {
    // in generic we will use "T" to replace that for types
    items: T[],
    clickHandler: (value: T) => void
}

// a pure generic usecase
// export const GenericList = <T extends {}> ({items, clickHandler}: listPropsTypes<T>) => {
//   return (
//     <>
//     <div>GenericList</div>
//     {
//         items?.map((item, idx) => {
//             return (
//                 <div key={idx} onClick={() => clickHandler(item)}>{JSON.stringify(item)}</div>
//                 // <div key={idx} onClick={() => clickHandler(item)}>{item}</div>
//             )
//         })
//     }
//     </>
//   )
// }

// we can even specify T type in here as well
// export const GenericList = <T extends number | string>({ items, clickHandler }: listPropsTypes<T>) => {
//     return (
//         <>
//             <div>GenericList</div>
//             {
//                 items?.map((item, idx) => {
//                     return (
//                         <div key={idx} onClick={() => clickHandler(item)}>{JSON.stringify(item)}</div>
//                     )
//                 })
//             }
//         </>
//     )
// }

// we can even specify our generic type
export const GenericList = <T extends {id: number}>({ items, clickHandler }: listPropsTypes<T>) => {
    return (
        <>
            <div>GenericList</div>
            {
                items?.map(item => {
                    return (
                        <div key={item.id} onClick={() => clickHandler(item)}>{JSON.stringify(item)}</div>
                    )
                })
            }
        </>
    )
}