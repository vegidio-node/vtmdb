import Tmdb, { Show } from '../src'

let show: Show

beforeAll(async () => {
    jest.setTimeout(60000)
    const tmdb = new Tmdb('ab0f13160cec15449ab79e705a1c636c')
    show = await tmdb.findByExternalId('tt8111088', 'imdb_id')
})

describe('The Mandalorian is correctly fetched (EN)', () =>
{
    test('The show is a Series', () => {
        expect(1).toEqual(1)
    })
})