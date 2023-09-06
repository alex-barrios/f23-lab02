function circle(radius: number): Shape {
    let _radius: number = radius

    function getRadius(): number {
        return _radius
    }

    return {
        computeArea: function (): number {
            return Math.PI * getRadius() * getRadius()
        }
    }
}

export { circle }
