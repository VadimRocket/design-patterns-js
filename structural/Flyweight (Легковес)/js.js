/*
    12 - Flyweight (Легковес) или Cash Структурный Паттерн - позволяет вместить большое кол-во объектов в выдел-ую RAM

    Позволяет экономить ресурсы разделяя общее состояние между собой
    вместо хранения одинаковых данных в каждом объекте
    Особенности:
    1. Неизменяемость данных после создания
     Внутреннее состояние должен получить через параметры конструктора и не должно быть публичных
     полей и сеттеров 

     2. Создавать лучше через фабрику, которая принимает все внутренние состояния легковеса 
     и искать существ-е легковесы с таким внутренним состоянием если его нет тогда создать новый

*/ 

// Класс легковеса - что будет Кэшироваться
class Auto {
    constructor(model) {
        this.model = model;
    }
}


class AutoFactory {
    constructor(name) {  // name - model auto
        this.models = {};
    }

    // create(name) {  // принимает  model
    //     let model = this.models[name];
    //     if(model) return model;
    //     this.models[name] = new Auto(name); // записываем в свойство model - объект
    //     return this.models[name]; //  возвращ-м ссылку на него (model)
    // }
    // модифицируем 
    create(name) {  // принимает  model
        let model = this.models[name];
        if(model) return model;
        console.count('model'); // console counter
        this.models[name] = new Auto(name); // записываем в свойство model - обьект
        return this.models[name]; //  возвращ-м ссылку на него (model)
    }
    
    getModels() {
        console.table(this.models);  
    }
}

const factory = new AutoFactory();
const bmw = factory.create('BMW');
const audi = factory.create('AUTI');
const tesla = factory.create('Tesla');
const blacktesla = factory.create('Tesla'); // ссылка на сущ модель tesla

console.log(factory.getModels());

/*
Object
AUTI: Auto {model: "AUTI"}
BMW: Auto
model: "BMW"
__proto__:
constructor: class Auto
__proto__: Object
Tesla: Auto
model: "Tesla"
__proto__: Object
__proto__: Object
*/


