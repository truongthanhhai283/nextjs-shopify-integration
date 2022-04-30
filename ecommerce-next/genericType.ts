
type Person = {
    name: string
    age: number
    city: string
}

// 3. Generic extends
class Student implements Person {
    name = ""
    age = 26
    city = "Da Nang"
}

// interface Car {
//     name: string
// }

// 2. Custom type generic
// class Logger<T> {
//     log(items: Array<T>, callback: (i: T) => void) {
//         items.forEach((item) => {
//             callback(item)
//         })
//     }
// }

// 3. generic extension
// class Logger<T extends Person> {
//     log(items: Array<T>, callback: (i: T) => void) {
//         items.forEach((item) => {
//             callback(item)
//         })
//     }
// }

// 3. generic extension
// class BusinessPerson implements Person {
//     name = ""
//     age = 26
//     city = "Da Nang"
//     salary = 10000
// }


// 4. Default value generic
// type Car = {
//     brand: string,
//     age: number,
//     name: string
//     city: string
// }

// 4. Default value generic
// class Logger<T extends Person = Car> {
//     log(items: Array<T>, callback: (i: T) => void) {
//         items.forEach((item) => {
//             callback(item)
//         })
//     }
// }

// 5. Generic type extensions
// interface PostGraduadeStudent extends Person {
//     age: number
//     projects: string[]
// }

// 5. Generic type extensions
// interface Student extends Person {
//     age: number
// }

// 5. Generic type extensions
// type StudentInfo<T extends Student = Student> = {
//     data: T
//     grades: number[]
// }

// 5. Generic type extensions
// interface StudentInfo<T extends Student = Student> {
//     data: T
//     grades: number[]
// }


// 6. Ternary type extensions
type Car = { engine: string }

// 6. Ternary type extensions
type StudentInfo<T extends any = Student> = T extends Student ? {
    data: T
    grades: number[]
} : string

export default function testGenericType() {

    // 1. Array generic
    // function iterate(items: Array<string>) {
    //     items.forEach((item) => {
    //         console.log(item);
    //     })
    // }

    // 2. Custom generic type
    // const logger = new Logger<string>()
    // const cars = ["BMW", "TOYOTA"]
    // logger.log(cars, (car) => {
    //     console.log(car);
    // })

    // 2. Custom generic type
    // const logger2 = new Logger<number>()
    // const numbers = [6, 9]
    // logger2.log(numbers, (number) => {
    //     console.log(number);
    // })

    // 2. Custom generic type
    // const logger3 = new Logger<Person>()
    // const persons = [{ name: "Hai", age: 30 }, { name: "John", age: 25 }]
    // logger3.log(persons, (number) => {
    //     console.log(number);
    // })

    // 3. generic extension
    // const logger4 = new Logger<BusinessPerson>()
    // const cars = [{ name: "Hai", age: 30, city: "Da Nang" }, { name: "John", age: 25, city: "Da Nang" }]
    // logger4.log(cars, (car) => {
    //     console.log(car);
    // })

    // 4. Default of generic
    // const logger5 = new Logger()
    // const cars = [{ name: "Hai", age: 30, city: "Da Nang", brand: "oke" }, { name: "John", age: 25, city: "Da Nang", brand: "oke" }]
    // logger5.log(cars, (car) => {
    //     console.log(car);
    // })

    // 5. Generic type extension
    // function logStudentInfo(info: StudentInfo<PostGraduadeStudent>) {
    //     console.log(info.data.age);
    //     console.log(info.data.name);
    //     console.log(info.data.projects);

    // }

    const info = {
        data: {
            age: 26,
            name: "Hai",
            city: "Da Nang"
        },
        grades: [1, 2, 3]
    }
    logStudentInfo(info)

    // 6. Ternary Generic
    function logStudentInfo(info: StudentInfo<Student>) {
        console.log(info.data);
        console.log(info.data)
    }
}