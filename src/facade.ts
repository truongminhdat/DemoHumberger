class BlurayPlayer{
    on(){
        console.log('Bluray player turning on...')
    }
    turnOff(){
        console.log('Bluray turing off...')
    }
    play(){
        console.log('Playing bluray disc...')
    }
}
class Amplifier{
    on(){
        console.log("Amp is turning on...")
    }
    turnOff(){
        console.log("Amplifier is turning off...")
    }
    setSource(source: string){
        console.log("Setting source to " +source)        
    }
    setVolume(volumeLevel: number){
        console.log("Setting volume to: "+volumeLevel);
        
    }
}
class Lights{
    dim(){
        console.log("Light are dimming..")
    }
}
class TV{
    turnOn(){
        console.log("TV running on...")
    }
    turnOff(){
        console.log("TV running off..")
    }
}
class PopcornMarker{
    turnOn(){
        console.log("Popcorn maker turning on...")
    }
    turnOff(){
        console.log("Popcorn maker turning off...")
    }
    pop(){
        console.log("Popping corn!")
    }
}
class HomeTheaterFacade{
    private bluray: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMarker: PopcornMarker;
    constructor(amp: Amplifier, bluray: BlurayPlayer, lights: Lights, tv: TV, popcornMarker: PopcornMarker){
        this.amp = amp;
        this.bluray = bluray;
        this.lights = lights;
        this.tv = tv;
        this.popcornMarker = popcornMarker;
    }
    public watchTv(){
        this.popcornMarker.turnOn();
        this.popcornMarker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource("bluray");
        this.amp.setVolume(11);
        this.bluray.on();
        this.bluray.play();
    }
    public endMovie(){
        this.popcornMarker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff()
    }

}
let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMarker = new PopcornMarker();
let hometheater = new HomeTheaterFacade( amp,bluray, lights, tv, popcornMarker)
hometheater.watchTv();