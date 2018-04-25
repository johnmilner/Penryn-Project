module.exports = {
    js: {
        entry: 'src/static/js/main.js',
        dest: 'src/static/js/app.js',
        watch: [
            './src/static/js/app/**/*.js',
            './src/static/js/Engine/**/*.js',
            './src/static/js/lib/**/*.js',
            './src/static/js/main.js'
        ],
        eslint: 'build/node/common/config/.eslintrc'
    },
    css: {
        entry: 'src/static/style/css/main.css',
        dest: 'src/static/style/css/app.css',
        watch: [
            './src/static/style/css/main.css',
            './src/static/style/css/app/**/*.css'
            // './src/static/style/css/app/lib/**/*.css',
            // './src/static/style/css/app/common/**/*.css',
            // './src/static/style/css/app/page/**/*.css',
            // './src/static/style/css/app/vars/**/*.css'
        ],
        autoprefixer: ['last 2 versions']
    },
    php: {
        watch: [
            './src/app/**/*.php',
            './src/engine/**/*.php'
        ]
    }
}
