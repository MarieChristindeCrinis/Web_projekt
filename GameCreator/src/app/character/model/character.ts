export class Character
{
    id: string;
    name: string;
    race: Race;
    backstory: string;
    age: number | null;
    weight: number | null;
    level: number | null;

    constructor(
        id: string,
        name: string,
        race: Race,
        backstory: string,
        age: number | null,
        weight: number | null,
        level: number | null
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

export const Race2LabelMapping: Record<Race, string> = {
    [Race.Elve]: "Elve",
    [Race.Human]: "Human",
    [Race.Dwarf]: "Dwarf",
    [Race.Dragonkin]: "Dragonkin"
}