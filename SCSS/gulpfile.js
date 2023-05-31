// Importer les modules Gulp et gulp-sass
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")
const rename = require("gulp-rename") // Ajout du plugin gulp-rename
const sourcemaps = require("gulp-sourcemaps")

// Tâche pour compiler Sass
gulp.task("sass", function () {
    return gulp
        .src("./sass/**/*.scss") // Chemin de vos fichiers Sass
        .pipe(sourcemaps.init()) // Initialize source maps
        .pipe(sass().on("error", sass.logError))
        .pipe(rename("style.css")) // Renommer le fichier de sortie en 'style.css'
        .pipe(autoprefixer()) // Ajouter les préfixes CSS
        .pipe(sourcemaps.write(".")) // Write source maps to the same directory as CSS
        .pipe(gulp.dest("../Divi child/")) // Chemin de sortie pour les fichiers CSS générés
})

// Tâche par défaut de Gulp
gulp.task("default", function () {
    gulp.watch("./sass/**/*.scss", gulp.series("sass")) // Surveiller les changements dans les fichiers Sass et déclencher la tâche 'sass'
})
