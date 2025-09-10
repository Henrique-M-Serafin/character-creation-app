import type { Character } from "@/types";
import axios, { type AxiosResponse} from "axios";


const instanceAPI = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

const responseBody = (resposta: AxiosResponse) => resposta.data;

export const requisicoes = {
    get: <T>(url: string) => instanceAPI.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => instanceAPI.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => instanceAPI.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => instanceAPI.delete<T>(url).then(responseBody),
}

export const characterService = {
    getCharacters: () => requisicoes.get<Character[]>('/characters'),
    getCharactersExpanded: () => requisicoes.get<Character[]>('/characters?_expand=class&_expand=race&_expand=background'),
    updateCharacter: (id: string, character: Omit<Character, 'id'>) => requisicoes.put<Character>(`/characters/${id}`, character),
    createCharacter: (character: Omit<Character, 'id'>) => requisicoes.post<Character>('/characters', character),
    deleteCharacter: (id: string) => requisicoes.delete<void>(`/characters/${id}`),
}