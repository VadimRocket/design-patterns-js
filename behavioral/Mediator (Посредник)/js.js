/*
    Поведенческий паттерн уменьшающий взаимосвязь между классами вынося межклассовые связи в класс посредник. 
    Позволяющий переиспользовать компоненты
    Пример стр. Профиля Социальной Сети
    из-за большого кол-ва взаимосвязей между страницами нельзя пере использовать отдельные э
    компоненты вашего интерфейса на др. стр.-х 
    Пример из жизни: посредник - автосалон - Дилер
*/


// Все связи происх тут
class OfficialDealer {
    constructor() {
        this.customers = [];
    }

// принимает контекст вызова клиента, марка авто и информация доп-я
    orderAuto(customer, auto, info) {
        const name = customer.getName(); // получ имена клиентов

        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);

        this.addCustomersList(name); // добавляем имя клиента в список клиентов []
    }

    addCustomersList(name) {
        this.customers.push(name);
    }
    getCustomerList() {
        return this.customers;
    }
}
// Клиент - Описывается связь с медиатором
// name - имя класса и связующее звено(медиатор): dealerMediator
class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }
   // вызывается метод медиатора dealerMediator.orderAuto()
    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}
// created instance mediator
const mediator  = new OfficialDealer();

// create two customers
const alex = new Customer('Alex', mediator);
const peter = new Customer('Peter', mediator);

// do two orders 
alex.makeOrder('Tesla', 'With autopilot');
// Order name: Alex. Order auto is Tesla
// js.js:23 Additional info: With autopilot
peter.makeOrder('Audi', 'With autopilot');

// js.js:22 Order name: Peter. Order auto is Audi
// js.js:23 Additional info: With autopilot

console.log(mediator.getCustomerList());  //  ["Alex", "Peter"]

// Этот список можно хранить в другом классе установив связь с медиатором.


