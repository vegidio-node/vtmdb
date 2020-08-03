import { Image, Video } from '../types'

export default abstract class Show
{
    id: string
    name: string
    originalName: string
    overview: string
    images: Image
    videos: Video[]
}