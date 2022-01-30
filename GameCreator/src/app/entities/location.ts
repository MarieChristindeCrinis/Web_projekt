export interface Location {
    id: number;
    name: string;
    biome_types: Array<bioms>;
    biome_size: biomeSize;
    day_night_cycle: boolean;
    weather_cycle: boolean;
    npc_density: npcDensity;
}

export enum bioms {
    desert,
    grassland,
    tundra,
    ice,
    savanna,
    forest,
    rainforest
}

export enum npcDensity {
    low,
    normal,
    high,
    ultra_high
}

export enum biomeSize {
    small,
    normal,
    big
}