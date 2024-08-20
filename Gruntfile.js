module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files: {
                    'main.css': 'main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'main.min.css':'main.less'
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
grunt.loadNpmTasks('grunt-replace');
grunt.registerTask('default', ['less']);
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('build', ['uglify']);
}

