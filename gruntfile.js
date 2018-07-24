module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            development: {
                files: {"css/main-dev.css": "sass/main.scss"}
            },
            production: {
                files: {"css/main.css": "sass/main.scss"},
                options: {
                    style:'compressed'
                }
            }
        },
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['opera 12', 'ff 15', 'chrome 25', 'ie 9'],
                    map: true
                },
                files:{
                    'css/main.css':'css/main.css'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass', 'autoprefixer']);
};