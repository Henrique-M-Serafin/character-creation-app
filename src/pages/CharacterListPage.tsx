import { characterService } from "@/api/api";
import { CharacterCard } from "@/components/CharacterCard";
import type { Character } from "@/types";
import { useEffect, useState } from "react";

export function CharacterListPage() {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        const response = characterService.getCharactersExpanded()
        response.then(data => setCharacters(data))
    }, [])

    return (
    <>
    <div className="mb-2">
        <h1 className="font-semibold text-xl">Character List Page</h1>
        <p className="text-muted-foreground">List of characters will be displayed here.</p>
    </div>
    <main className="">
        {characters.length === 0 && <p>No characters available.</p>}
        <div className="flex h-full flex-wrap gap-4">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    </main>
    </>
    )
}