interface Iphone{
    useLightning();
}
interface Android{
    useMicroUSB();
}
class iPhone7 implements Iphone {
    useLightning(){
        console.log("Using lightning port...")
    }
}
class GooglePixel implements Android{
     useMicroUSB(){
        console.log('Using micro USB...')
     }
}
class Lightning implements Android{
    iphoneDevice: Iphone;
    constructor(iphone: Iphone){
        this.iphoneDevice = iphone;
    }
    useMicroUSB() {
        console.log('Want to use USB, converting to Lightning')
        this.iphoneDevice.useLightning()
    }

}
let iphone = new iPhone7();
let data = new Lightning(iphone);
data.useMicroUSB();