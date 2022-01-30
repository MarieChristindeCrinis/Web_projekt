import { Guid } from "guid-typescript"

export class Character
{
    id: Guid;
    name: string;
    race: Race;
    backstory: string;
    age: number;
    weight: number;
    level: number;

    constructor(
        id: Guid,
        name: string,
        race: Race,
        backstory: string,
        age: number,
        weight: number,
        level: number
    ) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.backstory = backstory;
        this.age = age;
        this.weight = weight;
        this.level = level;
    }
}


export enum Race
{
    Elve,
    Human,
    Dwarf,
    Dragonkin
}