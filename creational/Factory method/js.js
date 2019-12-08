/*
Factory Method (Фабричный метод)

Цель создать класс, который будет создавать нам объекты на основе входных данных
Когда его создавать: 
1. Когда надо создавать множество однотипных объектов
Простая фабрика может создавать из 2 классов - Класса конструктора который
 генерит нам объект и класса, который их вызывает с определенными параметрами.

Классов конструкторов может быть несколько. В корневом конструкторе класса вызывается 1 из них в зав-ти 
от переданного параметра.
*/

// class constructor
class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

// над ним будет надстройка из фабрики которая оптимиз-т процесс создания обьектов
class BmwFactory {
    create(type) {
        if(type === 'X5') return new Bmw(type, 100670, 300);
        if(type === 'X6') return new Bmw(type, 110670, 330);
    }
}

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(x5);
console.log(x6);

/*
Аргументы от конструктора передаются автоматически и 
конструктор вызывается в зависимости от аргумента, который мы передаем в фабрику
*/

