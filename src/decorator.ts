abstract class  Car {
    public description: string;
    public getDescription(): string{
        return this.description;
    }
    public abstract cost():number;
}
class Models extends Car{
    public description = "Ô tô";
    public cost(): number {
        return 800000;
    }
}
class ModelX extends Car{
    public description = "Honda";
    public cost(): number {
        return 7000000;
    }
}
abstract class CarOptions extends Car{
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}
class EnhancedAutopilot extends CarOptions{
    decoratedCar: Car;
     constructor(car: Car){
         super();
        this.decoratedCar = car
     }
    public getDescription(): string {
        return this.decoratedCar.getDescription() + "Auto lái tự động";
    }
    public cost(): number {
        return this.decoratedCar.cost()+ 50000;
}
}
class RearfacingSeat extends CarOptions{
    decoratedCar: Car;
    constructor(car: Car){
        super();
       this.decoratedCar = car
    }
   public getDescription(): string {
       return this.decoratedCar.getDescription() + "Trang trí ghế sau";
   }
   public cost(): number {
    return this.decoratedCar.cost() + 400000;
}
}
let myTestla = new ModelX();
myTestla = new RearfacingSeat(myTestla);
console.log(myTestla.cost());
console.log(myTestla.getDescription())
// Decorator là một mẫu cấu trúc cho phép bạn gắn các hành vi mới vào các đối tượng bằng cách đặt các đối tượng này bên trong các đối tượng bao bọc đặt biệt chứa các hành vi