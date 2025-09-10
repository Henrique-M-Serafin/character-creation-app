export type EquipmentOption = {
  type: "choice" | "fixed";
  items: string[];
};

export const CLASS_EQUIPMENT: Record<string, EquipmentOption[]> = {
  Barbarian: [
    { type: "choice", items: ["Greataxe", "Any martial melee weapon"] },
    { type: "choice", items: ["Two handaxes", "Any simple weapon"] },
    { type: "fixed", items: ["Explorer's pack", "Four javelins"] },
  ],

  Bard: [
    { type: "choice", items: ["Rapier", "Longsword", "Any simple weapon"] },
    { type: "choice", items: ["Diplomat's pack", "Entertainer's pack"] },
    { type: "choice", items: ["Lute", "Any other musical instrument"] },
    { type: "fixed", items: ["Leather armor", "Dagger"] },
  ],

  Cleric: [
    { type: "choice", items: ["Mace", "Warhammer (if proficient)"] },
    { type: "choice", items: ["Scale mail", "Leather armor", "Chain mail (if proficient)"] },
    { type: "choice", items: ["Light crossbow and 20 bolts", "Any simple weapon"] },
    { type: "choice", items: ["Priest's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Shield", "Holy symbol"] },
  ],

  Druid: [
    { type: "choice", items: ["Wooden shield", "Any simple weapon"] },
    { type: "choice", items: ["Scimitar", "Any simple melee weapon"] },
    { type: "fixed", items: ["Leather armor", "Explorer's pack", "Druidic focus"] },
  ],

  Fighter: [
    { type: "choice", items: ["Chain mail", "Leather armor, longbow, and 20 arrows"] },
    { type: "choice", items: ["Martial weapon and a shield", "Two martial weapons"] },
    { type: "choice", items: ["Light crossbow and 20 bolts", "Two handaxes"] },
    { type: "choice", items: ["Dungeoneer's pack", "Explorer's pack"] },
  ],

  Monk: [
    { type: "choice", items: ["Shortsword", "Any simple weapon"] },
    { type: "choice", items: ["Dungeoneer's pack", "Explorer's pack"] },
    { type: "fixed", items: ["10 darts"] },
  ],

  Paladin: [
    { type: "choice", items: ["Martial weapon and a shield", "Two martial weapons"] },
    { type: "choice", items: ["Five javelins", "Any simple melee weapon"] },
    { type: "choice", items: ["Priest's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Chain mail", "Holy symbol"] },
  ],

  Ranger: [
    { type: "choice", items: ["Scale mail", "Leather armor"] },
    { type: "choice", items: ["Two shortswords", "Two simple melee weapons"] },
    { type: "choice", items: ["Dungeoneer's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Longbow", "Quiver of 20 arrows"] },
  ],

  Rogue: [
    { type: "choice", items: ["Rapier", "Shortsword"] },
    { type: "choice", items: ["Shortbow and quiver of 20 arrows", "Shortsword"] },
    { type: "choice", items: ["Burglar's pack", "Dungeoneer's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Leather armor", "Two daggers", "Thieves' tools"] },
  ],

  Sorceress: [
    { type: "choice", items: ["Light crossbow and 20 bolts", "Any simple weapon"] },
    { type: "choice", items: ["Component pouch", "Arcane focus"] },
    { type: "choice", items: ["Dungeoneer's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Two daggers"] },
  ],

  Warlock: [
    { type: "choice", items: ["Light crossbow and 20 bolts", "Any simple weapon"] },
    { type: "choice", items: ["Component pouch", "Arcane focus"] },
    { type: "choice", items: ["Scholar's pack", "Dungeoneer's pack"] },
    { type: "fixed", items: ["Leather armor", "Any simple weapon", "Two daggers"] },
  ],

  Wizard: [
    { type: "choice", items: ["Quarterstaff", "Dagger"] },
    { type: "choice", items: ["Component pouch", "Arcane focus"] },
    { type: "choice", items: ["Scholar's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Spellbook"] },
  ],

  Artificer: [
    { type: "choice", items: ["Light crossbow and 20 bolts", "Any simple weapon"] },
    { type: "choice", items: ["Studded leather armor", "Scale mail"] },
    { type: "choice", items: ["Dungeoneer's pack", "Explorer's pack"] },
    { type: "fixed", items: ["Thieves' tools", "Arcane focus"] },
  ],
};
