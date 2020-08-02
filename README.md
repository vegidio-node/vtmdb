# vtmdb

[![GitHub Actions](https://img.shields.io/github/workflow/status/vegidio-node/vtmdb/test?label=tests)](https://github.com/vegidio-node/vtmdb/actions)
[![Codecov](https://img.shields.io/codecov/c/github/vegidio-node/vtmdb)](https://codecov.io/gh/vegidio-node/vtmdb)
[![NPM Downloads](https://img.shields.io/npm/dt/vtmdb.svg)](https://www.npmjs.com/package/vtmdb)
[![TypeScript](https://img.shields.io/npm/types/vtmdb.svg)](https://www.typescriptlang.org)
[![ISC License](https://img.shields.io/npm/l/vtmdb?color=important)](LICENSE.txt)

A more modern library to access the content of TMDB (under development).

## ⚙️ Installation

In your project root folder, enter the following command in the terminal:

```
$ yarn add vtmdb
```
or, if you use NPM:

```
$ npm install vtmdb
```

## 🤖 Usage

Import the class `Tmdb` in your project and initialize it passing the parameters for the API key and the language that you want to get the results. For example, `new Tmdb('pt-BR')` will return results in Brazilian Portuguese.

If no language parameter is specified then the default language will be set to English.

### Get a show by ID

```typescript
// Import the package in your script and initialize the Tmdb class
import Tmdb from 'vtmdb'
const tmdb = new Tmdb()

// Get the details of the show "The Simpsons"
tmdb.getShow('tt0096697')
    .then(console.log)
```

And the response should be something similar to this:

```json
{
    "identifier": "tt0096697",
    "url": "https://www.Tmdb.com/title/tt0096697",
    "name": "The Simpsons",
    "summary": "The satiric adventures of a working-class family in the misfit city of Springfield.",
    "description": "This is an animated sitcom about the antics of a dysfunctional family. Homer is the oafish unhealthy beer loving father, Marge is the hardworking homemaker wife, Bart is the perpetual ten-year-old underachiever (and proud of it), Lisa is the unappreciated eight-year-old genius, and Maggie is the cute, pacifier loving silent infant.",
    "year": 1989,
    "contentRating": "TV-PG",
    "alternativeName": null,
    "duration": 22,
    "aggregateRating": { "ratingValue": 8.7, "ratingCount": 353617 },
    "genre": [ "Animation", "Comedy" ],
    "image": {
        "small": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "big": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    },
    "recommended": [
        { "identifier": "tt0121955", "name": "South Park" },
        { "identifier": "tt0182576", "name": "Family Guy" },
        { "identifier": "tt0149460", "name": "Futurama" },
        { "identifier": "tt0397306", "name": "American Dad!" },
        { "identifier": "tt0462538", "name": "The Simpsons Movie" },
        { "identifier": "tt0412142", "name": "House" },
        { "identifier": "tt2861424", "name": "Rick and Morty" },
        { "identifier": "tt2085059", "name": "Black Mirror" },
        { "identifier": "tt1628033", "name": "Top Gear" },
        { "identifier": "tt0098904", "name": "Seinfeld" },
        { "identifier": "tt3398228", "name": "BoJack Horseman" },
        { "identifier": "tt0367279", "name": "Arrested Development" }
    ]
}
```

### Documentation

For detailed information on how to use this package, please check the [API reference](https://vegidio-node.github.io/vtmdb) for more examples.

## 📝 License

**vtmdb** is released under the ISC License. See [LICENSE](LICENSE.txt) for details.

## 👨🏾‍💻 Author

Vinicius Egidio ([vinicius.io](http://vinicius.io))