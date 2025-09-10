import  { atom }  from "recoil";
import type { Character } from "@/types";

export const charactersState = atom<Character[]>({
    key: 'charactersState',
    default: [],
});


