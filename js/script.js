function Phone(brand, price, color, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", camera has " + this.camera + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "12Mpx");
var GalaxyS6 = new Phone("Samsung", 999, "blue", "8Mpx");
var OnePlus = new Phone("OnePlus", 899, "red", "24Mpx");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();