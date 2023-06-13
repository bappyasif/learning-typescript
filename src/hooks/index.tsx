import { useEffect } from "react"

export const useOnClickOutside = (ref:any, cb:(e:MouseEvent)=>void) => {
    useEffect(() => {
        let listener = (event:MouseEvent) => {
            if(!ref.current || ref.current.contains(event.target)) return
            cb(event)
        }

        // document.addEventListener("mouseleave", listener);
        document.addEventListener("mousedown", listener);

        return () => {
            // document.removeEventListener("mouseleave", listener)
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, cb])
}