//super class
class Holiday {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info() {
        console.log(`${this.destination} will take ${this.days} days`);
    }
}

//sub class
class Expedition extends Holiday {
    constructor(destination, days, gear) {
        //use super to access parent class
        super(destination, days);
        this.gear = gear;
    }
    //overwrites previous info method
    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripWithGear = new Expedition('Everest', 30, [
    'shoes',
    'backpack',
    'glasses',
]);
tripWithGear.info();
