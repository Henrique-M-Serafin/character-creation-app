import type { Character } from "@/types";
import axios, { type AxiosResponse} from "axios";


const instanceAPI = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

const responseBody = (resposta: AxiosResponse) => resposta.data;

export const requisicoes = {
    get: <T>(url: string) => instanceAPI.get<T>(url).then(responseBody),
}

export const characterService = {
    getCharacters: () => requisicoes.get<Character[]>('/characters'),
    getCharactersExpanded: () => requisicoes.get<Character[]>('/characters?_expand=class&_expand=race&_expand=background'),
}