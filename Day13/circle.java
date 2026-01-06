interface Icircle {
    public void setRadius(int radius);
    public int getRadius();
    public float getArea();
}
class Circle implements Icircle{
    private int radius;
    private float area;
    private static float PI=3.142f;
    @Override
    public void setRadius(int radius) {
        this.radius=radius;
    }
    @Override
    public int getRadius() {
        return radius;
    }
    @Override
    public float getArea() {
        area = PI * radius * radius;
        return area;
    }
}