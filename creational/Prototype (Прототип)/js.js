/* 
   Прототип - порождающий паттерн, который позволяет копировать объекты, не вдаваясь в подробности их реализации
    В шаблоне прототип есть базовая реализация класса и используя упрощенный интерфейс мы создаём клоны объектов
    а клоны нужны чтобы в случае необходимости изменить их структуру и заточить под выполнение определенных задач.
*/

class TeslaCar {
    // в конструкторе определяются свойства
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    // возвращает ф-цию конструктор ( клонирует обьект )
    produce() {
        return new TeslaCar(this.model,this.price,this.interior,this.autopilot);
    }
}

// создадим экземпляр класса - Produce base auto
const prototypeCar = new TeslaCar('S',80000,'black',false);

// Cloning of base auto создаем новый авто на основании текущего  (клонируя его исп-я метод produce)
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for particular auto  - Изменения для конкретного авто 
// берем произв-й авто кар1 а добавляем новые требования только ему
car1.interior = 'white';
car1.autopilot = 'true';

// Итог: 
// Прототип - паттерн с пом. которого мы можем создать копию объекта с мин затратами памяти
// и модифицировать каждый экземпляр точечно под определенные нужды, не изменяя базовой структуры

console.log(car1); // TeslaCar