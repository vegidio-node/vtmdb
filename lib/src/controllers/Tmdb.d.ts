import Show from '../models/show.model';
export default class Tmdb {
    private rest;
    constructor(apiKey: string, language?: string);
    findByExternalId(id: string, source: string): Promise<Show>;
}
