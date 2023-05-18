type randomNumberType = {
    value: number
}

type positiveNumberType = randomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type negativeNumberType = randomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
}

type zeroType = randomNumberType & {
    isZero: boolean,
    isNegative?: never,
    isPositive?: never,
}

type basicExampleWithRestrictionsPropsTypes = positiveNumberType | negativeNumberType | zeroType

export const BasicExampleWithRestrictions = ({
    value,
    isPositive,
    isNegative,
    isZero
}: basicExampleWithRestrictionsPropsTypes) => {
    return (
        <>
            <div>BasicExample</div>
            {value} {isPositive && "positive"} {isNegative && "negative"} {" "} {isZero && "zero"}
        </>
    )
}
