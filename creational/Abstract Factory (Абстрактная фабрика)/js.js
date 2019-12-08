/*
Паттерн создающий интерфейс, группирующий другие фабрики, которые 
связаны логически др. с другом.

Условно говоря абстракция для фабрики и фабричного метода

Условия применения: 
Предположим у нас есть семейство общих продуктов - Автомобили марки бмв
 Но модельный ряд авто разный

Нужно выделить 1 суперкласс производство авто и описать в нем логику произ-ва тех или иных авто
 Потом использовать в ней существующие фабрики и в зависимости от условия производить ту или иную модель  
Посути это надстройка над др. фабриками.

 Надо помнить 1 особенность 
 У под фабриками должен быть одинаковый интерфейс объектов 
 чтобы можно было управлять из абстрактной фабрики

Производство авто — это, во-первых, Фабрика где может производится 1 определенная модель
Таких фабрик с производством моделей может быть несколько
Т. о произ-во авто в целом - Абстрактная фабрика которая выглядит след-м образом.
у нас это bmvProducer которая будет произ-ть либо семейные авто или спорт кары

И за каждый их этих типов отвечает своя собственная фабрика sportCarFactory и familyCarFactory

И Производство авто осущ-ся с помощью ф-ции конструктора или классов Z4 I3

если нужен спорт кар вы заказываете его вам прилетает запрос на произ-во 
на создание спорт кара, а производство отправит запрос на создание авто - обычный объект на 
на обычную фабрику, которая создаст экземпляр нужного вам авто

Т.о Абстрактная фабрика - дополнительная абстракция(надстройка)
которая управляя однотипными фабриками   помогает создавать объекты со схожей структурой 
но с разными данными делает это, не привязываясь к конкретным классам 
создаваемых объектов
*/

// Abstract factory
function bmvProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
};

// Factories
function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return 'Z4 is a Sport car!';
    }
};

class I3 {
    info() {
        return 'I3 is a Family car!';
    }
};

// Initializing Abstract factory of a sport cars
const produce = bmvProducer('sport');

// Car producing (Factory)
const myCar = new produce();

console.log(myCar.info());