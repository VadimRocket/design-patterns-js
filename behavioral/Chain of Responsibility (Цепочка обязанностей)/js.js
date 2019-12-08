/* 
Поведенческий паттерн, который позволяет передавать запросы последовательно 
по цепочке обработчиков 
Особенность в том, что каждый последующий обработчик решает задачу - может ли он сам обработать запрос
Или его надо передать дальше по цепочке

Если элемент может обработать данные тогда нам возвращается обработанный результат
Ели нет тогда данные передаются на Следующий Элемент цепочки и т.д. пока не попадется 
нужный обработчик.

Применение:
Представим, что у нас есть система онлайн покупок и каждый зарегистрированный пользователь
Может выбрать несколько карточек оплаты или несколько систем оплаты
Проверяются все счета на и если нет нужной суммы получим соотв. месседж

Практика

*/

// Класс Содержит реализацию Цепочки ответственности
class Account {
/*
на вход принимает транзакцию оплаты orderPrice и прогоняет ее через условие если выбранная платежная система может оплатить счет тогда получим соответ-й мессэдж.
в противном случае мы запускаем след условие и проверяем если у данной системы приемник тоесть есть ли в цепочке следующая система оплаты если нет погружаемся ниже *(Это своего рода рекурсия)
в конечном счете если нет приемника и баланса не хватает тогда выводим Месседж.
*/
    pay(orderPrice) {
        if(this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);

        }else if(this.incomer) {
            console.log(`Can't pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        }else {
            console.log('Unfortunately not enouph money');
        }
    }
    // Сравниваем поступающее значение транзакции на оплату с текущим значением баланса.
    canPay(amount) {
        return this.balance >= amount;
    }
   // Устанавливаем приемника - внутрь 1 обькта помещаем другой
    setNext(account) {
        this.incomer = account;
    }

    //  Посмотрим цепочку приемникоа наших платежнх систем
    show() {
        console.log(this);
    }
};


// Обьекты Платежных Систем
class Master extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
} 

class Qiwi extends Account {
    constructor(balance) {
        super();
        this.name = 'Qiwi';
        this.balance = balance;
    }
}



// Set System balance
const  master = new Master(100);
const  paypal = new Paypal(200);
const  qiwi   = new Qiwi(500);

// Define chain 
master.setNext(paypal);
paypal.setNext(qiwi);

// Start payment 
master.pay(458); 
// Оплатить можно только с помощью Qiwi ост системы сообщ о нехватке денег
/*
Can't pay using Master Card
js.js:29 Can't pay using Paypal
js.js:26 Paid 458 using Qiwi
*/
// Смотрим цепочку приемников
master.show();  
/*
Master {name: "Master Card", balance: 100, incomer: Paypal}
balance: 100
incomer: Paypal {name: "Paypal", balance: 200, incomer: Qiwi}
name: "Master Card"
__proto__: Account
*/

/*
Т.о  Данный паттерн позволяет создать любые цепочки для обработки поступающих 
данных и в случае невозможности обработки этих данных на 1 уровне они могут 
быть переданы на следующий уровень пока не будут корректно обработаны.
Сами же цепочки способны гибко конфинурироваться.
*/ 