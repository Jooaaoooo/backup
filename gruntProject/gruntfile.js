module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }/*4,
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }*/
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: '@@ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        }/*5,
                        {
                            match: '@@ENDERECO_DO_JS',
                            replacement: './src/scripts/main.js'
                        }*/
                    ]
                }, 
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: '/dev'
                    }
                ]
            },/*2,
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
                        }*//*5,
                        {
                            match: '@@ENDERECO_DO_JS',
                            replacement: './src/scripts/main.js'
                        }
                    ]
                },*/ 
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: [./prebuild/index.html'],
                    dest: 'dist/'
                }
            ]
            }
        }/*1, 
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        }*//*3, 
        clean: ['prebuild']*//*6,
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js : 
                }
                }
            }
        }*/
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    /*2grunt.loadNpmTasks('grunt-contrib-htmlmin');*/
    /*3grunt.loadNpmTasks('grunt-contrib-clean');*/
    /*6grunt.loadNpmTasks('grunt-contrib-uglify');*/

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production'/*2, 'htmlmin:dist', 'replace:dist'*//*3, 'clean'*//*6,'uglify'*/]);
}