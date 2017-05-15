const gulp = require('gulp');
// const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer= require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const px2rem= require('postcss-px2rem');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js')

/*********************css***********************/
gulp.task('convertCSS', function(){
    return gulp.src('app/css/*.less')
        .pipe(less())
        .pipe(postcss([px2rem({remUnit: 64})]))
        .pipe(autoprefixer({
            browsers: [ '>5%'],
            cascade: false, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(concat('app.css'))

        .pipe(gulp.dest('dist/css'))
        .pipe(cssnano())
        .pipe(rename(function(path){
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/css'));
})
/*********************js************************/
gulp.task('html', function() {
    return gulp.src('app/*.html') // 指明源文件路径、并进行文件匹配
        .pipe(gulp.dest('dist')); // 输出路径
});
// 编译并压缩js
gulp.task('convertJS', function(){
    return gulp.src('app/js/*.js')
        .pipe(webpack( webpackConfig ))
        .pipe(gulp.dest('dist/'))
})



// 监视文件变化，自动执行任务
gulp.task('watch', function(){
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/css/*.less', ['convertCSS']);
    gulp.watch('app/js/*.js', ['convertJS']);
})



gulp.task('start', ['convertJS', 'convertCSS', 'html']);
gulp.task('default',['start','watch']);
