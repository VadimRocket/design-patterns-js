/*
Iterator - поведенческий паттерн который позволяет последовательно обходить элементы составных обьектов не раскрывая их внутреннее представление и не меняя самих обьектов.
Вынести поведение обхода коллекции из самой коллекции в отдельный класс, он содержит 2 метода: hasNext() и  next()
*/

class Iterator  {
    constructor(el) {
        this.index = 0;
        this.elements = el;

    }
    next() {
        return this.elements[this.index++]; // обращ-ся к n - элементу коллекции
    }

    hasNext() {
        return this.index < this.elements.length; // проверка наличия н ного элемента в коллекции
    }
}

const collection = ['BMW','AUDI','PORSHE','NISAN'];

const iter = new Iterator(collection);

while(iter.hasNext()) {
    console.log(iter.next()); // BMW  AUDI PORSHE NISAN
}


// Если с массивом обьектов то нада переписать немного наш итератор.

class Iterator2  {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);  // Формируе массив ключей с пом Object.keys(el)
        this.elements = el;

    }
    next() {
        return this.elements[this.keys[this.index++]]; // обращ-ся к n - элементу коллекции
    }

    hasNext() {
        return this.index < this.keys.length; // проверка наличия н ного элемента в коллекции
    }
}

const autos = {
    audi: { model: 'Audi', color: 'black', price: '20000'},
    bmw: { model: 'Bmw', color: 'red', price: '27000' },
    tesla: { model: 'Tesla', color: 'white', price: '54000' },
};

const interator = new Iterator2(autos);

    while(interator.hasNext()) {
        console.log(interator.next());
    }


/*
    {model: "Audi", color: "black", price: "20000"}
    {model: "Bmw", color: "red", price: "27000"}
    {model: "Tesla", color: "white", price: "54000"}
*/

/*
Итератор - замена циклу for of
Т.о мы сами задаем логику как должны перебираться коллекции в зависимости от входных условий может использоваться самая оптимальная логика перебора коллекций.
*/
