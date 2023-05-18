type basicExaplePropsTypes = {
    value: number,
    isPositive: boolean,
    isNegative: boolean,
    isZero: boolean
}
export const BasicExample = ({
    value,
    isPositive,
    isNegative,
    isZero
}: basicExaplePropsTypes) => {
    return (
        <>
            <div>BasicExample</div>
            {value} {isPositive && "positive"} {isNegative && "negative"} {" "} {isZero && "zero"}
        </>
    )
}
