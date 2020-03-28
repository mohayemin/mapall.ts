import { mapit } from "../src/index";

class Person {
    name: string = "";
    age: number = -1;
}

describe("mapAll", () => {
    it("all properties of non-nested object should be set", () => {
        let person = mapit(Person, { name: "Toobaa", age: 2.7 });
        expect(person.name).toBe("Toobaa");
        expect(person.age).toBe(2.7);
    });
});