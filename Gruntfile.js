module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files: {
                    'dist/main.css': 'src/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'dist/main.min.css':'src/main.less'
                }
            },
            replace: {
                dev: {
                    options:{
                        patterns:[
                            {
                                match: 'ENDERECO_DO_HTML',
                                replacement: './'
                            }
                        ]
                    },
                    files: {
                        expand:true,
                        flatten:true,
                        src:['src/index.html'],
                        dest:'dist/'
                    }
                }
            }
        },
        uglify:{
            target:{
                files: {
                    'dist/main.min.js' : 'src/main.js'
                }
            }
        }
    })


grunt.loadNpmTasks('grunt-contrib-less');
grunt.registerTask('default', ['less:development']);
grunt.registerTask('build', ['less:production']);
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.loadNpmTasks('grunt-replace');
grunt.registerTask('build', ['uglify']);
}

