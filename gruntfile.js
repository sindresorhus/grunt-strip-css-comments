'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		stripCssComments: {
			strip: {
				files: {
					'test/tmp/stripped.css': 'test/fixture/original.css'
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'stripCssComments', 'simplemocha', 'clean']);
};
