module.exports = function(grunt) {

grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

  jshint: {
    scripts: ['js/*.js']
  },

  watch: {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint']
    },
    script: {
      files: ['js/*.js'],
      tasks: ['jshint'],
      options: {
        livereload: true,
      }
    }
  },

  connect: {
    server: {
      options: {
        port: 3333,
        hostname: 'localhost'
      }
    }
  }

});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default', ['connect', 'watch']);

};
