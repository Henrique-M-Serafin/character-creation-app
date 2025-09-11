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
import { ScrollArea } from "./ui/scroll-area";

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
                <AlertDialogContent className="dark:bg-card dark:text-foreground dark:border-border">
                <AlertDialogHeader>
                    <AlertDialogTitle className="dark:text-foreground">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className="dark:text-muted-foreground">
                        This action cannot be undone. This will permanently delete the character from the database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                 <AlertDialogFooter>
                    <AlertDialogCancel className="dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete} className="dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/90">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )}

        {isDialogOpen && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-[95vw] max-h-[90vh] w-full lg:max-w-5xl overflow-hidden dark:bg-card dark:text-foreground dark:border-border">
                    <DialogTitle className="dark:text-foreground">Edit Character</DialogTitle>
                    <DialogDescription className="dark:text-muted-foreground">Change the information about your character!</DialogDescription>
                    <ScrollArea className="h-[calc(90vh-120px)] w-full pr-4">
                        <div className="p-1">
                            <CreateCharacter character={character} onClose={() => setIsDialogOpen(false)} />
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        )}
        <Card className="w-fit p-4 h-full shadow-md shadow-primary dark:shadow-lg dark:shadow-primary dark:bg-card dark:text-foreground dark:border-border">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-xl[] font-bold dark:text-foreground">{character.name}</CardTitle>
                <Button onClick={() => setAlertDialogOpen(true)} className=" bg-primary dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"><XIcon className="h-2 w-2" /></Button>
            </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <img src={character.image} className="h-48 m-auto mb-2 border-primary dark:border-primary border-2 rounded-md shadow-md shadow-primary dark:shadow-primary" alt="Character Image" />
                    <div className="flex gap-4 justify-between">
                        <Label className="font-semibold text-md dark:text-foreground" htmlFor="character-class">Class</Label>
                        <p className="py-1 px-2 bg-muted-foreground dark:bg-muted-foreground w-full text-center text-accent dark:text-accent rounded-md" id="character-class">{character.class}</p>
                    </div>
                    <Separator className=""/>
                    <div className="flex gap-4 justify-between">
                        <Label className="font-semibold text-md dark:text-foreground" htmlFor="character-race">Race</Label>
                        <p className="py-1 px-2 bg-muted-foreground dark:bg-muted-foreground w-full text-center text-accent dark:text-accent rounded-md" id="character-race">{character.race}</p>
                    </div>
                    <Separator className=""/>
                        <Button variant="outline" className="dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80 dark:border-border" onClick={() => {
                            setIsDialogOpen(true);
                        }}>Edit Character</Button>
                        <CharacterDetails 
                            character={character}
                            trigger={<Button variant="default" className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">View Details</Button>}
                        />
                </CardContent>
            </Card>
            </>
    )
}