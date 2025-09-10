import type { Character } from "@/types";
import  { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { CreateCharacter } from "./CreateCharacter";
import { useState } from "react";
import { CharacterDetails } from "./CharacterDetails";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

interface Props {
  character: Character;
  onDelete: () => void;
}

export function CharacterCard({ character, onDelete }: Props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);

    return (
        <>
        {alertDialogOpen && (
            <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
                <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the character from the database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                 <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )}

        {isDialogOpen && (
            <Dialog  open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="min-w-5xl">
                    <DialogTitle>Edit Character</DialogTitle>
                    <DialogDescription>Change the information about your character!</DialogDescription>
                    <div className="">
                        <CreateCharacter character={character} onClose={() => setIsDialogOpen(false)} />
                    </div>
                </DialogContent>
            </Dialog>
        )}
        <Card className="w-fit p-4 h-full shadow-md shadow-primary">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-xl[] font-bold">{character.name}</CardTitle>
                <Button onClick={() => setAlertDialogOpen(true)} className=" bg-primary"><XIcon className="h-2 w-2" /></Button>
            </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <img src={character.image} className="h-48 m-auto mb-2 border-primary border-2 rounded-md shadow-md shadow-primary" alt="Character Image" />
                    <div className="flex gap-4 justify-between">
                        <Label className="font-semibold text-md" htmlFor="character-class">Class</Label>
                        <p className="py-1 px-2 bg-muted-foreground w-full text-center text-accent rounded-md" id="character-class">{character.class}</p>
                    </div>
                    <Separator className=""/>
                    <div className="flex gap-4 justify-between">
                        <Label className="font-semibold text-md" htmlFor="character-race">Race</Label>
                        <p className="py-1 px-2 bg-muted-foreground w-full text-center text-accent rounded-md" id="character-race">{character.race}</p>
                    </div>
                    <Separator className=""/>
                        <Button variant="outline" className="" onClick={() => {
                            setIsDialogOpen(true);
                        }}>Edit Character</Button>
                        <CharacterDetails 
                            character={character}
                            trigger={<Button variant="default" className="">View Details</Button>}
                        />
                </CardContent>
            </Card>
            </>
    )
}