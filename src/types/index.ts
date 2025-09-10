export interface Character {
    id?: string;
    name: string;
    class: string;
    race: string;
    background: string;
    alignment: string;
    speed: number;
    HP: number;
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    equipment: string[];
    spells: string[];
    backstory: string;
    image: string;
    createdAt: string;
}