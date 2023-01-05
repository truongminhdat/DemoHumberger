interface Subject {
  registerObverse(o: Obverse);
  removeObverse(o: Obverse);
  notifyObverse();
}
interface Obverse {
  update(temperature: number)
}
class WeatherStation implements Subject {
  private temperature: number;
  private obverse: Obverse[] = [];
  setTemperature(temp: number) {
    console.log("Check thời tiết " + temp);
    this.temperature = temp;
    this.notifyObverse()
  }
  public registerObverse(o: Obverse) {
    this.obverse.push(o);
  }
  public removeObverse(o: Obverse) {
    let index = this.obverse.indexOf(o);
    this.obverse.splice(index, 1);
  }
  public notifyObverse() {
    for (let obverse of this.obverse) {
      obverse.update(this.temperature)
    }
  }

}
class TemperatureDisplay implements Obverse {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObverse(this)
  }
  public update(temperature: number) {
    console.log('Man hien thi nhiet do Cập nhật thời tiết hôm nay')
  }

}
class Fan implements Obverse {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation
    weatherStation.registerObverse(this)
  }
  public update(temperature: number) {
    if (temperature > 25) {
      console.log('Nhiet do lon hon 25 nen bat bat quat')
    }
    else {
      console.log('khong nen bat quat')
    }
  }

}
let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation)
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);

//là mẫu thiết kế hành vi cho phép bạn xác định cơ chế đăng ký để thông báo cho nhiều đối tượng về bất kỳ sự kiện nào xảy ra với đối tượng mà họ đang quan sát.