import { characterService } from "@/api/api";
import { CharacterCard } from "@/components/CharacterCard";
import { charactersState } from "@/state/atom";
import type { Character } from "@/types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export function CharacterListPage() {

    const [characters, setCharacters] = useRecoilState<Character[]>(charactersState)
    
    const loadCharacters = async () => {
        const data = await characterService.getCharacters();
        setCharacters(data);
    }

    useEffect(() => {
            loadCharacters();
    }, [])

    const handleDelete = async (id: string) => {
    try {
        if (!id) return;
        await characterService.deleteCharacter(id);
        setCharacters(prev => prev.filter(c => c.id !== id));
    } catch (err) {
        console.error("Failed to delete character:", err);
    }
    }


    return (
    <>
    <div className="mb-2">
        <h1 className="font-semibold text-xl">Character List Page</h1>
        <p className="text-muted-foreground">List of characters will be displayed here. The Images are just to ilustrate the class!</p>
    </div>
    <main className="">
        {characters.length === 0 && 
            <div className="flex  w-full justify-center items-center">
                <p>No characters available.</p>
            </div>
        }
        <div className="flex justify-center w-full h-full flex-wrap gap-4">
            {characters.map((character) => (
                <CharacterCard key={character.id} onDelete={() => handleDelete(character.id!)} 
                    character={character}
                />
            ))}
        </div>
    </main>
    </>
    )
}