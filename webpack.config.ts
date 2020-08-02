import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
    target: 'node',
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd',
        filename: './vtmdb.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {test: /\.ts$/, loaders: 'ts-loader'}
        ]
    }
}

export default config