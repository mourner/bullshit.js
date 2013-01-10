/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        meta: {
            version: '0.1',
            banner: '/*\n Bullshit.js v<%= meta.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +
                ' https://github.com/mourner/bullshit.js\n' +
                ' (c) <%= grunt.template.today("yyyy") %> Vladimir Agafonkin, MIT License\n*/'
        },

        lint: {
            files: [
                'grunt.js',
                'src/**/!(intro|outro)*.js'
            ]
        },

        // qunit: {
        //     files: ['test/**/*.html']
        // },

        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    'lib/findAndReplaceDOMText.js',
                    'src/intro.js',
                    'src/terms.js',
                    'src/replace.js',
                    'src/outro.js'
                ],
                dest: 'bullshit.src.js'
            }
        },

        min: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    '<config:concat.dist.dest>'
                ],
                dest: 'bullshit.js'
            }
        },

        // watch: {
        //     files: '<config:lint.files>',
        //     tasks: 'lint qunit'
        // },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                findAndReplaceDOMText: true,
                bullshitTerms: true
            }
        },

        uglify: {}
    });

    // default task
    // TODO add qunit
    grunt.registerTask('default', 'lint concat min');

};
