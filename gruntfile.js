module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			target: {
				files: {
					'source/style.css': ['css/*.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['cssmin']);
}
