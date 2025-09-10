export function calculateSpeed(characterRace: string) {
    const speedTable: Record<string, number> = {
      "Dragonborn": 30,
      "Dwarf": 25,
      "Elf": 30,
      "Gnome": 25,
      "Halfling": 25,
      "Half-Elf": 30,
      "Half-Orc": 30,
      "Human": 30,
      "Tiefling": 30,
    };

    const speedValue = speedTable[characterRace] || 30;
    return { speed: speedValue };
}

export function calculateHP(characterClass: string) {
    const HPTable: Record<string, number> = {
      "Barbarian": 12,
      "Fighter": 10,
      "Paladin": 10,
      "Ranger": 10,
      "Cleric": 8,
      "Druid": 8,
      "Monk": 8,
      "Rogue": 8,
      "Bard": 8,
      "Warlock": 8,
      "Sorceress": 6,
      "Wizard": 6,
      "Artificer": 8,
    };

    const HPvalue = HPTable[characterClass] || 8;
    return { HP: HPvalue };
  }

export function calculateModifier(attributeValue: number) {
  const mod = Math.floor((attributeValue - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}