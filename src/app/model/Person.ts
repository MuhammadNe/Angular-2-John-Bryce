export class Person {
    private firtName: String;
    private lastName: String;
    private age: number;
    private gender: GednderDef;
    private imageUrl: String;

    set FirstName(firstName: String) {
        this.firtName = firstName;
    }
    get FirstName(): String {
        return this.firtName;
    }
    set LastName(lastName: String) {
        this.lastName = lastName;
    }
    get LastName(): String {
        return this.lastName;
    }
    set Age(age: number) {
        this.age = age;
    }
    get Age(): number {
        return this.age;
    }
    set Gender(g: GednderDef) {
        this.gender = g;
    }
    get Gender(): GednderDef {
        return this.gender;
    }
    set ImageUrl(imageUrl: String) {
        this.imageUrl = imageUrl;
    }
    get ImageUrl(): String {
        return this.imageUrl;
    }
}

export enum GednderDef {
    male, female
}
