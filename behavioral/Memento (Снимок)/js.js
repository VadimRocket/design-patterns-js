// 17 - Memento (Снимок) - Паттерн Хранитель - Сохраняет предыдущее состояние, которое можно восстановить (Аналог CTRL + Z)

// Обьект Хранитель
class Memento {
    constructor(value) {
        this.value = value;
    }
}

// Обьект содержит логику на создание и востановление снимков  
const creator = {
    save: val => new Memento(val), // в метод save передаем текущее состояние, которое хотим сохранить, вызывая созданный конструктор Memento
     
     // Восстанавливая предыдущее сохраненное значение
     restore: memento => memento.value, // В метод restore передаем структуру, которая хранит все сохраненные состояния и обращаемся к элементу этой структуры  
}

/*
 Класс, который будет хранить все предыдущие состояния и содержать
 методы по сохранению и восстановления снимка
*/
class Caretaker {
    constructor() {
        this.values = []; // отпределяем стр данных, в которой будем хранить снимки
    }
    // делаем снимок текущих данных и сохраням его в массив
    addMomento(memento) {
        this.values.push(memento);
    }
    
    // пол-м элемент массива - востанавливая предыдущее сохраненное значение
    getMemento(index) {
        return this.values[index];
    } 
}

// создаем экземпляр хранителя
const  careTaker = new Caretaker();
// создаем и сохраняем 3 состояния в массив 
careTaker.addMomento(creator.save('hello'));
careTaker.addMomento(creator.save('hello world'));
careTaker.addMomento(creator.save('hello world!!!'));

console.log(careTaker.getMemento(1)); // Mementovalue: "hello world"__proto__: Object

