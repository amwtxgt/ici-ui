const gulp = require('gulp');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify'); //压缩js
const conact = require('gulp-concat'); //合并多个文件
gulp.task('vue', function () {
  return gulp.src(['./ici_component/main.js'])
    .pipe(webpack({
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
    .pipe(conact('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('ici_component/dist'))
});
gulp.task('pack', function () {
  return gulp.src(['./ici_component/pack.js'])
    .pipe(webpack({
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
//    .pipe(header('(function (global, factory) {\n' +
//      '  typeof exports === \'object\' && typeof module !== \'undefined\' ? module.exports = factory() :\n' +
//      '    typeof define === \'function\' && define.amd ? define(factory) : (global.vueIci = factory());\n' +
//      '}(this,function(){'))
//    .pipe(footer('return vueIci}))'))
//    .pipe(uglify())
    .pipe(gulp.dest('ici_component/dist'))
});

gulp.task('default', ['vue','pack']);

var watcher = gulp.watch(
  ['./ici_component/main.js',
   './ici_component/**/*.vue',
  ], ['vue','pack']);

watcher.on('change', function (event) {
  console.log('文件 ' + event.path + ' 发生在 ' + event.type + ', 运行的任务……');
});
