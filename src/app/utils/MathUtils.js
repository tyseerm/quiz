export const getPercentage = (part, from) => (
    (part / from ) * 100
)

export const getPercentageInt = (part, from) => (
    Math.round(getPercentage(part, from))
)