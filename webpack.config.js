module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module:{
        rules:[
            {   test:/\.js$/, 
                loader:'babel-loader', //se tiene qur tener node_modules en el mismo directorio
                exclude: /node_modules/,
                query: { presets: ['es2015'] } 
            }
        ]
    }
};