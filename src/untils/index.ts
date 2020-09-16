class Shape {
    Area: number
    name = 123
    constructor(area: number) {
        this.Area = area
    }
    display(): void {
        this.Area * 2
    }
}
class Circle extends Shape {
    display(): void {
        super.display()
        console.log('圆的面积: ' + super.Area)
    }
}
const obj = new Circle(320)
const a = obj.display()

export default a
