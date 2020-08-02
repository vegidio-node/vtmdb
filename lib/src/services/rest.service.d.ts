import Show from '../models/show.model';
export default class RestService {
    private client;
    constructor(apiKey: string, language: string);
    fetchFindByExternalId(id: string, source: string): Promise<Show>;
    fetchMovieById(id: string): Promise<Show>;
    private createImages;
    private createVideos;
}
