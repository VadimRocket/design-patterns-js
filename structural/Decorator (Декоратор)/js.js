/*

Структурный паттерн с пом которого мы можем добавлять объектам новые свойства и методы
оборачивать объект в класс декоратора расширяя его возможности 

Самый простой пример если надо создать большое кол-во подклассов
Если просто то, например, у нас есть базовый класс Car  но на этой заготовке нам можно создать и 
BMW AUDI т.е. на основании нашего кузова появляется большое кол-во  дочерних классов
или разновидности авто и такую проблему (Уменьшения классов) нам поможет решить данный паттерн 

Декоратором может выступать класс, который принимает объект  
  и добавляет дополнит свойства или методы расширяя его
  Декоратор может добавить Патронник и к Ауди и Тесла и к БМВ
  и в дополнении Стоимость изменить авто 

  Изменение опциональности мы будем рассматривать на примере стоимости

*/

// Basic Class  - Abstract Claass
class Car {
    constructor() {
        this.price = 1000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price
    }
    
    getDescription() {
        return this.model;
    }
}
// На основании Базового класса делаем  Класс Tesla 
// Но это Класс без дополнит-х Опций. Поэтому нам нада Классы Дополнительных Опций

class Tesla extends Car {
    constructor() {
        super();
        this.price =  25000;
        this.model =  'Tesla';
    }
}
// Классы Дополнительных Опций - Декораторы AutoPilot  Parktonic
// Change  итоговую стоимость авто
class AutoPilot {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 5000;  
    }

    getDescription() {
        return `${this.car.getDescription()} with AutoPilot `;
    }
}

class Parktonic {

    constructor(car) {
        this.car  = car;   
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `${this.car.getDescription()} with AutoPilot `;
    }
}

// 3 Create auto
// Version with  Parktonic and  AutoPilot
let tesla = new  Tesla();
    tesla = new AutoPilot(tesla);
    tesla = new Parktonic(tesla);

console.log(
    tesla.getPrice(),
    tesla.getDescription() /// 33000 "Tesla with AutoPilot  with AutoPilot "
);

// Versiion with only AutoPilot
let teslaA = new Tesla();
    teslaA = new AutoPilot(tesla);

console.log(
    teslaA.getPrice(),
    teslaA.getDescription() /// 33000 "Tesla with AutoPilot  with AutoPilot "
);

// если нас не устраивает какая то опция мы можем ее удалить или создать новый авто и добавить опций

class Audi extends Car {
    constructor() {
        super();
        this.price = 29999,
        this.model = 'Audi'
    } 
}

let audi = new Audi();
audi = new AutoPilot(audi);

console.log(audi.getPrice(), audi.getDescription()); // 34999 "Audi with AutoPilot "

// Появилось возможность расширять ф-иональность  без необходимости  инициализировать поведение по умолчанию 
// т.е при создании обьекта
// Оберни существующий класс и расширь его Функциональность