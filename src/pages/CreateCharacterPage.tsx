import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "../../public/Logo.png";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CreateCharacterPage() {
    return (
        <>
        <div className="flex flex-col gap-2 mb-4">
            <h1 className="font-bold text-2xl">Create your character!</h1>
            <p className="text-muted-foreground">Please fill out the form below to create your character.</p>
        </div>
        <main>
            <div className="h-full m-auto w-3xl rounded-2xl border-1 border-primary p-2 bg-card">
                 <form action="">
                    <section className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex gap-2 items-center">
                            <img src={logo} className="h-24 w-24" alt="Logo" />
                            <div className="">
                                <Label htmlFor="character-name" className="mb-2">Name</Label>
                                <Input id="character-name" className="" placeholder="Choose your name" />
                            </div>
                        </div>
                        <div id="character-details" className="grid grid-cols-2 gap-4">
                            <div className="">
                                <Label htmlFor="character-race" className="mb-2">Race</Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a race" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dragonborn">Dragonborn</SelectItem>
                                        <SelectItem value="dwarf">Dwarf</SelectItem>
                                        <SelectItem value="elf">Elf</SelectItem>
                                        <SelectItem value="gnome">Gnome</SelectItem>
                                        <SelectItem value="halfling">Halfling</SelectItem>
                                        <SelectItem value="halfElf">Half-Elf</SelectItem>
                                        <SelectItem value="halfOrc">Half-Orc</SelectItem>
                                        <SelectItem value="human">Human</SelectItem>
                                        <SelectItem value="tiefling">Tiefling</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="">
                                <Label htmlFor="character-class" className="mb-2">Class</Label>
                                 <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a class" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="artificer">Artificer</SelectItem>
                                        <SelectItem value="barbarian">Barbarian</SelectItem>
                                        <SelectItem value="bard">Bard</SelectItem>
                                        <SelectItem value="cleric">Cleric</SelectItem>
                                        <SelectItem value="druid">Druid</SelectItem>
                                        <SelectItem value="fighter">Fighter</SelectItem>
                                        <SelectItem value="monk">Monk</SelectItem>
                                        <SelectItem value="paladin">Paladin</SelectItem>
                                        <SelectItem value="ranger">Ranger</SelectItem>
                                        <SelectItem value="rogue">Rogue</SelectItem>
                                        <SelectItem value="sorcerer">Sorcerer</SelectItem>
                                        <SelectItem value="warlock">Warlock</SelectItem>
                                        <SelectItem value="wizard">Wizard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="">
                                <Label htmlFor="character-background" className="mb-2">Background</Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a background" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="acolyte">Acolyte</SelectItem>
                                        <SelectItem value="charlatan">Charlatan</SelectItem>
                                        <SelectItem value="criminal">Criminal</SelectItem>
                                        <SelectItem value="entertainer">Entertainer</SelectItem>
                                        <SelectItem value="folkHero">Folk Hero</SelectItem>
                                        <SelectItem value="guildArtisan">Guild Artisan</SelectItem>
                                        <SelectItem value="hermit">Hermit</SelectItem>
                                        <SelectItem value="noble">Noble</SelectItem>
                                        <SelectItem value="outlander">Outlander</SelectItem>
                                        <SelectItem value="sage">Sage</SelectItem>
                                        <SelectItem value="sailor">Sailor</SelectItem>
                                        <SelectItem value="soldier">Soldier</SelectItem>
                                        <SelectItem value="urchin">Urchin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="">
                                <Label htmlFor="character-alignment" className="mb-2">Alignment</Label>
                                 <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select the alignment" />
                                    </SelectTrigger>
                                    <SelectContent>
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
                    <section className="grid grid-cols-3 gap-4 mb-2">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold mb-2">Attributes</h2>
                            <div className="flex flex-row-reverse justify-end items-center gap-2">
                                <Label htmlFor="character-str" className="font-semibold">Strength (STR)</Label>
                                <p>+2</p>
                                <Input className="w-14 h-14 text-center" id="character-str" placeholder="STR" />
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse justify-end items-center gap-2">
                                <Label htmlFor="character-dex" className="font-semibold">Dexterity (DEX)</Label>
                                <p>+2</p>
                                <Input className="w-14 h-14 text-center" id="character-dex" placeholder="DEX" />
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse justify-end items-center gap-2">
                                <Label htmlFor="character-con" className="font-semibold">Constitution (CON)</Label>
                                <p>+2</p>
                                <Input className="w-14 h-14 text-center" id="character-con" placeholder="CON" />
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse justify-end items-center gap-2">
                                <Label htmlFor="character-int" className="font-semibold">Intelligence (INT)</Label>
                                <p>+2</p>
                                <Input className="w-14 h-14 text-center" id="character-int" placeholder="INT" />
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse justify-end items-center gap-2">
                                <Label htmlFor="character-wis" className="font-semibold">Wisdom (WIS)</Label>
                                <p>+2</p>
                                <Input className="w-14 h-14 text-center" id="character-wis" placeholder="WIS" />
                            </div>
                            <Separator />
                            <div className="flex flex-row-reverse justify-end items-center gap-2">
                                <Label htmlFor="character-cha" className="font-semibold">Charisma (CHA)</Label>
                                <p>+2</p>
                                <Input className="w-14 h-14 text-center" id="character-cha" placeholder="CHA" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 justify-between items-center">
                                <div>
                                    <h3 className="font-semibold mb-2">CA</h3>
                                    <Input disabled={true} className="text-center w-12 h-12"></Input>
                                </div>
                                <Separator orientation="vertical" className="bg-primary"/>
                                <div>
                                    <h3 className="font-semibold mb-2">HP</h3>
                                    <Input disabled={true} className="text-center w-12 h-12"></Input>
                                </div>
                                <Separator orientation="vertical" className="bg-primary"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Speed</h3>
                                    <Input disabled={true} className="text-center w-12 h-12"></Input>
                                </div>
                            </div>
                            <Separator orientation="horizontal" className="bg-primary"/>
                            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                                <Label htmlFor="proficiency">Proficiency Bonus</Label>
                                <Input disabled={true} className="w-12 h-12 text-center" id="proficiency"></Input>
                            </div>
                            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                                <Label htmlFor="perception">Passive Perception</Label>
                                <Input disabled={true} className="w-12 h-12 text-center" id="perception"></Input>
                            </div>
                            <Separator orientation="horizontal" className="bg-primary"/>
                            <div className="flex flex-col h-full gap-0.5">
                                <h3 className="font-semibold mb-2">Equipment</h3>
                                <p>Equipment 1</p>
                                <Separator className="bg-primary"/>
                                <p>Equipment 2</p>
                                <Separator className="bg-primary"/>
                                <p>Equipment 3</p>
                                <Separator className="bg-primary"/>
                                <p>Equipment 4</p>
                                <Separator className="bg-primary"/>
                                <p>Equipment 5</p>
                                <Separator className="bg-primary"/>
                                <p>Equipment 6</p>
                                <Separator className="bg-primary"/>
                                <p>Equipment 7</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold mb-2">History</h3>
                            <Textarea className="w-full h-full border-primary rounded-md p-2" placeholder="Write your character's history here..."></Textarea>
                        </div>
                    </section>
                    <Button className="w-full">Complete Creation</Button>
                 </form>
            </div>
        </main>
        </>
    );
}