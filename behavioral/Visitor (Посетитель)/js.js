/*
19 - Visitor (Посетитель)

Добавляет новую ф-циональность к уже существующим классам не изменяя исходный 
код классов. Т.е. 
Он расширяет функциональность класса, не изменяя его первоначальную организацию.
Ситуации использования: Спектр большой так как расширение программы идет постоянно
Когда нужно добавить нужную ф-циональность не изменяя классы
*/

// Пример
// Классы с устоявшейся структурой

class Auto {
    accept(visitor) { // отсущ-т связь класса с внешним миром.
        visitor(this); // передает посетителю контекст вызова класса.
    }
}


class Tesla extends Auto{
    info() {
        return 'It is a Tesla car';
    }
    
}

class Bmw extends Auto{
    info() {
        return 'It is a Bmw car';
    }
    
}

class Audi extends Auto {
    info() {
        return 'It is a Audi car';
    }
}

// Посетитель -  ф-ция которая на основании контекта  определяя его с пом-ю 
// instanceof задает в обьекте метод export в котором описана имплементация экспортирования данных
function exportVisitor(auto) {
    if( auto instanceof Tesla ) {
        auto.export = console.log(`Exported data ${auto.info()}`);
    }
    if( auto instanceof Bmw ) {
        auto.export = console.log(`Exported data ${auto.info()}`);
    }
    if( auto instanceof Audi ) {
        auto.export = console.log(`Exported data ${auto.info()}`);
    }
}

const tesla = new Tesla();
const bmw = new Bmw();

// с помощью патерна посетитель добавили метод  exportVisitor и вызвали его получив соотв рез-т в консоль.
console.log(tesla.accept(exportVisitor));
console.log(bmw.accept(exportVisitor));