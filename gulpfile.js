var gulp = require('gulp');
var gulp = require('gulp-less');
var gulp = require('gulp-ftp');
var gulp = require('gulp-watch');

gulp.task('default', function () {
	gulp.src('src/*')
		.pipe(ftp({
			host: 'rawincome.com',
			user: 'adam@rawincome.com',
			pass: 'sa00lj1010'
		}))
		.pipe(watch(function(files) {
            return files.pipe(sass())
                .pipe(gulp.dest('./dist/'));
        }));
});
