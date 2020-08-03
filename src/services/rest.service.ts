import axios, { AxiosInstance } from 'axios'
import Movie from '../models/movie.model'
import Series from '../models/series.model'
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

    async fetchFindByExternalId(id: string, source: string): Promise<Movie | Series>
    {
        const response = await this.client.get( `find/${id}?external_source=${source}`)
        const json = response.data

        let _id = json.movie_results[0]?.id
        if (_id) return this.fetchMovieById(_id)

        _id = json.tv_results[0]?.id
        if (_id) return this.fetchSeriesById(_id)
    }

    async fetchMovieById(id: string): Promise<Movie>
    {
        const response = await this.client.get(`movie/${id}?append_to_response=images,videos`)
        const json = response.data

        const movie = new Movie()
        movie.id = json.id
        movie.name = json.title === '' ? undefined : json.title
        movie.originalName = json.original_title === '' ? undefined : json.original_title
        movie.overview = json.overview === '' ? undefined : json.overview
        movie.images = this.createImages(json)
        movie.videos = this.createVideos(json)

        return movie
    }

    async fetchSeriesById(id: string): Promise<Series>
    {
        const response = await this.client.get(`tv/${id}?append_to_response=images,videos`)
        const json = response.data

        const series = new Series()
        series.id = json.id
        series.name = json.name === '' ? undefined : json.name
        series.originalName = json.original_name === '' ? undefined : json.original_name
        series.overview = json.overview === '' ? undefined : json.overview
        series.images = this.createImages(json)
        series.videos = this.createVideos(json)

        return series
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