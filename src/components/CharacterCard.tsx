import type { Character } from "@/types";
import  { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

interface Props {
  character: Character;
}

export function CharacterCard({ character }: Props) {
    return (
        <Card className="w-fit p-4 h-full shadow-md shadow-primary" key={character.id}>
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">{character.name}</CardTitle>
                <CardDescription>{character.race}</CardDescription>
            </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <img src={character.image} className="h-48 m-auto border-primary border-2 rounded-md shadow-md shadow-primary" alt="Character Image" />
                    <div className="flex justify-between">
                        <Label className="font-semibold text-md" htmlFor="character-class">Class</Label>
                        <p className="py-1 px-2 bg-muted-foreground text-accent rounded-md" id="character-class">{character.class}</p>
                    </div>
                    <Separator className=""/>
                    <div className="flex justify-between">
                        <Label className="font-semibold text-md" htmlFor="character-background">Background</Label>
                        <p className="py-1 px-2 bg-muted-foreground text-accent rounded-md" id="character-background">{character.background}</p>
                    </div>
                    <Separator className=""/>
                    <div className="flex justify-between">
                        <Label className="font-semibold text-md" htmlFor="character-alignment">Alignment</Label>
                        <p className="py-1 px-2 bg-muted-foreground text-accent rounded-md" id="character-alignment">{character.alignment}</p>
                    </div>
                </CardContent>
            </Card>
    )
}