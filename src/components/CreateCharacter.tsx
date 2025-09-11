import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "../../public/Logo.png";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NumericFormat } from "react-number-format";
import { validateAttributes } from "@/lib/validateAttributes";
import { toast } from "sonner";
import { characterService } from "@/api/api";
import {
  calculateHP,
  calculateModifier,
  calculateSpeed,
} from "@/lib/calculateStats";
import { CLASS_EQUIPMENT } from "@/data/classes";
import type { Character } from "@/types";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { charactersState } from "@/state/atom";

interface Props {
  character?: Character; // se existir, estamos editando
  onClose: () => void; // fecha o modal

}

export function CreateCharacter({ character, onClose }: Props) {

    const [_, setCharacters] = useRecoilState(charactersState);
    const isEditing = !!character?.id;
  
    const [formData, setFormData] = useState<Character>({
    id: character?.id,
    name: character?.name || "",
    class: character?.class || "",
    race: character?.race || "",
    background: character?.background || "",
    alignment: character?.alignment || "",
    speed: character?.speed || 0,
    HP: character?.HP || 0,
    attributes: character?.attributes || {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    equipment: character?.equipment || [],
    spells: character?.spells || [],
    backstory: character?.backstory || "",
    image: character?.image || "",
    createdAt: character?.createdAt || new Date().toISOString(),
  });
  

  function resetForm() {
    setFormData({
      name: "",
      race: "",
      class: "",
      background: "",
      alignment: "",
      HP: 0,
      speed: 0,
      attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      equipment: [],
      spells: [],
      backstory: "",
      image: "",
      createdAt: "",
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      // Validate attributes before submission
      const validation = validateAttributes(formData.attributes);
      if (!validation.valid) {
        const message = validation.reason;
        toast(message);
        return;
      }
      // Add createdAt timestamp
      const characterToSubmit = {
        ...formData,
        createdAt: new Date().toISOString(),
        image: `/characterImages/${formData.class}.png`,
      };

      if (isEditing && formData.id) {
        const updated = await characterService.updateCharacter(
          formData.id,
          characterToSubmit
        );
        toast.success("Character updated successfully!");

        // Atualiza o estado global
        setCharacters(prev =>
          prev.map(c => (c.id === updated.id ? updated : c))
        );

        onClose?.();
      } else {
        const created = await characterService.createCharacter(characterToSubmit);
        toast.success("Character created successfully!");

        // Adiciona ao estado global
        setCharacters(prev => [...prev, created]);
        resetForm();
      }
    } catch (error) {
      toast.error("An error occurred while creating the character.");
      console.error("Submission error:", error);
    }
  }

  return (
    <div className=" rounded-2xl border-1 border-primary dark:border-primary p-2 bg-card dark:bg-card">
      <form className="" onSubmit={handleSubmit}>
        <section className="flex flex-col lg:flex-row items-center justify-between gap-2 mb-2">
          <div className="flex gap-2 items-center">
            <img src={logo} className="h-24 w-24" alt="Logo" />
            <div className="">
              <Label htmlFor="character-name" className="mb-2 dark:text-foreground">
                Name
              </Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                autoComplete="off"
                id="character-name"
                className=" dark:bg-input dark:text-foreground dark:border-border"
                placeholder="Choose your name"
              />
            </div>
          </div>
          <div id="character-details" className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="character-race" className="mb-2 dark:text-foreground">
                Race
              </Label>
              <Select
                value={formData.race}
                onValueChange={(value) => {
                  const { speed } = calculateSpeed(value);
                  setFormData({
                    ...formData,
                    race: value,
                    speed,
                  });
                }}
              >
                <SelectTrigger className="w-[180px] dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectValue placeholder="Select a race" />
                </SelectTrigger>
                <SelectContent className="dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectItem value="Dragonborn">Dragonborn</SelectItem>
                  <SelectItem value="Dwarf">Dwarf</SelectItem>
                  <SelectItem value="Elf">Elf</SelectItem>
                  <SelectItem value="Gnome">Gnome</SelectItem>
                  <SelectItem value="Halfling">Halfling</SelectItem>
                  <SelectItem value="Half-Elf">Half-Elf</SelectItem>
                  <SelectItem value="Half-Orc">Half-Orc</SelectItem>
                  <SelectItem value="Human">Human</SelectItem>
                  <SelectItem value="Tiefling">Tiefling</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="character-class" className="mb-2 dark:text-foreground">
                Class
              </Label>
              <Select
                value={formData.class}
                onValueChange={(value) => {
                  const { HP } = calculateHP(value);

                  const fixedItems =
                    CLASS_EQUIPMENT[value]
                      ?.filter((item) => item.type === "fixed")
                      .flatMap((item) => item.items) || [];

                  setFormData((prev) => ({
                    ...prev,
                    class: value,
                    HP,
                    equipment: [...fixedItems],
                  }));
                }}
              >
                <SelectTrigger className="w-[180px] dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent className="dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectItem value="Artificer">Artificer</SelectItem>
                  <SelectItem value="Barbarian">Barbarian</SelectItem>
                  <SelectItem value="Bard">Bard</SelectItem>
                  <SelectItem value="Cleric">Cleric</SelectItem>
                  <SelectItem value="Druid">Druid</SelectItem>
                  <SelectItem value="Fighter">Fighter</SelectItem>
                  <SelectItem value="Monk">Monk</SelectItem>
                  <SelectItem value="Paladin">Paladin</SelectItem>
                  <SelectItem value="Ranger">Ranger</SelectItem>
                  <SelectItem value="Rogue">Rogue</SelectItem>
                  <SelectItem value="Sorceress">Sorcerer</SelectItem>
                  <SelectItem value="Warlock">Warlock</SelectItem>
                  <SelectItem value="Wizard">Wizard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="character-background" className="mb-2 dark:text-foreground">
                Background
              </Label>
              <Select
                value={formData.background}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    background: value,
                  });
                }}
              >
                <SelectTrigger className="w-[180px] dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectValue placeholder="Select a background" />
                </SelectTrigger>
                <SelectContent className="dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectItem value="Acolyte">Acolyte</SelectItem>
                  <SelectItem value="Charlatan">Charlatan</SelectItem>
                  <SelectItem value="Criminal">Criminal</SelectItem>
                  <SelectItem value="Entertainer">Entertainer</SelectItem>
                  <SelectItem value="FolkHero">Folk Hero</SelectItem>
                  <SelectItem value="GuildArtisan">Guild Artisan</SelectItem>
                  <SelectItem value="Hermit">Hermit</SelectItem>
                  <SelectItem value="Noble">Noble</SelectItem>
                  <SelectItem value="Outlander">Outlander</SelectItem>
                  <SelectItem value="Sage">Sage</SelectItem>
                  <SelectItem value="Sailor">Sailor</SelectItem>
                  <SelectItem value="Soldier">Soldier</SelectItem>
                  <SelectItem value="Urchin">Urchin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="character-alignment" className="mb-2 dark:text-foreground">
                Alignment
              </Label>
              <Select
                value={formData.alignment}
                onValueChange={(value) => {
                  setFormData({
                    ...formData,
                    alignment: value,
                  });
                }}
              >
                <SelectTrigger className="w-[180px] dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectValue placeholder="Select the alignment" />
                </SelectTrigger>
                <SelectContent className="dark:bg-popover dark:text-foreground dark:border-border">
                  <SelectItem value="CE">Chaotic Evil (CE)</SelectItem>
                  <SelectItem value="CG">Chaotic Good (CG)</SelectItem>
                  <SelectItem value="CN">Chaotic Neutral (CN)</SelectItem>
                  <SelectItem value="LE">Lawful Evil (LE)</SelectItem>
                  <SelectItem value="LG">Lawful Good (LG)</SelectItem>
                  <SelectItem value="LN">Lawful Neutral (LN)</SelectItem>
                  <SelectItem value="NE">Neutral Evil (NE)</SelectItem>
                  <SelectItem value="TN">True Neutral (TN)</SelectItem>
                  <SelectItem value="NG">Neutral Good (NG)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-2">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold mb-2 dark:text-foreground">Attributes</h2>
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <Label htmlFor="character-str" className="font-semibold dark:text-foreground">
                Strength (STR)
              </Label>
              <p className="dark:text-muted-foreground">{calculateModifier(formData.attributes.strength)}</p>
              <NumericFormat
                autoComplete="off"
                value={formData.attributes.strength}
                onValueChange={({ floatValue }) => {
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      strength: floatValue || 0,
                    },
                  });
                }}
                className="w-14 h-14 text-center rounded-md border-primary dark:border-primary border-1 dark:bg-input dark:text-foreground"
                id="character-str"
                placeholder="STR"
              />
            </div>
            <Separator />
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <Label htmlFor="character-dex" className="font-semibold dark:text-foreground">
                Dexterity (DEX)
              </Label>
              <p className="dark:text-muted-foreground">{calculateModifier(formData.attributes.dexterity)}</p>
              <NumericFormat
                autoComplete="off"
                value={formData.attributes.dexterity}
                onValueChange={({ floatValue }) => {
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      dexterity: floatValue || 0,
                    },
                  });
                }}
                className="w-14 h-14 text-center rounded-md border-primary dark:border-primary border-1 dark:bg-input dark:text-foreground"
                id="character-dex"
                placeholder="DEX"
              />
            </div>
            <Separator />
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <Label htmlFor="character-con" className="font-semibold dark:text-foreground">
                Constitution (CON)
              </Label>
              <p className="dark:text-muted-foreground">{calculateModifier(formData.attributes.constitution)}</p>
              <NumericFormat
                autoComplete="off"
                value={formData.attributes.constitution}
                onValueChange={({ floatValue }) => {
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      constitution: floatValue || 0,
                    },
                  });
                }}
                className="w-14 h-14 text-center rounded-md border-primary dark:border-primary border-1 dark:bg-input dark:text-foreground"
                id="character-con"
                placeholder="CON"
              />
            </div>
            <Separator />
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <Label htmlFor="character-int" className="font-semibold dark:text-foreground">
                Intelligence (INT)
              </Label>
              <p className="dark:text-muted-foreground">{calculateModifier(formData.attributes.intelligence)}</p>
              <NumericFormat
                autoComplete="off"
                value={formData.attributes.intelligence}
                onValueChange={({ floatValue }) => {
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      intelligence: floatValue || 0,
                    },
                  });
                }}
                className="w-14 h-14 text-center rounded-md border-primary dark:border-primary border-1 dark:bg-input dark:text-foreground"
                id="character-int"
                placeholder="INT"
              />
            </div>
            <Separator />
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <Label htmlFor="character-wis" className="font-semibold dark:text-foreground">
                Wisdom (WIS)
              </Label>
              <p className="dark:text-muted-foreground">{calculateModifier(formData.attributes.wisdom)}</p>
              <NumericFormat
                autoComplete="off"
                value={formData.attributes.wisdom}
                onValueChange={({ floatValue }) => {
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      wisdom: floatValue || 0,
                    },
                  });
                }}
                className="w-14 h-14 text-center rounded-md border-primary dark:border-primary border-1 dark:bg-input dark:text-foreground"
                id="character-wis"
                placeholder="WIS"
              />
            </div>
            <Separator />
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <Label htmlFor="character-cha" className="font-semibold dark:text-foreground">
                Charisma (CHA)
              </Label>
              <p className="dark:text-muted-foreground">{calculateModifier(formData.attributes.charisma)}</p>
              <NumericFormat
                autoComplete="off"
                value={formData.attributes.charisma}
                onValueChange={({ floatValue }) => {
                  setFormData({
                    ...formData,
                    attributes: {
                      ...formData.attributes,
                      charisma: floatValue || 0,
                    },
                  });
                }}
                className="w-14 h-14 text-center rounded-md border-primary dark:border-primary border-1 dark:bg-input dark:text-foreground"
                id="character-cha"
                placeholder="CHA"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between items-center">
              {/* <div>
                <h3 className="font-semibold mb-2 dark:text-foreground">CA</h3>
                <Input
                  disabled={true}
                  className="text-center w-12 h-12 dark:bg-muted dark:text-muted-foreground"
                ></Input>
              </div> */}
              
              <div>
                <h3 className="font-semibold mb-2 dark:text-foreground">HP</h3>
                <Input
                  value={formData.HP}
                  disabled={true}
                  className="text-center w-12 h-12 dark:bg-muted dark:text-foreground"
                ></Input>
              </div>
              <Separator orientation="vertical" className="bg-primary dark:bg-primary" />
              <div>
                <h3 className="font-semibold mb-2 dark:text-foreground">Speed</h3>
                <Input
                  value={formData.speed}
                  disabled={true}
                  className="text-center w-12 h-12 dark:bg-muted dark:text-foreground"
                ></Input>
              </div>
              
            </div>
            <Separator orientation="horizontal" className="bg-primary dark:bg-primary" />
            <div className="flex flex-row-reverse gap-2 justify-end items-center">
              <Label htmlFor="proficiency" className="dark:text-foreground">Proficiency Bonus</Label>
              <Input
                disabled={true}
                placeholder="+2"
                className="w-12 h-12 text-center dark:bg-muted dark:text-muted-foreground"
                id="proficiency"
              ></Input>
            </div>
            <div className="flex flex-row-reverse gap-2 justify-end items-center">
              <Label htmlFor="perception" className="dark:text-foreground">Passive Perception</Label>
              <Input
                value={
                  10 +
                  (formData.attributes.wisdom
                    ? Math.floor((formData.attributes.wisdom - 10) / 2)
                    : 0)
                }
                disabled={true}
                className="w-12 h-12 text-center dark:bg-muted dark:text-foreground"
                id="perception"
              ></Input>
            </div>
            <Separator orientation="horizontal" className="bg-primary dark:bg-primary" />
            <div className="flex flex-col h-full gap-0.5">
              <h3 className="font-semibold mb-2 dark:text-foreground">Equipment</h3>
              {CLASS_EQUIPMENT[formData.class]?.map((item, index) => (
                <div key={index} className="">
                  {item.type === "choice" ? (
                    <Select
                      value={
                        formData.equipment?.find((e) =>
                          item.items.includes(e)
                        ) || ""
                      }
                      onValueChange={(value) => {
                        const chosen = value;
                        setFormData((prev) => ({
                          ...formData,
                          equipment: [
                            ...(prev.equipment || []).filter(
                              (e) => !item.items.includes(e)
                            ),
                            chosen,
                          ],
                        }));
                      }}
                    >
                      <SelectTrigger className="w-full dark:bg-popover dark:text-foreground dark:border-border">
                        <SelectValue placeholder="Make a choice" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-popover dark:text-foreground dark:border-border">
                        {item.items.map((option, idx) => (
                          <SelectItem key={idx} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <div>
                      {item.items.map((option, idx) => (
                        <div key={idx} className="dark:text-foreground">{option}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2 dark:text-foreground">History</h3>
            <Textarea
                value={formData.backstory}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  backstory: e.target.value,
                })
              }
              className="min-h-48 lg:w-full lg:h-full border-primary dark:border-primary rounded-md p-2 dark:bg-input dark:text-foreground"
              placeholder="Write your character's history here..."
            ></Textarea>
          </div>
        </section>
        <Button className="w-full dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">{isEditing ? "Update Character" : "Create Character"}</Button>
      </form>
    </div>
  );
}
