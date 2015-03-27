module.exports = function(grunt) {

grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

  jshint: {
    scripts: ['js/*.js']
  },

  watch: {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint', 'concat']
    },
    script: {
      files: ['js/*.js'],
      tasks: ['jshint', 'uglify'],
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
  },

   concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/md5.js', 'js/abTest.js'],
      dest: 'js/build/abTest.min.js',
    },
  },

  uglify: {
    dist: {
      files: {
        'js/build/abTest.min.js': ['js/md5.js', 'js/abTest.js']
      }
    }
  }

});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['connect', 'watch']);

};
