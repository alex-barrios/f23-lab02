function Rectangle(width: number, height: number): Shape {
    let _width = width
    let _height = height

    function getWidth(): number {
        return _width
    }

    function getHeight(): number {
        return _height
    }

    return {
        computeArea: function (): number {
            return getWidth() * getHeight()
        }
    }
}

export { Rectangle }
