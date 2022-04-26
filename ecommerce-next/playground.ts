// ts recommend to use Interfaces over Types when possible

// Describe data structures in more natural way
// Describe objects
// Shipment, Orders
// interface Person {
//     name: string
//     age: number
// }

// type aliases
// to describe function types
// type Person = {
//     name: string
//     age: number
// }

type Data = string

// interface PersonLoggerFn {
//     (name: string, age: number): string
// }

type PersonLoggerFn = (name: string, age?: number) => string

// class types
class Person {
    name: string
    age: number

    /**
     *
     */
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

export default function play() {
    // const name: Data = "Trương Thanh Hải"
    // const age: number = 26

    // const person: Person = {
    //     name: "Hai Truong",
    //     age: 1996
    // }

    // function logPersonInfo(personName: string, personAge: number): string {
    //     const info = `Name: ${personName}, age: ${personAge}`
    //     console.log(info);
    //     return info
    // }

    // person: { name: string, age: number }
    // function logPersonInfo2(person: Person) {
    //     const info = `Name: ${person.name}, age: ${person.age}`
    //     console.log(info);
    //     return info
    // }

    // const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number = 0): string => {
    //     const info = `Name: ${personName}, age: ${personAge}`
    //     console.log(info);
    //     return info
    // }

    // const log: string = logPersonInfo(name)

    // const person = new Person("Hai Kute", 100)
    // logPersonInfo2(person)

    // ============================= Narrowing 
    const names: string[] = ["Filip", "John"]
    const numbers: Array<number> = [1, 2, 3, 4, 5, 6]

    const random = Math.random() > 0.5 ? "Hello" : [1, 2]

    if (typeof random === "string") {
        const upper = random.toUpperCase()
    } else {
        console.log(random);
    }

    console.log(random.length);


}