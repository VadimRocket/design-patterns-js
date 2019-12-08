/* Породжающий Паттерн
объект в системе к которому есть глобальная точка доступа getInstance()

Нужен, когда нужен объект в единственном экземпляре
И которому может быть доступ из разных частей программы
 
Реализация корзины интернет магазина
Если мультимедийная система - инстанс плеера

Нужен, когда нужен объект в единственном экземпляре
каждый раз, когда мы создаем новый объект он всегда новый 

Простой пример используя создание литерала объекта
объект нах-ся в единственном экземпляре

*/


let print = (...args) => console.log(...args);

const instance1 = {
    name: "singleton",
};

const instance2 = {
    name: "singleton",
};

// instance1 === instance2; // false
// {} === {}; // false

print(`Equals: ${instance1 === instance2} `);

// Варианты создания:

// 1 Вариант Создания Singleton
// Недостаток Реализации -  глобальная переменная let instance

let instance; 
// class constructor
class Counter {
    constructor() {
        if(!instance) instance = this;    
        /*
        	if no instance создай. Если он есть, то конструктор получает ссылку на него
  			В рез-те у нас появился объект инстанс и конструктор со ссылкой на этот объект
			и теперь любой объект, созданный с помощью конструктора Counter будет получать ссылку на instance а не создавать каждый раз
        */
       instance.count = 0;
        return instance;
    }
    // расширим наш класс
    getCount() {
        return instance.count;
    }

    // увелич-т значение счетчика
    increaseCount() {
        return instance.count++;
    }
}

// create 2 obj's
const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

print(myCount2.getCount()); // 4
print(myCount1.getCount()); // 4

// obj myCount1 and obj myCount2 ссылаются на один обьект  Singleton и изменяют его 4 раза


// 2 Вариант Создания Singleton более Элегантный
class CounterA {
    constructor() {
        if(typeof Counter.instance == 'object') {
            return Counter.instance;
        } 
        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCounter() {
        return this.count
    }
    increaseCounter() {
        return this.count ++;
    }
} 

// create 2 obj's
const myCount3 = new CounterA();
const myCount4 = new CounterA();
myCount3.increaseCounter();
myCount3.increaseCounter();
myCount4.increaseCounter();
myCount4.increaseCounter();

print(myCount4.getCounter()); // 4
print(myCount3.getCounter()); // 4 