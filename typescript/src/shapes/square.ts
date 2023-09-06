function square(sideLen: number): Shape {
    let _sideLen: number = sideLen

    function getSideLen(): number {
        return _sideLen
    }
    return {
        computeArea: function (): number {
            return getSideLen() * getSideLen()
        }
    }
}

export { square }