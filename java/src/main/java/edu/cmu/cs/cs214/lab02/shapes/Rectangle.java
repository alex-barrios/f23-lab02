package edu.cmu.cs.cs214.lab02.shapes;

public class Rectangle implements Shape {
    private double height;
    private double width;
    
    public Rectangle(double height, double width){
        this.height = height;
        this.width = width;
    }

    public double getArea() {
        return getHeight() * getWidth();
    }

    private double getHeight() {
        return this.height;
    }

    private double getWidth() {
        return this.width;
    }
}
