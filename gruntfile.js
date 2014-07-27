module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            gitRepoUpdate: {
                command: [
                    'git remote update --prune',
                    'git status'
                ].join('&&'),
                options: {
                    stdout: true
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'public/js/vendor/modernizr/modernizr.js',
                    'public/js/vendor/dinosaur_konami/dinosaur_konami.js',
                    'public/js/global.js'
                ],
                dest: 'public/js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: 'public/js/build/production.js',
                dest: 'public/js/build/production.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/global.css': 'public/css/global.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['public/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    require('load-grunt-tasks')(grunt);

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['shell', 'concat', 'uglify', 'sass', 'watch']);

};