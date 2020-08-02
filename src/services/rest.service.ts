import axios, { AxiosInstance } from 'axios'
import Show from '../models/show.model'
import { Image, Video } from '../types'

export default class RestService
{
    private client: AxiosInstance

    constructor(apiKey: string, language: string)
    {
        this.client = axios.create({
            baseURL: 'https://api.themoviedb.org/3/'
        })

        this.client.interceptors.request.use((config) => {
            config.params = { api_key: apiKey, language: language }
            return config
        })
    }

    async fetchFindByExternalId(id: string, source: string): Promise<Show>
    {
        const response = await this.client.get( `find/${id}?external_source=${source}`)
        const json = response.data

        let _id = json.movie_results[0]?.id
        if (_id) return this.fetchMovieById(_id)
    }

    async fetchMovieById(id: string): Promise<Show>
    {
        const response = await this.client.get(`movie/${id}?append_to_response=images,videos`)
        const json = response.data

        const show = new Show()
        show.id = json.id
        show.title = json.title === '' ? undefined : json.title
        show.originalTitle = json.original_title === '' ? undefined : json.original_title
        show.overview = json.overview === '' ? undefined : json.overview
        show.images = this.createImages(json)
        show.videos = this.createVideos(json)

        return show
    }

    // region - Private methods
    private createImages(json: any): Image
    {
        return {
            backdropUrl: json.backdrop_path ? `https://image.tmdb.org/t/p/original${json.backdrop_path}` : undefined,
            posterUrl: json.poster_path ? `https://image.tmdb.org/t/p/original${json.poster_path}` : undefined
        }
    }

    private createVideos(json: any): Video[]
    {
        return json.videos?.results?.map((video: any) => {
            return {
                id: video.id,
                name: video.name,
                language: `${video.iso_639_1}-${video.iso_3166_1}`,
                url: `https://www.youtube.com/watch?v=${video.key}`
            }
        })
    }
    // endregion
}