import { Image, Video } from '../types'

export default class Show
{
    id: string
    title: string
    originalTitle: string
    overview: string
    images: Image
    videos: Video[]
}