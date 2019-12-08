class ConveyorFacade {
    constructor(car) {
        this.car = car; 
    }
   // Все сборочные операции
    assembleCar () {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setWeels();
        this.car.addElectonics();
        this.car.paint();
    }
    // в случае демонтажа и установки деталей исп методы
    сhangeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    сhangeWeels() {
        this.car.getWeels();
        this.car.setWeels();
    }
   
}

class Conveyor {
    setBody() {console.log('setBody added');}
    setEngine() {console.log('setEngine added');}
    getEngine() {console.log('getEngine added !');}
    setInterior() {console.log('setInterior added');}
    setWeels() { console.log('setWeels added');}
    getWeels() {console.log('getWeels added !');}
    addElectonics() {console.log('addElectonics added');}
    paint() {console.log('Car painted!');}
}


const conveyor = new  ConveyorFacade(new Conveyor());
let car = conveyor.assembleCar();

// вызов методов по устранению поломки
car = conveyor.сhangeEngine();
car = conveyor.сhangeWeels();
