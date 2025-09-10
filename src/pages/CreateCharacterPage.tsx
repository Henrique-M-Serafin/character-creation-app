import { CreateCharacter } from "@/components/CreateCharacter";


export function CreateCharacterPage() {

  return (
    <div className="">
      <div className="flex flex-col items-center gap-2 mb-16">
        <h1 className="font-bold text-2xl">Create your character!</h1>
        <p className="text-muted-foreground">
          Please fill out the form below to create your character.
        </p>
      </div>
      <main className="flex justify-center items-center">
        <CreateCharacter onClose={() => {}}
        />
      </main>
    </div>
  );
}
