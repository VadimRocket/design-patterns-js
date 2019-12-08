/*
State pattern - Состояние - Поведенческий паттерн который позволяет объектам 
менять свое поведение в зависимости от состояния. Со стороны это выглядит 
как будто в работу вкл-ся другие классы
Программа может находится в 1 из нескольких состояний и в зависимости от этого 
программа может реагировать на одно и тоже событие по-разному
Переход между этими состояниями может быть управляемым (ручным) и автоматическим когда 
в зависимости о того или иного условия включаются следующие состояния
Пример: Слежение за доставкой товара
На стадии оплаты можно отменить оплату

 */

// Базовый класс заказа

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }
    // Перемещает на следующий шаг заказа
    next() {
        return new this.nextStatus();
    }
}

// Шаги доставки
// Оплата
class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
             // имя текущего шага и определ-м следующий шаг
    }
}
// Перевозка
class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}
// доставлен
class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

// Обьект заказа
class Order {

    constructor() {
        this.state = new  WaitingForPayment();  // Определяем состояние
    }

    nextState() {
        this.state = this.state.next();  // метод к-й изменяет состояние
    }
    // ф-циональность отмены заказа кот должн работать только на 1 шаге
    cancelOrder() {
        this.state.name === 'waitingForPayment' ?
        console.log('Order is canceled!') : 
        console.log('Order can not is canceled!') 
    }
}

const myOrder = new Order();
console.log(myOrder.state.name);    // waitingForPayment


myOrder.nextState();
console.log(myOrder.state.name);    // shipping


myOrder.nextState();
console.log(myOrder.state.name);    // delivered

myOrder.cancelOrder();               // Order can't is canceled!
