module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            development: {
                files: {"css/main-dev.css": "sass/main.scss"}
            },
            production: {
                files: {"css/main.css": "sass/main.scss"}
            }
        },
        watch: {
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
};