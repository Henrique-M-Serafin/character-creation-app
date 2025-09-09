type Race = "Elf" | "Dwarf" | "Halfling" | "Human" | "Dragonborn" | "Gnome" | "Half-Elf" | "Half-Orc" | "Tiefling";

export type CharacterClass = "Fighter" | "Wizard" | "Rogue" | "Cleric" | "Ranger" | "Paladin" | "Bard" | "Druid" | "Monk" | "Warlock" | "Sorcerer" | "Barbarian" | "Artificer";

type Background = "Acolyte" | "Charlatan" | "Criminal" | "Entertainer" | "Folk Hero" | "Guild Artisan" | "Hermit" | "Noble" | "Outlander" | "Sage" | "Sailor" | "Soldier" | "Urchin";

export interface Character {
    id: string;
    name: string;
    class: CharacterClass;
    race: Race;
    background: Background;
    alignment: string;
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
}