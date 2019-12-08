/*
Данный структурный паттерн исп-ся для создания объектов со сложными состояниями
Он может иметь дополнительный слой абстракции - Директор
который управляет несколькими строителями
Наша реализация будет без Директора

Как вы знаете создания определенного объекта со значениями инициализируется в конструкторе
в нем могут задаваться будущие свойства объекта, но если 
данный процесс усложняется, когда свойства зависят от определенных
факторов и могут добавляется также 
То конструктор класса может разрастись до больших размеров
Чтоб такого не произошло исп-ся паттерн билдер
Который позволяет создавать сложные объекты 
инициализацию которых проблематично уместить в конструкторе

*/

// Определяем свойства будущего объекта autoPilot parktonic signaling
// по умолчанию данные свойства не входят в состав производимого авто
// Предположим что часть этих опций нам надо 
class Car {
    constructor() {
        this.autoPilot = false;
        this.parktonic  =  false;
        this.signaling = false;
    }
};

/*
2 Для целей модификаций надо создать нам Builder
в конструкторе инициализируем создание класса new Car()
Т е. мы создаем авто базовой комплектации внутри CarBuilder 
Мы будем иметь доступ к нашему авто по ссылке this.car
у нас есть методы на добавление наших опций
addAutoPilot addParktonic addSignaling
Каждый их этих методов может спокойно принять аргумент снаружи
в каждое из методов мы возвращаем this - Это надо чтобы каждое из свойств могло работать с контекстом, и мы могли вызывать
И мы могли возвращать методы по цепочке
 */


/*
+  У нас есть методы updateEngine(engine) для заказа движка лучшего чем у вас есть в стоковой версии
Обрати внимание - в начальном объекте этого параметра нет 
и  build()  - который возвращает объект нашего укомплектованного авто
*/



class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addParktonic(parktonic) {
        this.car.parktonic = parktonic;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    build() {
        return this.car;
    }
};

// Если мы бeдем вызывать с помощ нашего строителя
const myCar = new CarBuilder()
                    .addAutoPilot(true)
                    .addParktonic(true)
                    .updateEngine('V8')
                    .build(); //  возвращает обьект нашего укомплектованного авто

console.log(myCar);  //  Car no standart model
 // итоговый обьект изменился - полное конфугирование нужного обьекта максимально простым интерфейсом
 /*
CarautoPilot: trueengine: "V8"parktonic: truesignaling: false__proto__: Object
*/

// Standart  Car model
const standartCar = new CarBuilder(); 
console.log(standartCar);
//CarBuilder {car: Car}car: Car {autoPilot: false, parktonic: false, signaling: false}autoPilot: falseparktonic: falsesignaling: false__proto__: Object__proto__: Object

// We can create other Car and configurate him
const carWithV4 = new CarBuilder()
                        .addAutoPilot(true)
                        .updateEngine('V4')
                        .build();
console.log(carWithV4);
// Car {autoPilot: true, parktonic: false, signaling: false, engine: "V4"}                        

/*
Итог: данный паттерн позволяет создавать различные конфигурации объектов 
не засоряя конструктор дополнительной логикой в котором она не нужна
Также данный паттерн надо если объект существует в разных вариациях или процесс 
 инстанцирования состоит из нескольких шагов
*/
