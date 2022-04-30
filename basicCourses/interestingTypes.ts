
interface Person {
    name: string
    age: number
}

interface Person {
    prop1: string
    prop2: string
}

type Car = {
    name: string
    speed: number
}

type CityCar = {
    name: string
    maxSpeed: 200
    team: string
}

type RaceCar = {
    speed: number
} & Car & {
    mileage: number
    maxSpeed: 100
}

type SUVCar = {
    name: string
    isCarbonFree: boolean
    maxSpeed: 150
}

type CarInfo = RaceCar | CityCar | SUVCar

// void type
type Noop = () => any
type Noop2 = () => void

export default function InterestingTypes() {

    // 1. declare merging 2 props interface person
    const person: Person = {
        name: "Hai",
        age: 26,
        prop1: "prop1",
        prop2: "prop2"
    }

    function logCar(car: CarInfo) {
        switch (car.maxSpeed) {
            case 200:
                console.log(car.team);
                break;
            case 100:
                console.log(car.maxSpeed);
                break;

            //2. never usage
            case 150:
                console.log(car.isCarbonFree);
                break
            default:
                //3. never usage
                const _never: never = car
                return _never
        }
    }

    // 3. Generic Object types -> string | boolean | ......
    // 4. Unknown types : unknown
    function printInfo(someObject: { [key: string]: unknown }) {
        // fix error Object is of type 'unknown' using typeof
        if (typeof someObject.age === "string") {
            someObject.age.toUpperCase()
        }
    }

    printInfo({
        name: "ABC",
        isClose: true
    })

    // 5. void type
    function sayHi1(x: Noop): void {
        const rs = x()
        rs()
    }

    function sayHi2(x: Noop2): void {
        const rs = x()
        rs()
    }

}