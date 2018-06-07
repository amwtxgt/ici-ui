const gulp = require('gulp');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify'); //压缩js
const babel = require('gulp-babel')
const rename = require('gulp-rename');
const gutil = require('gulp-util');

gulp.task('pack', function () {
    return gulp.src(['./index.js']).pipe(webpack({
        output: {
            filename: "vue-ici.js"
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ],
                }, {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                        // other vue-loader options go here
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        }
    }))
        .pipe(babel({presets: ['env']}))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))

});
gulp.task('doc', function () {
    return gulp.src(['./doc.js'])
        .pipe(webpack({
            output: {
                filename: "doc.js"
            },
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: [
                            'vue-style-loader',
                            'css-loader'
                        ],
                    }, {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            }
        }))
        .pipe(babel({presets: ['env']}))
        .pipe(gulp.dest('dist'))
});
gulp.task('default', ['doc', 'pack']);

var watcher = gulp.watch(
    ['./index.js',
     './components/*.vue',
    ], ['pack']);

var watcher2 = gulp.watch(
    ['./doc.js',
     './examples/*.vue',
     './config/*.vue',
     './config/*.js',
     './config/*.css',
    ], ['doc']);

watcher.on('change', function (event) {
    console.log('文件 ' + event.path + ' 发生在 ' + event.type + ', 运行的任务……');
});
