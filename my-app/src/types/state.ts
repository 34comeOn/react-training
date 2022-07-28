import { SearchPayload } from '../types/action';

export type State = {
    favourite: number | null,
    search: SearchPayload,
}