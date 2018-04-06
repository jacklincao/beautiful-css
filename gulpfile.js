var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './',
			index: './*/index.html'
		}
	});

	gulp.watch('./*/*.html').on('change', browserSync.reload);
	gulp.watch('./*/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);