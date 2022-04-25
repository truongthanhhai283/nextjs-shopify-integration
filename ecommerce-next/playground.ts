interface Person {
    name: string
    age: number
}

// type Person = {
//     name: string
//     age: number
// }

export default function play() {
    const name: string = "Trương Thanh Hải"
    const age: number = 26

    const person: Person = {
        name: "Hai Truong",
        age: 1996
    }

    function logPersonInfo(personName: string, personAge: number) {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info);
        return info
    }

    // person: { name: string, age: number }
    function logPersonInfo2(person: Person) {
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info);
        return info
    }

    logPersonInfo(name, age)
    logPersonInfo2(person)
}