"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var server = require("browser-sync").create();

gulp.task("less", function () {
    return gulp.src("less/style.less")
        .pipe(less())
        .pipe(gulp.dest("css"))
        .pipe(server.stream());
  });

  gulp.task("server", function () {
    server.init({
      server: ".",
      notify: false,
      open: true,
      cors: true,
      ui: false
    });

    gulp.watch("less/**/*.less", gulp.series("less"));
    gulp.watch("*.html").on("change", server.reload);
  });


  gulp.task("start", gulp.series("less", "server"));


// gulp.task("server", function() {
//     server.init({
//       server: ".",
//       notify: false,
//       open: true,
//       cors: true,
//       ui: false
//     });
// });

// gulp.watch("less/**/*.less", gulp.series("less"));
// gulp.watch("*.html").on("change", server.reload)
// gulp.task("build", ["less", "server"]);
