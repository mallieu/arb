# Backup - Agence de Recherche pour la Biodiversité à la Réunion

Le code du site est réparti sur deux structures : 
- Le code généré par WP via le thème DIVI. Un backup mensuel est généré sur un Google Drive dédié
- Le CSS servant à la mise en forme de ce site, via le fichier style.css


#1 Mise en place
Ce repo est la structure du code en SCSS avant la compilation qui fournit le fichier style.css

C'est un ensemble de fichiers qui vont se rassembler en un seul via l'utilitaire gulp. 

Afin de prendre en compte les changements et de compiler automatiquement, il faut lancer :

pnpm install (gestionnaire de paquets) 
pnpm gulp (compilation)

Il faut ensuite se connecter via ftp au serveur afin de récupérer la version en ligne de style.scss.

Dans gulpfile.js, modifier la destination si nécessaire 
    .pipe(gulp.dest('/tmp/fz3temp-2')); // Chemin de sortie pour les fichiers CSS générés

Idem dans package.json
  "scripts": {
    "sass": "sass ./sass/main.scss /tmp/fz3temp-2/style.css -w --style expanded",
    "prefix": "postcss ./sass/prefixed/style.css --use autoprefixer -o ./sass/prefixed/style.css"
  },
  
  
2# Mise en ligne
Une fois le fichier style.css généré, vérifier qu'autoprefixer a bien fonctionnné puis remettre en ligne via ftp (pas par WP)
