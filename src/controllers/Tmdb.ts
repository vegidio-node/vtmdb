import RestService from '../services/rest.service'
import Show from '../models/show.model'

export default class Tmdb
{
    private rest: RestService

    constructor(apiKey: string, language = 'en')
    {
        this.rest = new RestService(apiKey, language)
    }

    async findByExternalId(id: string, source: string): Promise<Show>
    {
        return this.rest.fetchFindByExternalId(id, source)
    }
}