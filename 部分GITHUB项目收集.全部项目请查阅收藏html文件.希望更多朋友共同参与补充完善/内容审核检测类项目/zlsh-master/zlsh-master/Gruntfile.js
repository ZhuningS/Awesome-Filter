module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + ' * Copyright (c) <%= grunt.template.today("yyyy") %>\n * Powered by <%= pkg.author.team%>' + '\n */\n',
		concat: {
			options: {
				separator: ';'
			},
			module: {
				nonull: true,
				files: {
					'<%= pkg.cfg.releasePath %>/zlsh.lib.js': [
						"./htdocs/js/lib/txv.core.min.js",
						"./htdocs/js/lib/bootstrap.min.js",
						"./htdocs/js/lib/jquery.simplePagination.js",
						"./htdocs/js/lib/json2.js",
					],
					'<%= pkg.cfg.releasePath %>/zlsh.main.js': [
                        "./htdocs/js/common/*.js",
                        "./htdocs/js/typemap.js",
                        "./htdocs/js/dataquery.js",
                        "./htdocs/js/main.js",
                    ]
				}
			}
		},
		uglify: {
		    options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            release: {
                options: {
                    report: "min",
                    footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
                },
                files: [{
                    expand: true,
                    cwd: '<%= pkg.cfg.releasePath %>',
                    src: ['**/*.js'],
                    dest: '<%= pkg.cfg.releasePath %>',
                    rename: function(dest, src) {
                        return dest + src.replace(/\.js$/, ".js");
                    }
                }]
            }
        },
		watch: {
			js: {
				files: ['./htdocs/**/*.js'],
				tasks: ['copy:js'],
				options: {
					interval: 300
				}
			},
			html: {
                files: ['./htdocs/**/*.html'],
                tasks: ['copy:html'],
                options: {
                    interval: 300
                }
            },
            css: {
                files: ['./htdocs/**/*.css'],
                tasks: ['copy:css'],
                options: {
                    interval: 300
                }
            }
		},
		copy: {
		    js : {
                 files :[{
                    expand : true,
                    cwd: '<%= pkg.cfg.devpath %>',
                    src: ['**/*.js'],
                    dest : '\\\\10.6.207.60\\livesvn\\ancheltong\\shenhe\\htdocs',
                    filter : 'isFile'
                }]
            },
            html : {
                 files :[{
                    expand : true,
                    cwd: '<%= pkg.cfg.devpath %>',
                    src: ['**/*.html'],
                    dest : '\\\\10.6.207.60\\livesvn\\ancheltong\\shenhe\\htdocs',
                    filter : 'isFile'
                }]
            },
            css : {
                 files :[{
                    expand : true,
                    cwd: '<%= pkg.cfg.devpath %>',
                    src: ['**/*.css'],
                    dest : '\\\\10.6.207.60\\livesvn\\ancheltong\\shenhe\\htdocs',
                    filter : 'isFile'
                }]
            }
		},
		clean : {
		    distjs: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.cfg.releasePath %>',
                    src: ['**/*.js']
                }]
            }
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('core', ['clean', 'concat', 'uglify']);
    grunt.registerTask('build', ['core', 'copy:html', 'copy:js']);
    grunt.registerTask('default', ['build']);
};