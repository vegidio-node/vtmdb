import RestService from '../services/rest.service'
import Show from '../models/show.model'
import { SourceType } from '../enums'

export default class Tmdb
{
    private rest: RestService

    constructor(apiKey: string, language = 'en')
    {
        this.rest = new RestService(apiKey, language)
    }

    async findByExternalId(id: string, source: SourceType): Promise<Show>
    {
        return this.rest.fetchFindByExternalId(id, source)
    }
}