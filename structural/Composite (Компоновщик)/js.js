/*
10 - Composite (Компоновщик) - Структурный п. проектирования кот-й
   позвол-т сгруппировать множество объектов в древовидную структуру
   и работать с ней как будто это 1 единственный объект.
   Ключевая структура паттерна - дерево
   Объект со специфическим интерфейсом. Особенность данного интерфейса в том
   что мало что знает о вложенных в него структурах. он реализует те же методы 
   что и вложенные в него компоненты. Но вместо вызова своего метода он передает вызовы
   всем вложенным компонентам. А те компоненты в свою очередь передают эти вызовы в 
   собственные вложенные структуры. Т.е. один исходный класс содержит компоненты
   которые в свою очередь так же сод-т компоненты - древовидная структура. 
   Все вложенные компоненты - листья. Связи между ними - ветки.
   Особенность этого паттерна - единый интерфейс вызова.
   В самом корневом компоненте никаких действий не происходит
   вызовы он делегирует во все вложенные компоненты по цепочке
   и методы вызываются непосредственно в каждом из них.
*/
 
 /* 
   Реализация 
	Подсчитаем Себестоимость (сумма всех составных частей) авто перед продажей
 */

// 1 Базовый интерфейс для запчастей, к-й создаст объекты с единым интерфейсом взаимодействия
class Equipment {

	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
}

// задаем каждому имя и цену, формир-м набор однотипных обьектов
class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(800);
	}
};

class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(2999);
	}
};

class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(3555);
	}
};

// Компоновщик просчит-й общую стоимость оборудования
class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}
	// add equipment to the car
	add(equipment) {
		this.equipments.push(equipment); 
	}

	// берет массив добавленного оборудования вызывает getPrice. У каждого появл-ся массив цен и т.д
	getPrice() {
		return this.equipments
			.map(equipment => equipment.getPrice())
			.reduce((a, b) => a + b);
	}
};

class Car extends Composite {
	constructor() {
		super();
		this.setName("BMW");
	}
};

const car = new Car();

car.add(new Engine());
car.add(new Body());
car.add(new Tools());

console.log(`${car.getName()} price is ${car.getPrice()}$`); // BMW price is 7354$