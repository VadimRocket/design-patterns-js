/*
Adapter - structural pattern
Оборачивает несовместимый объект с чем-то и делает его совместимым, не меняя исходный код объекта

Пример: КартРидер

Получение 2-х разных структурных ответов от сервера и приведение их к единому виду
Это своего рода нормализация

Т.е. с помощью дополнительной обертки сделать одинаковые интерфейсы

Рассмотрим реализацию на примере тюнинга Авто 
на место движка V 2.0 поставить движок V 4.0
*/


// классы с  методами интерфейсами
class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0');
    }
}

class EngineV8 {
    complitedInterface() {
        console.log('Engine V8');
    }
}

class  EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
        
    }
    // обёртка метода complitedInterface в simpleInterface 
    simpleInterface() {
        this.engine.complitedInterface()
    }

}

class Auto {
    // запуск 
    startEngine(engine) {
        engine.simpleInterface();
    }

}

// Engine 2.0
const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine); // Engine v 2.0   

 // Engine V8
 const myCar1 = new Auto();
 const  engineAdapter = new EngineV8Adapter(new EngineV8());

 myCar1.startEngine(engineAdapter); // Engine V8

 // Engine V8 без адаптера
const myCar2 = new Auto();
const  engineAdapterV = new EngineV8();
// myCar2.startEngine(engineAdapterV); // Error TypeError: engine.simpleInterface is not a function
