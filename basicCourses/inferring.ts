
interface Person {
    name: string
    age: number
}

// 1. Single from Array type
// type SingleType<T> = T extends any[] ? T[number] : T

// 2. Array index type
// type CustomArray<T> = {
//     [index: number]: T
// }

// 3. Mapped types
// type Car<T> = {
//     [index: number]: T
// }

// type CustomObject<T = number | string | Person> = {
//     [key: string]: T
// }

// 5. Infer keyword
// type ReturnType<T> = T extends () => infer R ? R : unknown

// 6. Keyof
// type PersonKey = keyof Person

// 7. multiple generic params
// type Logger1<FP = string, SP = number, RT = string> = (param1: FP, params2: SP) => RT
// type Logger2<T, E, R> = (param1: T, params2: E) => R

// 8. Return type of Promise


export default async function testInferring() {

    // 1. Single from Array types
    // type Type1 = SingleType<string[]>
    // type Type2 = SingleType<string[]>
    // type Type3 = SingleType<Person>
    // type Type4 = string[][number]

    // 2. CUstom array
    // const items: CustomArray<string> = ["1", "2", "3"]
    // const items2: CustomArray<number> = [1, 2, 3, 4]

    // 3. Mapped Types
    // const person: CustomObject = {
    //     "age": 23,
    //     "name": "abc",
    //     "city": "DN",
    //     person: {
    //         name: "Hai",
    //         age: 26
    //     }
    // }

    // 4. typeof
    // function logger(...args: any[]) {
    //     // function logger() {
    //     return "Hello World"
    // }

    // const kindLogger: typeof logger = (name: string, age: number) => "Hi Guys!"

    // const person = {
    //     name: "Hai",
    //     age: 26
    // }

    // const person2: typeof person = {
    //     name: "Truong",
    //     age: 30
    // }

    // kindLogger("", 26)

    // 5. infer keyword
    // function logger() {
    //     return true
    // }
    // const loggerReturn: ReturnType<typeof logger> = true

    // 6. Keyof
    // const personKey: keyof Person = "name"

    // 7. multiple generic params
    // const supperLogger: Logger2<string, number, string> = (name, age) => {
    //     return "Hello World"
    // }

    // const logger: Logger1 = (brand, age) => {
    //     return brand + age
    // }

    // 8. Return type of Promise
    type Greeting = { message: string }
    type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }> ? Props : never

    const getHelloProps = async function () {

        const greeting: Greeting = { message: "Hai" }

        return {
            props: {
                greeting,
                data: {
                    cars: ["Car1", "Car2"]
                }
            }
        }

    }

    function sayHello(props: InferHelloProps<typeof getHelloProps>) {
        console.log(props.greeting);
    }

    const data = await getHelloProps()
    sayHello(data.props)
}