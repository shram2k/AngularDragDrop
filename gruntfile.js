// gruntfile.js

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower_concat: {
        all: {
            dest: 'build/bower-concat.js',
            cssDest: 'build/bower-concat.css',
            exclude: [
                'angular-i18n',
                'jquery',
                'modernizr'
            ],
            callback: function(mainFiles, component) {
                return _.map(mainFiles, function(filepath) {
                    // Use minified files if available 
                    var min = filepath.replace(/\.js$/, '.min.js');
                    return grunt.file.exists(min) ? min : filepath;
                });
            },
            bowerOptions: {
                relative: false
            }
        }
    },
        nodemon: {
            //https://github.com/ChrisWren/grunt-nodemon

            dev: {

                script: 'app.js',

                options: {
                    
                    watchedExtensions: ['js'],
                    ignore:['node_modules/**','bower_components/**']
                }

            }

        },

    });


    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', ['nodemon','bower_concat']);
    


};