/*
Observer (Наблюдатель) - поведенческий паттерн который создает механизм подписки
	позв-й 1 объектам следить за изменениями других объектов.

Usage: Хранить данные от которых зависит несколько компонентов в 1 объекте или классе.
Он играет роль хранителя(store). У него есть определённые свойства от изменения которых 
зависит логика определенных компонентов. Он содержит список этих зависящих компонентов (Подписчиков)
Также у этого класса есть методы, с помощью которых можно изменять наблюдаемые свойства
и методы, которые оповещают о том, что свойство изменилось и на это нужно отреагировать.

Пример: подписка на новостные ленты ресурса после регистрации на сайте.

*/

// класс, за изменениями которого следят и реагируют
class AutoNews {
  
	constructor() {
		this.news = '';    //  свойство для новости
		this.actions = []; // массив подписчиков 
	}

	setNews(text) {
		this.news = text;
		this.notifyAll();
	}
    // метод оповешения
	notifyAll() {
		return this.actions.forEach(subs => subs.inform(this));
	}
	// подписка наблюдателя
	register(observer) {
		this.actions.push(observer);
	}

	unregister(observer) {
		this.actions = this.actions.filter(el => !(el instanceof observer));
	}
};

class Jack {
	inform(message) {
		console.log(`Jack has been informed about: ${message.news}`);
	}
};

class Max {
	inform(message) {
		console.log(`Max has been informed about: ${message.news}`);
	}
};

const autoNews  = new AutoNews();

// подпиываем 2 наблюдателей
autoNews.register(new Jack());
autoNews.register(new Max());

autoNews.setNews('New Audi price is 30000')