export const getCirclePerimeter = (radius: number) => {
    return Math.PI * 2 * radius;
}

export const getCircleRadiusWidthStroke = (radius: number, strokeWidth: number) => {
    return radius - (strokeWidth / 2);
}