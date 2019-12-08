/*
Паттерн Стратегия - поведенческий - определяет схожие алгоритмы (семейство) и помещает их в отдельный класс (-ы Стратегии)
и между ними потом можно автоматически переключать в ходе выполнения программы

Все Стратегии должны иметь одинаковый интерфейс 

Случаи Использования:

1. Для Расширения приложения (Чтоб не читать полотно трудно читаемое)

Изначально должен быть 1 Корневой класс, который в зав-си от ситуации делегирует выполнение алгоритм(-ы) на стратегию ()

Сам объект - Context   у которой есть ссылка на нужную стратегию

Реализация С помощью ф-ций первого порядка, а не arrow functions
Why? 
 - Т.к. Эти ф-ции всплывают и могут быть вызваны на более высоко уровне до своего определения
 */


// amount -  стоимость авто
function baseStrategy(amount) {
    return amount;
}

function premiumStrategy(amount) {
    return amount * 0.85;
}

function planinumStrategy(amount) {
    return amount * 0.65;
}

// класс контент принимает стратегии и в зав-ти от выбранной стратегии будет рассчитываться итоговая сумма.
class AutoCard {
    constructor(discount) {
        this.discount = discount;
        this.amount =  0;
    }
    checkout() {
        return this.discount(this.amount);
    }
    setAmount(amount) {
        this.amount = amount;
    }
}

// Создадим типы клиентов  
// 50000 -  базовая стоимость авто и рассмотрим в зав-ти от выбранной стратегии
// с разными картами у которых разные стратегии

const baseCustomer = new AutoCard(baseStrategy);
const premiumCustomer = new AutoCard(premiumStrategy);
const platinumCustomer = new AutoCard(planinumStrategy);


baseCustomer.setAmount(50000);
console.log('Стоимость авто у baseCustomer: ' + baseCustomer.checkout());  // 50000

premiumCustomer.setAmount(50000);
console.log('Стоимость авто у premiumCustomer: ' + premiumCustomer.checkout());  // 42500


platinumCustomer.setAmount(50000);
console.log('Стоимость авто platinumCustomer: ' + platinumCustomer.checkout());  // 32500