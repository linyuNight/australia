var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');

var Asset = {
	// css:'scss/**/*.scss',
	css:'scss/**/*.styl',
	all:'client/**/*.html'
}

gulp.task('sass',function(){
	gulp.src(Asset.css)
		// .pipe(sass().on('error', sass.logError))
		.pipe(stylus())
		.pipe(gulp.dest('client/css'))
		.pipe(connect.reload());
})

gulp.task('toreload',function(){
	gulp.src(Asset.all)
		.pipe(connect.reload());
})

gulp.task('watch',function(){
	gulp.watch(Asset.css,['sass']);
	gulp.watch(Asset.all,['toreload']);
})

gulp.task('connect',function(){
	connect.server({
		root: 'client',
		livereload:true,
		port:8888
	});
})

gulp.task('default',['sass','watch','connect'],function() {
  	
});