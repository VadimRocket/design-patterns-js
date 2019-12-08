/*
    Template Method (Шаблонный метод) - поведенч-й шаблон
    Определяет базовые шаги исполнения алгоритма и выполнения каждого из этих
    шагов делегирует на соответствующие методы или подклассы имеющий одинаковый интерфейс взаимодействия

    Пример из реальной жизни: Сборочный чех Автомобиля. Операции сборки 
    выполняются по определенным шагам. 
    1. В пустой кузов помещ-ся движок, электрика ходовая комплектующие. - Шаблон Сборки
    Это базовый скелет(класс) выполнения алгоритма
*/ 

// базовый Класс по сборке с опред. порядком вызова
class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
} 

// Опеделяем марки авто и насл-ся от Builder для вызова build(). Интерфейс взаимодействия тот же

class TeslaBuilder extends Builder {

    addEngine() {
        console.log( 'Add Electronic Engine');

    }

    installChassis() {
        console.log('Install Tesla Chassis');
    }

    addElectronic() {
        console.log('Add special electronic');
    }
    
    collectAccessories() {
        console.log('Collect Accessories');
    }  
};

class BmwBuilder extends Builder {
    
    addEngine() {
        console.log( 'Add Electronic Engine');
    }

    installChassis() {
        console.log('Install Bmw Chassis');
    }

    addElectronic() {
        console.log('Add special electronic');
    }
    
    collectAccessories() {
        console.log('Collect Accessories');
    }  
};

const teslaBuiler = new TeslaBuilder();
const bmwBuiler = new TeslaBuilder();

teslaBuiler.build();
/*Add Electronic Engine
 Install Tesla Chassis
 Add special electronic
 Collect Accessories*/


bmwBuiler.build();
/*
 Add Electronic Engine
 Install Tesla Chassis
 Add special electronic
 Collect Accessories
*/

// Т.о образом после запуска конвейера мы можем выполнять разные алгоритмы шаблонной последовательности
// Это паттерн определяющий шаблонное выполнение алгоритмов, имеющих одинаковый интерфейс взаимодействия, но разную внутреннюю имплементацию. 



